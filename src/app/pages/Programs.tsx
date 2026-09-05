import { useState } from "react";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Accessibility,
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle,
  ChevronRight,
  Dumbbell,
  HeartPulse,
  Move,
  PersonStanding,
  Scale,
  Users,
  Venus,
  Waypoints,
} from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

// const heroImg =
//   "https://images.unsplash.com/photo-1731325632701-90d4e869a98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdGVhbSUyMGdyb3VwJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc3NTg3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080";

const programs = [
  {
    name: "Pre & Postnatal Fitness",
    color: "#FF6B8A",
    bg: "from-pink-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1758599878949-4c612c619219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVuYXRhbCUyMHByZWduYW5jeSUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc3NTg3NjU1Mnww&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Safe, effective programs designed for every stage of your motherhood journey.",
    icon: HeartPulse,
    features: [
      "Trimester-specific workouts",
      "Pelvic floor recovery",
      "Diastasis recti healing",
    ],
  },
  {
    name: "Senior Vitality 55+",
    color: "#FFD700",
    bg: "from-yellow-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1619870448322-3eef96ce6cd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwZml0bmVzcyUyMGV4ZXJjaXNlJTIwc3RyZW5ndGh8ZW58MXx8fHwxNzc1ODc2NTUzfDA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Age-defying fitness that enhances mobility, strength, and quality of life.",
    icon: PersonStanding,
    features: [
      "Balance & fall prevention",
      "Joint-friendly movements",
      "Functional strength",
    ],
  },
  {
    name: "Corrective Exercise",
    color: "#10B981",
    bg: "from-green-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1645005512942-a17817fb7c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JyZWN0aXZlJTIwZXhlcmNpc2UlMjBwaHlzaWNhbCUyMHRoZXJhcHklMjBtb3ZlbWVudHxlbnwxfHx8fDE3NzU4NzY1NzB8MA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Identify imbalances and restore optimal movement patterns through specialized assessment.",
    icon: Move,
    features: [
      "Postural assessment",
      "Movement screening",
      "Personalized corrections",
    ],
  },
  {
    name: "Women's Fitness",
    color: "#A855F7",
    bg: "from-purple-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1758875569071-717cfaa97c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjBzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTg3NjU1M3ww&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Programs honoring the unique physiology of women through every life phase.",
    icon: Venus,
    features: [
      "Hormonal cycle training",
      "Bone density focus",
      "Metabolic optimization",
    ],
  },
  {
    name: "Youth Fitness (6-16)",
    color: "#22D3EE",
    bg: "from-cyan-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1761039807514-292d7d33059f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGtpZHMlMjBmaXRuZXNzJTIwdHJhaW5pbmclMjBzcG9ydHxlbnwxfHx8fDE3NzU4NzY1NTN8MA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Building healthy habits and athletic foundations for the next generation.",
    icon: Users,
    features: [
      "Age-appropriate training",
      "Sport performance",
      "Motor skill development",
    ],
  },
  {
    name: "Weight Transformation",
    color: "#FF6B2C",
    bg: "from-orange-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1584952811178-17383f34d7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjB3ZWlnaHQlMjBsb3NzJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzc1ODc2NTYzfDA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Sustainable body composition changes through smart training and nutrition synergy.",
    icon: Scale,
    features: [
      "Metabolic conditioning",
      "Nutrition tracking",
      "Progress analytics",
    ],
  },
  {
    name: "Flexibility & Mobility",
    color: "#F59E0B",
    bg: "from-amber-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1597768233422-18832f306895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2RhJTIwZmxleGliaWxpdHklMjBzdHJldGNoaW5nJTIwd29tYW58ZW58MXx8fHwxNzc1ODc2NTY0fDA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Unlock your body's potential with dynamic stretching and mobility protocols.",
    icon: Waypoints,
    features: ["Dynamic stretching", "Fascial release", "Range of motion"],
  },
  {
    name: "Core & Strength",
    color: "#EF4444",
    bg: "from-red-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1591469945290-a3f13a7041c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JlJTIwc3RyZW5ndGglMjB0cmFpbmluZyUyMGFiJTIwd29ya291dHxlbnwxfHx8fDE3NzU4NzY1NzB8MA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Build a powerful foundation with targeted core training and progressive strength.",
    icon: Dumbbell,
    features: [
      "Functional core work",
      "Progressive overload",
      "Mind-muscle connection",
    ],
  },
  {
    name: "Travel & Bodyweight",
    color: "#6366F1",
    bg: "from-indigo-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1764885531407-5419366dfd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5d2VpZ2h0JTIwY2FsaXN0aGVuaWNzJTIwd29ya291dCUyMHBhcmt8ZW58MXx8fHwxNzc1ODc2NTU5fDA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Stay fit anywhere with equipment-free workouts designed for your lifestyle.",
    icon: Briefcase,
    features: ["No equipment needed", "Quick sessions", "Hotel room ready"],
  },
];

const progressionPaths = {
  "Youth (6-16)": [
    {
      stage: "1",
      title: "Explorer",
      sub: "Ages 6-9",
      desc: "Fun movement, basic coordination, games",
    },
    {
      stage: "2",
      title: "Adventurer",
      sub: "Ages 10-12",
      desc: "Skill development, team sports, agility",
    },
    {
      stage: "3",
      title: "Challenger",
      sub: "Ages 13-16",
      desc: "Strength foundations, sport-specific training",
    },
    {
      stage: "4",
      title: "Achiever",
      sub: "Ages 15-16",
      desc: "Performance training, confidence, independence",
    },
  ],
  "Women's Fitness": [
    {
      stage: "1",
      title: "Bloom",
      sub: "",
      desc: "Core strength, flexibility, body confidence",
    },
    {
      stage: "2",
      title: "Thrive",
      sub: "",
      desc: "Strength training, HIIT, nutrition balance",
    },
    {
      stage: "3",
      title: "Empower",
      sub: "",
      desc: "Advanced training, performance, leadership",
    },
    {
      stage: "4",
      title: "Radiate",
      sub: "",
      desc: "Long-term strength, wellness, confidence, and vitality",
    },
  ],
  "Senior Fitness (55+)": [
    {
      stage: "1",
      title: "Active Start",
      sub: "",
      desc: "Mobility, balance, gentle strength",
    },
    {
      stage: "2",
      title: "Vital Living",
      sub: "",
      desc: "Functional fitness, endurance, flexibility",
    },
    {
      stage: "3",
      title: "Golden Strong",
      sub: "",
      desc: "Advanced strength, sports, active lifestyle",
    },
    {
      stage: "4",
      title: "Forever Fit",
      sub: "",
      desc: "Independence, longevity, strength, and active living",
    },
  ],
  "Pre/Postnatal": [
    {
      stage: "1",
      title: "First Trimester",
      sub: "",
      desc: "Safe cardio, core stability, energy",
    },
    {
      stage: "2",
      title: "Second Trimester",
      sub: "",
      desc: "Strength maintenance, posture, breathing",
    },
    {
      stage: "3",
      title: "Third Trimester",
      sub: "",
      desc: "Gentle movement, relaxation, preparation",
    },
    {
      stage: "4",
      title: "Recovery",
      sub: "",
      desc: "Core rehab, gradual return, healing",
    },
  ],
};

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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Programs() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof progressionPaths>("Youth (6-16)");

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[650px] flex items-center overflow-hidden bg-[#171A26]">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* <img src={heroImg} alt="Programs" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/60 to-[#171A26]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171A26]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:-translate-x-30 lg:-translate-y-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block -translate-y-3 text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4 ml-2 ">
              Specialized Programs
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6">
              ONE PLATFORM.
              <br />
              <span className="text-[#B8F27C] inline-block mt-3">
                EVERY JOURNEY.
              </span>
            </h1>

            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Whether you're preparing for motherhood, seeking senior vitality,
              or training the next generation — we have a specialized path
              designed just for you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Grid */}

      <section className="py-24 bg-[#171A26]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#B8F27C]/40" />
              <span className="inline-flex items-center gap-2 text-[#B8F27C] text-sm font-bold tracking-[0.2em] uppercase">
                <Dumbbell size={16} /> Our Programs
              </span>
              <span className="w-8 h-px bg-[#B8F27C]/40" />
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Find Your
              <span className="text-[#B8F27C] ml-2">Perfect Program</span>
            </h2>
            <p className="text-[#A7A8AF] text-base max-w-2xl mx-auto">
              Scientifically designed programs to help you move better, feel
              stronger, and live your healthiest life.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-3">
            {programs.map((prog, i) => {
              // control which cards are "wide" — adjust indices to match your data order
              const isWide = i === 7 || i === 8; // Core & Strength, Travel & Bodyweight

              return (
                <FadeIn
                  key={prog.name}
                  delay={i * 0.06}
                  className={isWide ? "lg:col-span-3" : "lg:col-span-2"}
                >
                  <div className="group rounded-2xl overflow-hidden border border-black/5 bg-[#4B4F5D]/50 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    {/* Image + icon badge + wave */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={prog.img}
                        alt={prog.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div
                        className="absolute top-4 left-4 w-11 h-11 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: prog.color }}
                      >
                        {prog.icon && (
                          <prog.icon size={20} className="text-white" />
                        )}
                      </div>

                      <svg
                        className="absolute -bottom-px left-0 w-full"
                        viewBox="0 0 400 24"
                        preserveAspectRatio="none"
                        height="20"
                      >
                        <path
                          d="M0 16 Q100 0 200 16 T400 16 V24 H0 Z"
                          fill={prog.color}
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* <span
                        className="text-[11px] font-bold tracking-widest uppercase mb-1.5"
                        style={{ color: prog.color }}
                      >
                        Program
                      </span> */}

                      <h3 className="text-base font-extrabold text-[#B8F27C] mb-1.5 leading-snug"
                      style={{ color: prog.color }}
                      >
                        {prog.name}
                      </h3>

                      <p className="text-[#A7A8AF] text-sm leading-snug mb-3">
                        {prog.desc}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {prog.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-xs text-[#ffff]"
                          >
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                              style={{ backgroundColor: prog.color }}
                            >
                              <Check
                                size={10}
                                className="text-white"
                                strokeWidth={3}
                              />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/get-plan"
                        className="mt-auto self-start flex items-center gap-1.5 text-xs font-bold rounded-full px-4 py-2 border transition-all duration-300"
                        style={{
                          color: prog.color,
                          borderColor: `${prog.color}66`,
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = prog.color;
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLElement).style.color =
                            prog.color;
                        }}
                      >
                        Learn More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progression Paths */}
      <section className="py-24 bg-[#4B4F5D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Structure
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              SPECIALIZED{" "}
              <span className="text-[#B8F27C]">PROGRESSION PATHS</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Each program follows a structured progression designed for your
              specific stage and goals.
            </p>
          </FadeIn>

          {/* Tabs */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {(
                Object.keys(progressionPaths) as Array<
                  keyof typeof progressionPaths
                >
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white text-[#FF6B5E] shadow-[0_4px_20px_rgba(255,107,44,0.2)]"
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeIn>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B2C]/40 to-transparent mx-20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {progressionPaths[activeTab].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 rounded-3xl bg-[#171A26] border border-white/8 hover:border-[#B8F27C]/30 transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#FFFFFF] text-[#FF6B5E] font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.stage}
                    </div>
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-lg font-bold text-white mb-1"
                    >
                      {step.title}
                    </h3>
                    {step.sub && (
                      <div className="text-[#B8F27C] text-xs font-semibold mb-2">
                        {step.sub}
                      </div>
                    )}
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                    <ChevronRight
                      size={16}
                      className="text-[#B8F27C] mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#171A26]/60">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]"

              // className="text-6xl text-white mb-6"
            >
              READY TO <span className="text-[#B8F27C]">BEGIN?</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Get a personalized plan tailored to your program and goals.
            </p>
            <Link
              to="/get-plan"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-sculpt-button bg-white text-sculpt-coral text-sm md:text-base font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
              // className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-2xl text-[#FF6B5E] font-bold text-lg  hover:shadow-[0_8px_60px_rgba(255,107,44,0.7)] transition-all duration-300 hover:scale-105"
            >
              Get Your Plan <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
