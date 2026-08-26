import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import logoImg from '../../imports/image.png';

const bgImg = 'https://images.unsplash.com/photo-1758875569071-717cfaa97c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjBzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTg3NjU1M3ww&ixlib=rb-4.1.0&q=80&w=1080';

const perks = [
  'Personalized workout programs',
  'Nutrition tracking dashboard',
  'Direct access to certified coaches',
  'Progress analytics & insights',
];

const goals = ['Weight Loss', 'Muscle Gain', 'Flexibility', 'Senior Fitness', "Women's Fitness", 'Pre/Postnatal', 'Youth Training', 'General Wellness'];

export function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  return (
    <div className="min-h-screen flex">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block flex-1 relative overflow-hidden"
      >
        <img src={bgImg} alt="Fitness" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0b0f]/20 to-[#0a0b0f]" />

        <div className="absolute inset-0 flex flex-col justify-center p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B2C]/20 border border-[#FF6B2C]/40 mb-8">
              <span className="text-[#FF6B2C] text-sm font-semibold">Join Sculpt & Strive</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', lineHeight: '0.95' }} className="text-6xl text-white mb-6">
              YOUR BEST SELF<br /><span className="text-[#FF6B2C]">STARTS HERE</span>
            </h2>
            <div className="space-y-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-[#FF6B2C] shrink-0" />
                  <span className="text-white/70 text-sm">{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right - Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col justify-center px-8 lg:px-14 py-12 bg-[#0a0b0f] overflow-y-auto"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#FF6B2C]/40">
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
          <div className="mb-7">
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }} className="text-4xl text-white mb-2">CREATE ACCOUNT</h1>
            <p className="text-white/50 text-sm">Start your free fitness journey today.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-white/50 text-xs font-semibold mb-1.5 tracking-wider uppercase">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                  placeholder={field.placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF6B2C]/60 focus:bg-[#FF6B2C]/5 transition-all"
                />
              </div>
            ))}

            {/* Password */}
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-1.5 tracking-wider uppercase">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="Min. 8 characters"
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

            {/* Goal Selection */}
            <div>
              <label className="block text-white/50 text-xs font-semibold mb-2 tracking-wider uppercase">Primary Goal</label>
              <div className="flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setSelectedGoal(goal === selectedGoal ? '' : goal)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                      selectedGoal === goal
                        ? 'bg-[#FF6B2C] text-white border border-[#FF6B2C]'
                        : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] shadow-[0_4px_20px_rgba(255,107,44,0.4)] hover:shadow-[0_4px_30px_rgba(255,107,44,0.6)] transition-all duration-300 flex items-center justify-center gap-2 mt-2"
            >
              Create Free Account <ArrowRight size={16} />
            </motion.button>

            <p className="text-center text-white/30 text-xs">
              By signing up, you agree to our{' '}
              <a href="#" className="text-[#FF6B2C] hover:underline">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-[#FF6B2C] hover:underline">Privacy Policy</a>
            </p>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
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

          <p className="mt-6 text-center text-white/40 text-sm">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#FF6B2C] font-semibold hover:text-[#FF8040] transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
