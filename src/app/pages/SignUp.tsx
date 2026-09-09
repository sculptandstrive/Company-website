import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";

const bgImg =
  "https://images.unsplash.com/photo-1758875569071-717cfaa97c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjBzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTg3NjU1M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const APP_URL = "https://sculptandstrive-users.user-sculptandstrive.workers.dev";

const perks = [
  "Personalized workout programs",
  "Nutrition tracking dashboard",
  "Direct access to certified coaches",
  "Progress analytics & insights",
];

export function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    if (!form.name.trim()) {
      setError("Please enter your full name.");
      setLoading(false);
      return;
    }
    if (!form.email.trim()) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.name,
            name: form.name,
            signup_source: "trial_user",
          },
        },
      });

      if (signUpError) {
        if (signUpError.message.includes("already registered")) {
          setError("This email is already registered. Please sign in instead.");
        } else {
          setError(signUpError.message);
        }
        setLoading(false);
        return;
      }

      let session = signUpData.session;

      // If no session from signUp, attempt direct sign in
      if (!session) {
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });
        if (!signInError && signInData?.session) {
          session = signInData.session;
        }
      }

      if (session) {
        const { access_token, refresh_token } = session;
        window.location.href =
          APP_URL + "/post-measurement#access_token=" + access_token + "&refresh_token=" + refresh_token;
      } else {
        setSuccessMsg("Account created! Please check your email to confirm your account, then sign in.");
        setLoading(false);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during sign up.");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#171A26] lg:grid lg:grid-cols-2">
      {/* LEFT SIDE - IMAGE */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block h-full relative overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={bgImg}
          alt="Fitness"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#171A26]/20 to-[#171A26]" />

        {/* Left Content */}
        <div className="absolute inset-0 flex items-center px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-lg"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#B8F27C]/20 border border-[#B8F27C]/40 mb-6">
              <span className="text-[#B8F27C] text-sm font-semibold">
                Join Sculpt & Strive
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl xl:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              YOUR BEST SELF
              <br />
              <span className="text-[#B8F27C]">STARTS HERE</span>
            </h2>

            {/* Perks */}
            <div className="space-y-3">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-[#B8F27C] shrink-0" />

                  <span className="text-white/70 text-sm">{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT SIDE - SIGN UP FORM */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="h-full flex items-center justify-center px-6 lg:px-14 pt-16 bg-[#171A26] overflow-hidden"
      >
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 leading-[1.05]">
              CREATE <span className="text-[#B8F27C]">ACCOUNT</span>
            </h1>

            <p className="text-white/50 text-sm">
              Start your free fitness journey today.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSignUp}>
            {/* Full Name */}
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-2 tracking-wider uppercase">
                Full Name
              </label>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    name: e.target.value,
                  }))
                }
                placeholder="Your full name"
                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#B8F27C]/60 focus:bg-[#B8F27C]/5 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-2 tracking-wider uppercase">
                Email Address
              </label>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    email: e.target.value,
                  }))
                }
                placeholder="your@email.com"
                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#B8F27C]/60 focus:bg-[#B8F27C]/5 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-2 tracking-wider uppercase">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      password: e.target.value,
                    }))
                  }
                  placeholder="Min. 6 characters"
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#B8F27C]/60 focus:bg-[#B8F27C]/5 transition-all pr-12"
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
            {successMsg && <p className="text-[#B8F27C] text-sm">{successMsg}</p>}

            {/* Create Account Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="group w-full h-11 rounded-xl bg-white text-[#FF6B5E] text-sm font-bold leading-none flex items-center justify-center gap-2 border border-transparent hover:bg-[#FF6B5E]/10 hover:border-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Creating Account..." : "Create Free Account"}</span>

              {!loading && (
                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              )}
            </motion.button>

            {/* Terms */}
            <p className="text-center text-white/30 text-xs leading-relaxed">
              By signing up, you agree to our{" "}
              <a href="#" className="text-[#B8F27C] hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#B8F27C] hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>

          {/* Divider */}
          <div className="mt-5 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />

            <span className="text-white/30 text-xs">or</span>

            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}

          <div className="mt-4 flex items-center justify-center gap-4">
            {/* Google Button */}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-46 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <span>🌐</span>
              Google
            </a>

            {/* Sign Up Text */}
            <p className="text-white/40 text-sm">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#FF6B5E] font-semibold hover:text-[#B8F27C] transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
