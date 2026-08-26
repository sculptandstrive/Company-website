import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MapPin, Smartphone, User, ShoppingCart } from "lucide-react";
import logo from "../../assets/sculpt-and-strive-logo.jpg";

interface NavLink {
  label: string;
  to: string;
}

// Table 3: nav uses single-word categories. Mapped to your real routes/pages.
const navLinks: NavLink[] = [
  { label: 'PROGRAMS', to: '/programs' },
  { label: 'ASSESSMENTS', to: '/assessments' },
  { label: 'NUTRITION', to: '/nutrition' },
  { label: 'ABOUT', to: '/about' },
  { label: 'TRAINERS', to: '/trainers' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0); // TODO: wire to real cart state
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-xl bg-sculpt-bg/95 border-sculpt-border/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-sculpt-container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo: 90–105px mobile, 110–125px desktop (Table 3)
          <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-[100px] h-12 md:w-[125px] md:h-12 rounded-sculpt-button overflow-hidden">
              <img src={logo} alt="Sculpt and Strive" 
                className="w-full h-full object-contain" />
              </div>
          </Link> */}
          {/* Logo: 90–105px mobile, 110–125px desktop (Table 3) */}

          <Link to="/" className="flex items-center gap-3 group shrink-0">
          
            {/* Logo */}
            <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-xl overflow-hidden border border-sculpt-border/60 transition-all duration-300">
              <img
                src={logo}
                alt="Sculpt and Strive"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand name */}
            <div className="whitespace-nowrap">
              <div className="text-[14px] md:text-[16px] font-bold leading-none tracking-wide text-white">
                SCULPT <span className="text-sculpt-coral">AND</span> STRIVE
              </div>

              <div className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-sculpt-text-muted mt-1">
                FITNESS PLATFORM
              </div>
            </div>
          </Link>
          {/* <Link to="/" className="flex items-center gap-3 group shrink-0"> 
          <img 
          src={logo} 
          alt="Sculpt and Strive" 
          className="h-full w-[90px] md:w-[125px] max-h-12 md:max-h-14 object-contain" />
           </Link> */}

          {/* Desktop Nav — 16–18px, 700 weight, single word (Table 3) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-[17px] font-bold tracking-wide transition-opacity duration-200 hover:opacity-70 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sculpt-lime ${
                    active ? "text-sculpt-lime" : "text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-sculpt-lime"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right cluster: Location, GET APP, Account, Cart */}
          <div className="hidden lg:flex items-center gap-5">
            {/* <button
              type="button"
              className="flex items-center gap-1.5 text-sm text-sculpt-text-muted transition-opacity duration-200 hover:opacity-80 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-sculpt-lime"
            >
              <MapPin size={16} />
              <span className="max-w-[110px] truncate">Set location</span>
            </button> */}

            {/* GET APP — high-priority CTA, white surface + coral label */}
            <button
              type="button"
              className="flex items-center gap-2 px-5 h-11 rounded-sculpt-button bg-white text-sculpt-coral text-sm font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
            >
              <Smartphone size={16} />
              GET APP
            </button>

            <button
              type="button"
              aria-label="Account"
              className="w-10 h-10 flex items-center justify-center rounded-sculpt-button text-white transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sculpt-lime"
            >
              <User size={22} />
            </button>

            {/* <button
              type="button"
              aria-label={`Cart, ${cartCount} items`}
              className="relative w-10 h-10 flex items-center justify-center rounded-sculpt-button text-white transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sculpt-lime"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold rounded-full flex items-center justify-center bg-sculpt-coral text-white">
                  {cartCount}
                </span>
              )}
            </button> */}
          </div>

          {/* Mobile: compact icon + hamburger (Table 7 — Mobile row) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              aria-label="Account"
              className="w-10 h-10 flex items-center justify-center rounded-sculpt-button text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sculpt-lime"
            >
              <User size={20} />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="w-10 h-10 flex items-center justify-center rounded-sculpt-button border border-sculpt-border text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sculpt-lime"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden backdrop-blur-xl bg-sculpt-bg/98 border-t border-sculpt-border/30"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors duration-200 ${
                      active
                        ? "text-sculpt-lime bg-sculpt-surface"
                        : "text-white bg-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-white text-sculpt-coral"
                >
                  <Smartphone size={16} />
                  GET APP
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-sculpt-border text-white"
                >
                  <ShoppingCart size={16} />
                  Cart {cartCount > 0 && `(${cartCount})`}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router';
// import { motion, AnimatePresence } from 'motion/react';
// import { Menu, X, Zap } from 'lucide-react';
// import logoImg from '../../imports/image.png';

// const navLinks = [
//   { label: 'Programs', to: '/programs' },
//   { label: 'Assessments', to: '/assessments' },
//   { label: 'Nutrition', to: '/nutrition' },
//   { label: 'About', to: '/about' },
//   { label: 'Trainers', to: '/trainers' },
// ]

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-[#0a0b0f]/95 backdrop-blur-xl shadow-[0_2px_40px_rgba(255,107,44,0.08)] border-b border-white/5'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FF6B2C]/40 group-hover:border-[#FF6B2C] transition-all duration-300 shadow-[0_0_20px_rgba(255,107,44,0.3)]">
//               <img src={logoImg} alt="Sculpt and Strive" className="w-full h-full object-cover" />
//             </div>
//             <div>
//               <div style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }} className="text-xl text-white leading-none">
//                 SCULPT <span className="text-[#FF6B2C]">&</span> STRIVE
//               </div>
//               <div className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Fitness Platform</div>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
//                   location.pathname === link.to
//                     ? 'text-[#FF6B2C]'
//                     : 'text-white/70 hover:text-white'
//                 }`}
//               >
//                 {link.label}
//                 {location.pathname === link.to && (
//                   <motion.div
//                     layoutId="navIndicator"
//                     className="absolute inset-0 bg-[#FF6B2C]/10 rounded-lg border border-[#FF6B2C]/20"
//                   />
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Link
//               to="/get-plan"
//               className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-[#FF6B2C]/50 hover:bg-[#FF6B2C]/10 transition-all duration-300"
//             >
//               Get Plan
//             </Link>
//             <Link
//               to="/signin"
//               className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-all duration-300"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/signup"
//               className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] hover:from-[#FF7B3C] hover:to-[#FF5500] transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,44,0.4)] hover:shadow-[0_4px_30px_rgba(255,107,44,0.6)] flex items-center gap-2"
//             >
//               <Zap size={14} />
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white hover:border-[#FF6B2C]/50 hover:text-[#FF6B2C] transition-all duration-300"
//           >
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-[#0f1015]/98 backdrop-blur-xl border-t border-white/5"
//           >
//             <div className="px-4 py-6 space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
//                     location.pathname === link.to
//                       ? 'text-[#FF6B2C] bg-[#FF6B2C]/10 border border-[#FF6B2C]/20'
//                       : 'text-white/70 hover:text-white hover:bg-white/5'
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <div className="pt-4 flex flex-col gap-3">
//                 <Link
//                   to="/get-plan"
//                   className="block px-4 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 text-center hover:border-[#FF6B2C]/50 transition-all"
//                 >
//                   Get Plan
//                 </Link>
//                 <Link
//                   to="/signin"
//                   className="block px-4 py-3 rounded-xl text-sm font-semibold text-white/70 border border-white/10 text-center hover:text-white hover:bg-white/5 transition-all"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="block px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] text-center shadow-[0_4px_20px_rgba(255,107,44,0.4)]"
//                 >
//                   Sign Up Free
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
