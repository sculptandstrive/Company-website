import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight, Zap } from "lucide-react";
import logoImg from "../../imports/image.png";
import { supabase } from "../../lib/supabase";

const bgImg =
  "https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwZGFyayUyMGRyYW1hdGljJTIwaGVybyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1ODc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const APP_URL =
  "https://users.sculptandstrive.com";

export function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const { access_token, refresh_token } = data.session;
    window.location.href =
      APP_URL +
      "/post-measurement#access_token=" +
      access_token +
      "&refresh_token=" +
      refresh_token;
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
                  onClick={() => {
                    window.location.href = APP_URL + "/reset-password";
                  }}
                  className="text-[#B8F27C] text-xs hover:text-[#B8F27C] transition-colors"
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
              className="group w-full h-11 rounded-xl bg-white text-[#FF6B5E] text-sm font-bold leading-none flex items-center justify-center gap-2 border border-transparent hover:bg-[#FF6B5E]/30 hover:border-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
              {!loading && <ArrowRight size={16} />}
            </motion.button>
          </form>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs whitespace-nowrap">
              or continue with
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                window.open("https://www.google.com", "_blank");
              }}
              className="w-44 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 hover:bg-[#B8F27C]/15 transition-all duration-300"
            >
              <span>🌐</span>
              Google
            </button>

            <p className="text-white/40 text-sm mb-5">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="w-44 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 hover:bg-[#B8F27C]/15 transition-all duration-300"
              >
                Sign up free
              </Link>
              {/* <Link
                to="/signup"
                className="text-[#FF6B5E] font-semibold hover:text-[#B8F27C] transition-colors"
              >
                Sign up free
              </Link> */}
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
        <img
          src={bgImg}
          alt="Fitness"
          className="absolute inset-0 w-full h-full object-cover"
        />
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
              <span className="text-[#B8F27C] text-sm font-semibold">
                Start Your Journey
              </span>
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
    </div>
  );
}
