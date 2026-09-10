import { Link } from "react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import logoImg from "../../assets/sculpt-and-strive-logo.jpg";
import app1 from "../../assets/google.svg";
import app2 from "../../assets/apple.svg";
import { motion } from "framer-motion";

export function Footer() {
  return (
    // <footer className="bg-[#070809] border-t border-white/5 pt-20 pb-8">
    <footer className="bg-[#171A26] border-t border-[#4B4F5D]/30 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner */}
        {/* <div className="relative rounded-3xl overflow-hidden mb-16 bg-gradient-to-r from-[#FF6B2C] via-[#FF4500] to-[#FF6B2C] p-px"> */}
        <div className="relative rounded-2xl overflow-hidden mb-14 border border-[#4B4F5D] bg-[#232631]">
          {/* <div className="bg-gradient-to-r from-[#1a0d05] via-[#220e06] to-[#1a0d05] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6"> */}
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-2">
                READY TO TRANSFORM?
              </h3>
              <p className="text-white/60 text-base">
                Start your personalized fitness journey today.
              </p>
            </div>
            <Link
              to="/get-plan"
              className="shrink-0 flex items-center gap-2 px-7 py-3 min-h-11 rounded-sculpt-button bg-[#FF6B5E] text-white font-bold text-sm md:text-base transition-all duration-200 hover:brightness-95"
            >
              Get Your Plan <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img
                  src={logoImg}
                  alt="Sculpt and Strive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg text-white leading-none tracking-[0.1em]">
                  {/* SCULPT <span className="text-[#FF6B2C]">&</span> STRIVE */}
                  SCULPT <span className="text-sculpt-coral">AND</span> STRIVE
                </div>
                <div className="text-[10px] mt-1 text-white/40 tracking-[0.3em] uppercase">
                  Fitness Platform
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Your personalized fitness journey starts here. From prenatal to
              senior fitness, we meet you exactly where you are.
            </p>
            <div className="space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sculptandstrive.com"
                // href="mailto:info@sculptandstrive.com"
                className="flex items-center gap-3 text-white/50 hover:text-[#FF6B5E] transition-colors text-sm"
              >
                <Mail size={14} className="text-[#FF6B5E] shrink-0" />
                {/* sculptandstrive@gmail.com */}
                info@sculptandstrive.com
              </a>
              <a
                href="tel:+917302113369"
                className="flex items-center gap-3 text-white/50 hover:text-[#FF6B5E] transition-colors text-sm"
              >
                <Phone size={14} className="text-[#FF6B5E] shrink-0" />
                +91 7302113369
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector+1+Meerut+Uttar+Pradesh+India+250002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/50 hover:text-[#FF6B5E] transition-colors text-sm"
              >
                <MapPin size={14} className="text-[#FF6B5E] shrink-0 mt-0.5" />
                <span>Sector 1 Meerut, Uttar Pradesh, India 250002</span>
              </a>
              {/* <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-[#FF6B5E] shrink-0 mt-0.5" />
                Sector 1 Meerut, Uttar Pradesh, India 250002
              </div> */}
            </div>
            <div className="flex gap-3 mt-6">
              {[
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/sculpt.and.strive/",
                  label: "Instagram",
                },
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/people/Sculpt-And-Strive/61576293194411/",
                  label: "Facebook",
                },
                {
                  icon: FaYoutube,
                  href: "https://www.youtube.com/",
                  label: "YouTube",
                },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/sculpt-and-strive-883ab639b/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#232631] border border-[#4B4F5D] text-white/60 hover:text-[#FF6B5E] hover:border-[#FF6B5E] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Programs
            </h4>

            <ul className="space-y-3">
              {[
                "Prenatal Fitness",
                "Senior Vitality",
                "Women's Fitness",
                "Youth Training",
                "Weight Loss",
                "Corrective Exercise",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/programs"
                    className="relative text-white/45 hover:text-[#FF6B5E] transition-colors text-sm group"
                  >
                    <ArrowRight
                      size={12}
                      className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    />

                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Postural Assessment",
                "Nutrition Coaching",
                "Group Training",
                "1-on-1 Sessions",
                "Online Programs",
                "Corporate Wellness",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/get-plan"
                    className="relative text-white/45 hover:text-[#FF6B5E] transition-colors text-sm group"
                  >
                    <ArrowRight
                      size={12}
                      className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="">
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                "Workout Library",
                "Beginner Fitness Guide",
                "Nutrition Basics",
                "Recovery & Mobility Tips",
                "Progress Tracking Tools",
                "Fitness Social Media Blog",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/nutrition"
                    className="relative whitespace-nowrap text-white/45 hover:text-[#FF6B5E] transition-colors text-sm group"
                  >
                    <ArrowRight
                      size={12}
                      className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
              Download App
            </h4>

            <div className="flex flex-col gap-3 -ml-6">
              {/* Google Play */}
              <motion.a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="block w-[210px] h-[55px] rounded-[8px] overflow-hidden border-0 outline-none ring-0 focus:outline-none focus:ring-0"
              >
                <img
                  src={app1}
                  alt="Get it on Google Play"
                  className="block w-full h-full object-cover border-0 outline-none"
                />
              </motion.a>

              {/* Apple App Store */}
              <motion.a
                href="https://www.apple.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="block w-[210px] h-[55px] rounded-[8px] overflow-hidden border-0 outline-none ring-0 focus:outline-none focus:ring-0"
              >
                <img
                  src={app2}
                  alt="Download on the App Store"
                  className="block w-full h-full object-cover border-0 outline-none"
                />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Sculpt and Strive. All rights reserved | Developed by{" "}
            <a
              href={"https://www.vigomerge.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#B8F27C] transition-colors"
            >
              Vigomerge Inc.
            </a>
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 hover:text-white/60 text-xs transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
