import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type AppRole = "admin" | "user" | "trial_user" | "coach";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  userRole: AppRole | null;
  expiryTime: string | null;
  signUp: (email: string, password: string, fullName?: string, userType?: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  macroResult?: any
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [roleLoading, setRoleLoading] = useState(true);
  const [userRole, setUserRole] = useState<AppRole | null>(null);
  const [expiryTime, setExpiryTime] = useState<string | null>(null);
  const [macroResult, setMacroResult] = useState<any>(null);

  useEffect(() => {
    let active = true;

    // Pick up session tokens handed off from the main site (site 1)
    async function checkIncomingSession() {
      const params = new URLSearchParams(window.location.hash.slice(1));
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (access_token && refresh_token) {
        await supabase.auth.setSession({ access_token, refresh_token });
        // Clean the tokens out of the visible URL
        window.history.replaceState({}, "", window.location.pathname);
      }
    }
    checkIncomingSession();

    async function getRole(userId: string) {
      try {
        const { data, error } = await supabase
          .from("user_roles")
          .select("role, expiry_time")
          .eq("user_id", userId)
          .maybeSingle();
        if (error) throw error;
        if (active) {
          if (data) {
            setUserRole(data.role as AppRole);
            setExpiryTime(data.expiry_time || null);
          } else {
            setUserRole(null);
            setExpiryTime(null);
          }
        }
      } catch (err) {
        console.error("Error fetching user role:", err);
        if (active) {
          setUserRole(null);
          setExpiryTime(null);
        }
      } finally {
        if (active) {
          setRoleLoading(false);
        }
      }
    }

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'TOKEN_REFRESH_FAILED' || event === 'SIGNED_OUT') {
          // Clear stale token to prevent repeated refresh errors
          try {
            const keysToRemove: string[] = [];
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              if (key && key.includes('-auth-token')) {
                keysToRemove.push(key);
              }
            }
            keysToRemove.forEach((k) => localStorage.removeItem(k));
          } catch (e) {
            console.error("Failed to clear local storage", e);
          }
          setSession(null);
          setUser(null);
          setUserRole(null);
          setExpiryTime(null);
          setAuthLoading(false);
          setRoleLoading(false);
          return;
        }

        setSession(session);
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        setAuthLoading(false);
        if (currentUser) {
          getRole(currentUser.id);
        } else {
          setUserRole(null);
          setExpiryTime(null);
          setRoleLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        try {
          const keysToRemove: string[] = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.includes('-auth-token')) {
              keysToRemove.push(key);
            }
          }
          keysToRemove.forEach((k) => localStorage.removeItem(k));
        } catch (e) {}
        setSession(null);
        setUser(null);
        setUserRole(null);
        setExpiryTime(null);
        setAuthLoading(false);
        setRoleLoading(false);
        return;
      }
      setSession(session);
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      setAuthLoading(false);
      if (currentUser) {
        getRole(currentUser.id);
      } else {
        setUserRole(null);
        setExpiryTime(null);
        setRoleLoading(false);
      }
    }).catch(() => {
      setSession(null);
      setUser(null);
      setUserRole(null);
      setExpiryTime(null);
      setAuthLoading(false);
      setRoleLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, fullName?: string, userType?: string) => {
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          signup_source: userType
        },
      },
    });

    return { error: error as Error | null };
  };

  const signIn = async (email: string, password: string) => {
    const { data: AuthData, error: AuthError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if(AuthError){
      return {error: AuthError}
    }

    const { data: profileData, error: RoleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", AuthData.user.id)
      .maybeSingle();

    if (RoleError) {
      await supabase.auth.signOut();
      return { error: RoleError };
    }

    if (!profileData || (
      profileData.role !== 'user' && 
      profileData.role !== 'trial_user' && 
      profileData.role !== 'admin' && 
      profileData.role !== 'coach'
    )) {
      await supabase.auth.signOut();
      return {
        error: { message: "You are not authorized for this role" } as Error,
      };
    }
    
    return { error: AuthError as Error | null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      loading: authLoading || roleLoading, 
      userRole, 
      expiryTime, 
      signUp, 
      signIn, 
      signOut, 
      macroResult 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
