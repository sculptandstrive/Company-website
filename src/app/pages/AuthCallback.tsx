import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { supabase } from "../../lib/supabase";
import { getUserAppUrl } from "../../lib/urls";

export function AuthCallback() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let resolved = false;

    // 1. Check for error in query or hash
    const searchParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const urlError =
      searchParams.get("error_description") ||
      searchParams.get("error") ||
      hashParams.get("error_description") ||
      hashParams.get("error");

    if (urlError) {
      setErrorMsg(urlError);
      return;
    }

    const appUrl = getUserAppUrl();

    const forwardToUserApp = (accessToken: string, refreshToken: string) => {
      if (resolved) return;
      resolved = true;
      const targetUrl = `${appUrl}/post-measurement#access_token=${accessToken}&refresh_token=${refreshToken}`;
      window.location.replace(targetUrl);
    };

    // 2. Listen for auth change (Supabase exchanges code in PKCE flow automatically)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.access_token && session?.refresh_token) {
        forwardToUserApp(session.access_token, session.refresh_token);
      }
    });

    // 3. Check if session already available
    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (error) {
          setErrorMsg(error.message);
          return;
        }
        if (data?.session?.access_token && data?.session?.refresh_token) {
          forwardToUserApp(
            data.session.access_token,
            data.session.refresh_token
          );
        }
      })
      .catch((err: any) => {
        setErrorMsg(err?.message || "Failed to retrieve session.");
      });

    // 4. Timeout fallback
    const timeout = setTimeout(() => {
      if (!resolved && !errorMsg) {
        setErrorMsg("Authentication timed out. Please try signing in again.");
      }
    }, 8000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [navigate, errorMsg]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#171A26] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md w-full rounded-2xl bg-white/5 border border-white/10 p-8 text-center backdrop-blur-md shadow-2xl"
      >
        {errorMsg ? (
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="text-xl font-bold text-white">Authentication Failed</h2>
            <p className="text-white/60 text-sm">{errorMsg}</p>
            <button
              onClick={() => navigate("/signin")}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#B8F27C] text-[#171A26] font-bold text-sm hover:bg-[#a6df68] transition-all cursor-pointer"
            >
              Back to Sign In
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border-3 border-[#B8F27C]/30 border-t-[#B8F27C] animate-spin mx-auto" />
            <h2 className="text-xl font-bold text-white">Completing Google Sign In</h2>
            <p className="text-white/60 text-sm">
              Securing your session and redirecting to your workspace...
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
