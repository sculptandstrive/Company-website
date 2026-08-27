import { useState } from "react";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

const heroImg =
  "https://images.unsplash.com/photo-1731325632701-90d4e869a98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdGVhbSUyMGdyb3VwJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc3NTg3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080";

const programs = [
  {
    name: "Pre & Postnatal Fitness",
    color: "#FF6B8A",
    bg: "from-pink-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1758599878949-4c612c619219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVuYXRhbCUyMHByZWduYW5jeSUyMHlvZ2ElMjBmaXRuZXNzfGVufDF8fHx8MTc3NTg3NjU1Mnww&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Safe, effective programs designed for every stage of your motherhood journey.",
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
    features: ["Dynamic stretching", "Fascial release", "Range of motion"],
  },
  {
    name: "Core & Strength",
    color: "#EF4444",
    bg: "from-red-900/20 to-transparent",
    img: "https://images.unsplash.com/photo-1591469945290-a3f13a7041c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JlJTIwc3RyZW5ndGglMjB0cmFpbmluZyUyMGFiJTIwd29ya291dHxlbnwxfHx8fDE3NzU4NzY1NzB8MA&ixlib=rb-4.1.0&q=80&w=600",
    desc: "Build a powerful foundation with targeted core training and progressive strength.",
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
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-[#171A26]">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0f]/95 via-[#0a0b0f]/60 to-[#0a0b0f]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0b0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
          className="lg:-translate-x-30"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Specialized Programs
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6">
              ONE PLATFORM.
              <br />
              <span className="bg-gradient-to-r from-[#B8F27C] to-[#42C7C5] bg-clip-text text-transparent">
                EVERY JOURNEY.
              </span>
            </h1>
            {/* <span className="inline-block text-[#FF6B2C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Specialized Programs
            </span>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
                lineHeight: "0.95",
              }}
              className="text-7xl md:text-9xl text-white mb-6"
            >
              ONE PLATFORM.
              <br />
              <span className="text-[#FF6B2C]">EVERY JOURNEY.</span>
            </h1> */}
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Whether you're preparing for motherhood, seeking senior vitality,
              or training the next generation — we have a specialized path
              designed just for you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-24 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <FadeIn key={prog.name} delay={i * 0.06}>
                <div className="group rounded-3xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-500 bg-[#0f1015] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={prog.img}
                      alt={prog.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${prog.bg}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1015]/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: `${prog.color}22`,
                          color: prog.color,
                          border: `1px solid ${prog.color}44`,
                        }}
                      >
                        Program
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-xl font-bold text-white mb-2"
                    >
                      {prog.name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {prog.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {prog.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-white/60"
                        >
                          <CheckCircle
                            size={14}
                            style={{ color: prog.color }}
                            className="shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/get-plan"
                      className="flex items-center justify-between w-full px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border"
                      style={{
                        borderColor: `${prog.color}40`,
                        color: prog.color,
                        backgroundColor: `${prog.color}10`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          `${prog.color}25`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          `${prog.color}10`;
                      }}
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Progression Paths */}
      <section className="py-24 bg-[#0f1015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block text-[#FF6B2C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Structure
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
              className="text-6xl text-white mb-4"
            >
              SPECIALIZED{" "}
              <span className="text-[#FF6B2C]">PROGRESSION PATHS</span>
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
                      ? "bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] text-white shadow-[0_4px_20px_rgba(255,107,44,0.4)]"
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
                  <div className="p-6 rounded-3xl bg-[#111318] border border-white/8 hover:border-[#FF6B2C]/30 transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B2C] to-[#FF4500] flex items-center justify-center mb-5 text-white font-bold text-lg shadow-[0_4px_20px_rgba(255,107,44,0.4)] group-hover:scale-110 transition-transform duration-300">
                      {step.stage}
                    </div>
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-lg font-bold text-white mb-1"
                    >
                      {step.title}
                    </h3>
                    {step.sub && (
                      <div className="text-[#FF6B2C] text-xs font-semibold mb-2">
                        {step.sub}
                      </div>
                    )}
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                    <ChevronRight
                      size={16}
                      className="text-[#FF6B2C] mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0b0f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
              className="text-6xl text-white mb-6"
            >
              READY TO <span className="text-[#FF6B2C]">BEGIN?</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Get a personalized plan tailored to your program and goals.
            </p>
            <Link
              to="/get-plan"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] rounded-2xl text-white font-bold text-lg shadow-[0_8px_40px_rgba(255,107,44,0.5)] hover:shadow-[0_8px_60px_rgba(255,107,44,0.7)] transition-all duration-300 hover:scale-105"
            >
              Get Your Plan <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
