import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowRight, Zap } from 'lucide-react';
import logoImg from '../../imports/image.png';

const bgImg = 'https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwZGFyayUyMGRyYW1hdGljJTIwaGVybyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1ODc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080';

export function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12 bg-[#0a0b0f] min-h-screen"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mb-14">
          <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-[#FF6B2C]/40">
            <img src={logoImg} alt="Sculpt and Strive" className="w-full h-full object-cover" />
          </div>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }} className="text-lg text-white leading-none">
              SCULPT <span className="text-[#FF6B2C]">&</span> STRIVE
            </div>
            <div className="text-[9px] text-white/30 tracking-[0.3em] uppercase">Fitness Platform</div>
          </div>
        </Link>

        <div className="max-w-sm w-full mx-auto lg:mx-0">
          <div className="mb-8">
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }} className="text-5xl text-white mb-2">WELCOME BACK</h1>
            <p className="text-white/50 text-sm">Sign in to continue your fitness journey.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-2 tracking-wider uppercase">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF6B2C]/60 focus:bg-[#FF6B2C]/5 transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-white/50 text-xs font-semibold tracking-wider uppercase">Password</label>
                <a href="#" className="text-[#FF6B2C] text-xs hover:text-[#FF8040] transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF6B2C]/60 focus:bg-[#FF6B2C]/5 transition-all pr-12"
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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] shadow-[0_4px_20px_rgba(255,107,44,0.4)] hover:shadow-[0_4px_30px_rgba(255,107,44,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight size={16} />
            </motion.button>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              { name: 'Google', icon: '🌐' },
              { name: 'Facebook', icon: '🔵' },
            ].map((provider) => (
              <button
                key={provider.name}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <span>{provider.icon}</span>
                {provider.name}
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-white/40 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#FF6B2C] font-semibold hover:text-[#FF8040] transition-colors">
              Sign up free
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:block flex-1 relative overflow-hidden"
      >
        <img src={bgImg} alt="Fitness" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0b0f]/30 to-[#0a0b0f]" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B2C]/20 border border-[#FF6B2C]/40 mb-5">
              <Zap size={14} className="text-[#FF6B2C]" />
              <span className="text-[#FF6B2C] text-sm font-semibold">Start Your Journey</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', lineHeight: '0.95' }} className="text-6xl text-white mb-4">
              EVERY REP<br />COUNTS
            </h2>
            <p className="text-white/60 text-base max-w-xs">
              Access your personalized fitness plans, track progress, and connect with your coach — all in one place.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
