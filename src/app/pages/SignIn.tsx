import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import logoImg from "../../imports/image.png";
import { supabase } from "../../lib/supabase";

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
      `https://sculptandstrive-users.user-sculptandstrive.workers.dev/post-measurement#access_token=${access_token}&refresh_token=${refresh_token}`;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4 py-10">
      {/* LOGO + TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-6"
      >
        <img src={logoImg} alt="Sculpt and Strive" className="w-20 h-20 mb-3" />
        <h1 className="text-2xl font-bold text-center">
          <span className="text-emerald-600">Sculpt</span> And Strive
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back! Log in to continue.
        </p>
      </motion.div>

      {/* BOX */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-6"
      >
        <form className="space-y-4" onSubmit={handleSignIn}>
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <Link
                to="/reset-password"
                className="text-sm text-emerald-600 hover:underline"
              >
                Reset Password
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPass ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log In"}
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-emerald-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
