import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MapPin, Smartphone, User, ShoppingCart } from "lucide-react";
import logo from "../../assets/sculpt-and-strive-logo.jpg";
import ProgramsMegaMenu from "./mega-menu/ProgramsMegaMenu";
import NutritionMegaMenu from "./mega-menu/NutritionMegaMenu";
import { ChevronDown } from "lucide-react";
import AssessmentMegaMenu from "./mega-menu/AssessmentsMegaMenu";

interface NavLink {
  label: string;
  to: string;
}
const navLinks: NavLink[] = [
  { label: "PROGRAMS", to: "/programs" },
  { label: "NUTRITION", to: "/nutrition" },
  { label: "ASSESSMENTS", to: "/assessments" },
  { label: "ABOUT", to: "/about" },
  { label: "TRAINERS", to: "/trainers" },
];

export function Navbar() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0); // TODO: wire to real cart state
  const location = useLocation();
  // for mobile dropdown
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileNutritionOpen, setMobileNutritionOpen] = useState(false);
  const [mobileAssessmentsOpen, setMobileAssessmentsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
    setNutritionOpen(false);
    setAssessmentOpen(false);
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

          {/* Desktop Nav — 16–18px, 700 weight, single word (Table 3) */}

          {/* for program mega-menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;

              if (link.label === "PROGRAMS") {
                return (
                  <div
                    key={link.to}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <Link
                      to={link.to}
                      className={`relative flex items-center gap-1 text-[17px] font-bold tracking-wide transition-opacity duration-200 hover:opacity-70 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sculpt-lime ${
                        active ? "text-sculpt-lime" : "text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          programsOpen ? "rotate-180" : ""
                        }`}
                      />

                      {active && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-sculpt-lime"
                        />
                      )}
                    </Link>

                    {programsOpen && <ProgramsMegaMenu />}
                  </div>
                );
              }

              // Nutrition mega-menu
              if (link.label === "NUTRITION") {
                return (
                  <div
                    key={link.to}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setNutritionOpen(true)}
                    onMouseLeave={() => setNutritionOpen(false)}
                  >
                    <Link
                      to={link.to}
                      className={`relative flex items-center gap-1 text-[17px] font-bold tracking-wide transition-opacity duration-200 hover:opacity-70 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sculpt-lime ${
                        active ? "text-sculpt-lime" : "text-white"
                      }`}
                    >
                      {link.label}

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          nutritionOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />

                      {active && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-sculpt-lime"
                        />
                      )}
                    </Link>

                    {nutritionOpen && <NutritionMegaMenu />}
                  </div>
                );
              }

              // assesment mega-menu
              if (link.label === "ASSESSMENTS") {
                return (
                  <div
                    key={link.to}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setAssessmentOpen(true)}
                    onMouseLeave={() => setAssessmentOpen(false)}
                  >
                    <Link
                      to={link.to}
                      className={`relative flex items-center gap-1 text-[17px] font-bold tracking-wide transition-opacity duration-200 hover:opacity-70 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sculpt-lime ${
                        active ? "text-sculpt-lime" : "text-white"
                      }`}
                    >
                      {link.label}

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          assessmentOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />

                      {active && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-sculpt-lime"
                        />
                      )}
                    </Link>

                    {assessmentOpen && <AssessmentMegaMenu />}
                  </div>
                );
              }

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
            {/* GET APP — high-priority CTA, white surface + coral label */}
            <button
              type="button"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-bold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
              // className="flex items-center gap-2 px-5 h-11 rounded-sculpt-button bg-white text-sculpt-coral text-sm font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
            >
              <Smartphone size={16} />
              GET APP
            </button>

            <Link
              to="/signin"
              onClick={() => setMobileOpen(false)}
              aria-label="Account"
              className="w-10 h-10 flex items-center justify-center rounded-sculpt-button text-white transition-colors duration-200 hover:bg-[#B8F27C]/30 hover:text-[#B8F27C]"
            >
              <User size={20} />
            </Link>
          </div>

          {/* Mobile: compact icon + hamburger (Table 7 — Mobile row) */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/signin"
              onClick={() => setMobileOpen(false)}
              aria-label="Account"
              className="w-10 h-10 flex items-center justify-center rounded-sculpt-button text-white transition-colors duration-200 hover:bg-[#B8F27C]/30 hover:text-[#B8F27C]"
            >
              <User size={20} />
            </Link>
            
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
              {/* Programs */}

              <div className="flex items-center justify-between">
                {/* Programs → normal Programs page */}
                <Link
                  to="/programs"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 rounded-xl text-base font-bold text-white hover:text-[#B8F27C]"
                >
                  Programs
                </Link>

                {/* + → show View All Programs */}
                <button
                  type="button"
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  aria-label="Show Programs options"
                  className="w-12 h-12 flex items-center justify-center rounded-xl text-white border border-transparent hover:bg-[#B8F27C]/20 hover:border-[#B8F27C]"
                >
                  {mobileProgramsOpen ? "-" : "+"}
                </button>
              </div>

              {/* View All Programs */}
              {mobileProgramsOpen && (
                <div className="pl-4 pb-2">
                  <Link
                    to="/programs/all-program"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-white border border-transparent transition-colors duration-200 hover:bg-[#B8F27C]/20 hover:border-[#B8F27C]"
                  >
                    View All Programs
                  </Link>
                </div>
              )}

              {/* Nutrition */}
              <div className="flex items-center justify-between">
                {/* Programs → normal Programs page */}
                <Link
                  to="/nutrition"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 rounded-xl text-base font-bold text-white hover:text-[#B8F27C]"
                >
                  Nutrition
                </Link>

                {/* + → show View All Programs */}
                <button
                  type="button"
                  onClick={() => setMobileNutritionOpen(!mobileNutritionOpen)}
                  aria-label="Show Programs options"
                  className="w-12 h-12 flex items-center justify-center rounded-xl text-white border border-transparent hover:bg-[#B8F27C]/20 hover:border-[#B8F27C]"
                >
                  {mobileNutritionOpen ? "-" : "+"}
                </button>
              </div>

              {/* explore nutrition */}
              {mobileNutritionOpen && (
                <div className="pl-4 pb-2">
                  <Link
                    to="/nutrition/explore"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-white border border-transparent transition-colors duration-200 hover:bg-[#B8F27C]/20 hover:border-[#B8F27C]"
                  >
                    Explore Nutrition
                  </Link>
                </div>
              )}

              {/* Assessments */}

              <div className="flex items-center justify-between">
                {/* Programs → normal Programs page */}
                <Link
                  to="/assessments"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 rounded-xl text-base font-bold text-white hover:text-[#B8F27C]"
                >
                  Assessments
                </Link>

                {/* + → show View All Programs */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileAssessmentsOpen(!mobileAssessmentsOpen)
                  }
                  aria-label="Show Programs options"
                  className="w-12 h-12 flex items-center justify-center rounded-xl text-white border border-transparent hover:bg-[#B8F27C]/20 hover:border-[#B8F27C]"
                >
                  {mobileAssessmentsOpen ? "-" : "+"}
                </button>
              </div>

              {/* explore assessment */}
              {mobileAssessmentsOpen && (
                <div className="pl-4 pb-2">
                  <Link
                    to="/assessments/details"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-white border border-transparent transition-colors duration-200 hover:bg-[#B8F27C]/20 hover:border-[#B8F27C]"
                  >
                    Start Your Assessment
                  </Link>
                </div>
              )}

              {/* About */}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:text-[#B8F27C]"
              >
                About
              </Link>

              {/* Trainers */}
              <Link
                to="/trainers"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-bold text-white hover:text-[#B8F27C]"
              >
                Trainers
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-white text-sculpt-coral"
                >
                  <Smartphone size={16} />
                  GET APP
                </button>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
