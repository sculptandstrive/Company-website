import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Eye, EyeOff, ArrowRight, Zap, X, Mail } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "@/integrations/supabase/AuthContext"; // adjust path to match your project

const bgImg =
  "https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwZGFyayUyMGRyYW1hdGljJTIwaGVybyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1ODc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function SignIn() {
  const { signIn, resetPassword } = useAuth();

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  // Forgot-password modal state
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn(form.email, form.password);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    // AuthProvider's session listener + your router handle redirect after this.
    setLoading(false);
  };

  const handleGoogleAuth = async () => {
    try {
      setError("");
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/post-measurement`,
        },
      });
      if (error) setError(error.message);
    } catch (err: any) {
      setError(err.message || "Failed to initiate Google sign in.");
    }
  };

  const openForgotModal = () => {
    setForgotEmail(form.email); // prefill with whatever they already typed
    setForgotError("");
    setForgotSent(false);
    setShowForgot(true);
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError("");

    if (!forgotEmail.trim()) {
      setForgotError("Please enter your email address.");
      return;
    }

    setForgotLoading(true);
    const { error } = await resetPassword(forgotEmail.trim());
    setForgotLoading(false);

    if (error) {
      setForgotError(error.message);
      return;
    }

    setForgotSent(true);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#171A26] lg:grid lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="h-full flex items-center justify-center px-6 sm:px-10 lg:px-16"
      >
        <div className="w-full max-w-md">
          <div className="mb-7">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-[1.05]">
              WELCOME <span className="text-[#B8F27C]">BACK</span>
            </h1>
            <p className="text-white/50 text-sm">
              Sign in to continue your fitness journey.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSignIn}>
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-2 tracking-wider uppercase">
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#B8F27C]/60 focus:bg-[#B8F27C]/5 transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-white/50 text-xs font-semibold tracking-wider uppercase">
                  Password
                </label>
                <button
                  type="button"
                  onClick={openForgotModal}
                  className="text-[#B8F27C] text-xs hover:underline transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, password: e.target.value }))
                  }
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#B8F27C]/60 focus:bg-[#B8F27C]/5 transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="group w-full h-12 rounded-xl bg-[#B8F27C] text-[#171A26] text-sm font-extrabold leading-none flex items-center justify-center gap-2 shadow-lg shadow-[#B8F27C]/20 hover:bg-[#cbf794] hover:shadow-[#B8F27C]/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{loading ? "Signing In..." : "Sign In"}</span>
              {!loading && <ArrowRight size={16} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.5]" />}
            </motion.button>
          </form>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="mt-4 space-y-3">
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-3 h-11 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <p className="text-center text-white/50 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#B8F27C] font-semibold hover:underline transition-colors">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:block h-full relative overflow-hidden"
      >
        <img src={bgImg} alt="Fitness" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#171A26]/30 to-[#171A26]/70" />
        <div className="absolute top-40 left-0 right-0 px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8F27C]/20 border border-[#B8F27C]/40 mb-5">
              <Zap size={14} className="text-[#B8F27C]" />
              <span className="text-[#B8F27C] text-sm font-semibold">Start Your Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
              EVERY REP
              <br />
              <span className="text-[#B8F27C] block mt-2">COUNTS</span>
            </h2>
            <p className="text-white/90 text-base leading-relaxed max-w-sm">
              Access your personalized fitness plans, track progress, and
              connect with your coach — all in one place.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Forgot password modal */}
      <AnimatePresence>
        {showForgot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
            onClick={() => setShowForgot(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#1E2231] border border-white/10 rounded-2xl p-6 relative"
            >
              <button
                type="button"
                onClick={() => setShowForgot(false)}
                className="absolute right-4 top-4 text-white/30 hover:text-white/70 transition-colors"
              >
                <X size={18} />
              </button>

              {!forgotSent ? (
                <>
                  <h3 className="text-xl font-bold text-white mb-1">Reset your password</h3>
                  <p className="text-white/50 text-sm mb-5">
                    Enter your email and we'll send you a link to reset it.
                  </p>

                  <form onSubmit={handleForgotSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        required
                        autoFocus
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#B8F27C]/60 focus:bg-[#B8F27C]/5 transition-all"
                      />
                    </div>

                    {forgotError && <p className="text-red-400 text-sm">{forgotError}</p>}

                    <button
                      type="submit"
                      disabled={forgotLoading}
                      className="w-full h-11 rounded-xl bg-[#B8F27C] text-[#171A26] text-sm font-extrabold hover:bg-[#cbf794] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {forgotLoading ? "Sending..." : "Send reset link"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-2">
                  <h3 className="text-xl font-bold text-white mb-2">Check your email</h3>
                  <p className="text-white/50 text-sm mb-5">
                    We sent a password reset link to{" "}
                    <span className="text-white/80">{forgotEmail}</span>. It expires shortly, so use it soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowForgot(false)}
                    className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
