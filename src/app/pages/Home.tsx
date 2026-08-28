import { useRef } from "react";
import React from "react";
import { Link } from "react-router";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import heroVideo from "../../assets/hero-video.mp4";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Clock,
  ChevronDown,
  CheckCircle,
  Zap,
  Heart,
  Target,
} from "lucide-react";

// const heroImg =
//   "https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwZGFyayUyMGRyYW1hdGljJTIwaGVybyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1ODc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const womenImg =
  "https://images.unsplash.com/photo-1758875569071-717cfaa97c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjBzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTg3NjU1M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const trainerImg =
  "https://images.unsplash.com/photo-1758875570137-8691b7c55033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGd5bSUyMG1vdGl2YXRpb258ZW58MXx8fHwxNzc1ODc2NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const groupImg =
  "https://images.unsplash.com/photo-1731325632701-90d4e869a98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdGVhbSUyMGdyb3VwJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc3NTg3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080";
const nutritionImg =
  "https://images.unsplash.com/photo-1587996616596-b714c1c54146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBwcmVwJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU4NzY1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const wellnessImg =
  "https://images.unsplash.com/photo-1770026136858-6f12670dd131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwd2VsbG5lc3MlMjBtb3RpdmF0aW9uJTIwaW5zcGlyaW5nfGVufDF8fHx8MTc3NTg3NjU3MHww&ixlib=rb-4.1.0&q=80&w=1080";

const programs = [
  {
    name: "Pre & Postnatal",
    icon: Heart,
    color: "#FF6B8A",
    desc: "Safe, effective programs for every stage of motherhood",
    img: "https://images.unsplash.com/photo-1758599878949-4c612c619219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVuYXRhbCUyMHByZWduYW5jeSUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc3NTg3NjU1Mnww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Senior Vitality 55+",
    icon: Star,
    color: "#FFD700",
    desc: "Age-deafying fitness for strength, balance & mobility",
    img: "https://images.unsplash.com/photo-1619870448322-3eef96ce6cd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwZml0bmVzcyUyMGV4ZXJjaXNlJTIwc3RyZW5ndGh8ZW58MXx8fHwxNzc1ODc2NTUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Women's Fitness",
    icon: Zap,
    color: "#A855F7",
    desc: "Honoring female physiology through every life phase",
    img: womenImg,
  },
  {
    name: "Youth Fitness (6-16)",
    icon: Target,
    color: "#22D3EE",
    desc: "Building healthy habits for the next generation",
    img: "https://images.unsplash.com/photo-1761039807514-292d7d33059f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGtpZHMlMjBmaXRuZXNzJTIwdHJhaW5pbmclMjBzcG9ydHxlbnwxfHx8fDE3NzU4NzY1NTN8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Weight Transformation",
    icon: Award,
    color: "#FF6B2C",
    desc: "Sustainable body composition through smart training",
    img: "https://images.unsplash.com/photo-1584952811178-17383f34d7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjB3ZWlnaHQlMjBsb3NzJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzc1ODc2NTYzfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Corrective Exercise",
    icon: CheckCircle,
    color: "#10B981",
    desc: "Restore optimal movement & fix imbalances",
    img: "https://images.unsplash.com/photo-1645005512942-a17817fb7c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JyZWN0aXZlJTIwZXhlcmNpc2UlMjBwaHlzaWNhbCUyMHRoZXJhcHklMjBtb3ZlbWVudHxlbnwxfHx8fDE3NzU4NzY1NzB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

const stats = [
  { value: "20+", label: "Active Members", icon: Users },
  { value: "2+", label: "Expert Trainers", icon: Award },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "India and USA Certified", icon: Star },
];

const features = [
  {
    icon: Zap,
    title: "Personalized Plans",
    desc: "Every program tailored to your unique physiology, goals, and fitness level.",
  },
  {
    icon: Target,
    title: "Evidence-Based Training",
    desc: "Science-backed methods combining training, nutrition, and mindful recovery.",
  },
  {
    icon: CheckCircle,
    title: "Certified Coaches",
    desc: "USA certified trainers with multiple specializations guiding your journey.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    desc: "Beyond physical fitness — we focus on strength, confidence, and overall well-being.",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const membershipPlans = [
  {
    label: "MEMBERSHIP",
    name: "ELITE",
    description:
      "Unlimited access to group classes, all gyms and at-home workouts",
    // accent: "text-sculpt-lime",
    gradient: "from-[#B8F27C] to-[#E5C74D]",
  },
  {
    label: "MEMBERSHIP",
    name: "PRO",
    description: "Premium fitness access with flexible training options",
    // accent: "text-white",
    gradient: "from-[#42C7C5] to-[#B8F27C]",
  },
  {
    label: "MEMBERSHIP",
    name: "SELECT",
    description: "Flexible fitness access designed around your goals",
    // accent: "text-white",
    gradient: "from-[#8D2A8B] to-[#FF6B5E]",
  },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ── HERO ── */}
      <div
        ref={heroRef}
        className="relative min-h-[600px] md:min-h-[680px] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* <img
            src={heroImg}
            alt="Sculpt and Strive fitness"
            className="w-full h-full object-cover object-center"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#171A26]/60 via-[#171A26]/40 to-[#171A26]" />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/80 via-transparent to-[#171A26]/40" /> */}
        </motion.div>

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B2C]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#FF4500]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-10 pt-20"
        >
          <div className="max-w-[700px] text-left ml-8 md:ml-30">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sculpt-lime/10 border border-sculpt-lime/30 mb-8"
            >
              <Zap size={14} className="text-sculpt-lime" />

              <span className="text-sculpt-lime text-sm font-medium">
                India and USA Certified Fitness Coaches
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              // style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em', lineHeight: '0.95' }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight text-white mb-6"
            >
              SCULPT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8F27C] to-[#42C7C5]">
                AND STRIVE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            >
              Your personalized fitness journey starts here. From prenatal to
              senior fitness, elite 1:1 coaching to group programs — we meet you
              exactly where you are.
            </motion.p>

            {/* two CTA button on hero page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-left gap-3"
            >
              {/* Primary CTA */}
              <Link
                to="/get-plan"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-sculpt-button bg-white text-sculpt-coral text-sm md:text-base font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
              >
                Start Your Journey
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/programs"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-sculpt-button border border-sculpt-border text-white text-sm md:text-base font-bold transition-all duration-200 hover:bg-white/5 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
              >
                <Play size={16} className="text-sculpt-coral" />
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-11 h-11 flex items-center justify-center"
          >
            <ChevronDown size={20} className="text-white/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── MEMBERSHIP SELECTOR ── */}
      <section className="bg-[#171A26] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          {/* Section heading */}
          <div className="mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-bold tracking-widest text-sculpt-lime uppercase mb-2">
              MEMBERSHIP
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Choose your fitness plan
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipPlans.map((plan) => (
              <Link
                key={plan.name}
                to="/get-plan"
                className="group block min-h-[180px] rounded-2xl border border-[#4B4F5D] bg-[#232631] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-sculpt-lime hover:shadow-lg"
              >
                {/* Small label */}
                <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-3">
                  {plan.label}
                </p>

                {/* Plan name */}
                {/* <h3
                  className={`text-[32px] font-extrabold leading-none mb-4 bg-gradient-to-r${plan.gradient}`}
                > */}
                <h3
                  className={`mt-2 text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-[1.4] text-[#A7A8AF] max-w-sm">
                  {plan.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}

      {/* Stats Section */}
      <section className="bg-[#4B4F5D] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-[#FF6B5E]/40 bg-[#4B4F5D] p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Left Gradient Content */}
            <div className="relative flex h-[280px] w-full flex-col justify-end overflow-hidden rounded-[18px] bg-gradient-to-br from-[#FF6B5E] via-[#FF6B5E] to-[#4B4F5D] p-7 md:h-[320px] md:w-[42%]">
              {/* Decorative Glow */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  About Fitness
                </p>

                <h3 className="max-w-sm text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Stronger body.
                  <br />
                  Stronger mindset.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                  Train with purpose, stay consistent, and become your strongest
                  self.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 px-6 py-10 sm:px-8 md:w-[58%] md:gap-x-12 md:gap-y-12 md:px-12 md:py-0">
              {/* Stat 1 */}
              <div>
                <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  20+
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Active Members
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  2+
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Expert Trainers
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  10+
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Years Experience
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  100%
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}

      <section className="py-24 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Our Programs
            </span>

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              ONE PLATFORM.{" "}
              <span className="text-[#B8F27C]">
                EVERY JOURNEY.
              </span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Whether you're preparing for motherhood, seeking senior vitality,
              or training the next generation — we have a specialized path
              designed just for you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <FadeIn key={prog.name} delay={i * 0.08}>
                <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-80">
                  <img
                    src={prog.img}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <prog.icon size={16} style={{ color: prog.color }} />
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: prog.color }}
                      >
                        Program
                      </span>
                    </div>
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-xl font-bold text-white mb-2"
                    >
                      {prog.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-snug mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {prog.desc}
                    </p>
                    <Link
                      to="/programs"
                      className="self-start flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              to="/programs"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-[8px] bg-white text-[#FF6B5E] text-sm md:text-base font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8F27C]"
            >
              View All Programs
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-24 bg-[#4B4F5D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ── IMAGE SIDE ── */}
            <FadeIn>
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden h-[600px]">
                  <img
                    src={trainerImg}
                    alt="Training"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Experience Card - Coral */}
                <div className="absolute -bottom-6 -right-6 bg-[#FFFFFF] rounded-3xl p-6 shadow-2xl">
                  <div className="text-4xl font-extrabold text-[#FF6B5E] tracking-tight">
                    10+
                  </div>

                  <div className="text-[#FF6B5E] text-sm">Years Combined</div>

                  <div className="text-[#FF6B5E] text-sm">Experience</div>
                </div>

                {/* Certification Card */}
                <div className="absolute -top-6 -left-6 bg-[#232631] border border-[#4B4F5D] rounded-3xl p-5 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[#E5C74D] fill-[#E5C74D]"
                      />
                    ))}
                  </div>

                  <div className="text-white text-sm font-semibold">
                    USA Certified
                  </div>

                  <div className="text-[#A7A8AF] text-xs mt-1">
                    CPT • CNC • WFS • CES
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── CONTENT SIDE ── */}
            <FadeIn delay={0.2}>
              <div>
                {/* Section Label */}
                <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                  About Us
                </span>

                {/* Heading */}
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                  FITNESS THAT{" "}
                  <span className="text-[#B8F27C]">
                    MOVES WITH YOU
                  </span>
                </h2>

                {/* Description */}
                <p className="text-[#A7A8AF] text-base leading-relaxed mb-6">
                  At Sculpt & Strive, fitness fits your life. Whether you're
                  working out at home, at the gym, or while traveling — our
                  flexible programs make it easy to stay consistent anywhere.
                </p>

                <p className="text-[#A7A8AF] text-base leading-relaxed mb-8">
                  We design programs that go beyond the physical — focusing on
                  your strength, mobility, confidence, and overall well-being.
                  Led by USA certified coaches Namita Lamba and Sagar Lamba.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Personalized Programs",
                    "Expert Certified Coaches",
                    "Nutrition Tracking",
                    "Posture Correction",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/75"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[#B8F27C] shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA Button - Coral */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] rounded-2xl text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300 hover:scale-105"
                >
                  Our Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Why Sculpt & Strive
            </span>
            <h2
              // className="text-6xl md:text-7xl text-white">
                className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            
              THE DIFFERENCE IS{" "}
              <span className="text-[#B8F27C]">IN THE DETAIL</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/8 hover:border-[#B8F27C]/30 hover:bg-[#B8F27C]/5 transition-all duration-500 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#B8F27C]/15 flex items-center justify-center mb-6 group-hover:bg-[#B8F27C]/25 transition-all duration-300">
                    <feat.icon size={24} className="text-[#B8F27C]" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-lg font-bold text-white mb-3"
                  >
                    {feat.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT IMAGE SECTIONS ── */}
      <section className="py-16 bg-[#4B4F5D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: groupImg,
                title: "Group Training",
                desc: "Energy-filled sessions with expert coaching",
                link: "/get-plan",
              },
              {
                img: nutritionImg,
                title: "Smart Nutrition",
                desc: "Global food database & diet tracking",
                link: "/nutrition",
              },
              {
                img: wellnessImg,
                title: "Holistic Wellness",
                desc: "Mind, body & spirit transformation",
                link: "/about",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Link
                  to={item.link}
                  className="group block relative rounded-3xl overflow-hidden h-72"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-xl font-bold text-white"
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Testimonials
            </span>
            <h2
              // className="text-6xl text-white"
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]"
            >
              REAL RESULTS, <span className="text-[#B8F27C]">REAL STORIES</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                role: "Pre & Postnatal Member",
                quote:
                  "The prenatal program was a lifesaver during my pregnancy. The trimester-specific workouts helped me stay strong and confident throughout.",
                rating: 5,
              },
              {
                name: "Rajesh Kumar",
                role: "Senior Vitality Member",
                quote:
                  "At 62, I never thought I could feel this active. The balance training and joint-friendly exercises have transformed my daily life completely.",
                rating: 5,
              },
              {
                name: "Aisha Verma",
                role: "Women's Fitness Member",
                quote:
                  "The hormonal cycle training completely changed how I approach my fitness. I finally understand my body and train in sync with it.",
                rating: 5,
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/8 hover:border-[#B8F27C]/20 transition-all duration-500">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-[#FFD700] fill-[#FFD700]"
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-[#B8F27C] text-xs">{t.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={womenImg}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4B4F5D]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              
              // className="text-7xl md:text-8xl text-white mb-6"
              className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
          
              YOUR JOURNEY <span className="text-[#B8F27C]">STARTS NOW</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Join Sculpt and Strive and experience the transformation that
              comes from expert coaching, personalized plans, and an unbreakable
              support system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link
                to="/signup"
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] rounded-2xl text-[#FF6B5E] font-bold text-lg shadow-[0_8px_40px_rgba(255,107,44,0.5)] hover:shadow-[0_8px_60px_rgba(255,107,44,0.7)] transition-all duration-300 hover:scale-105"
              >
                Get Started Free{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link> */}
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-sculpt-button bg-white text-sculpt-coral text-sm md:text-base font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
              >
                Get Started Free{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/get-plan"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/25 text-white font-semibold text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                View Plans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
