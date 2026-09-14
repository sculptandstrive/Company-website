import { Link } from "react-router";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, BarChart2, CheckCircle } from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

// const heroImg =
//   "https://images.unsplash.com/photo-1739776073455-c53292998b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0dXJlJTIwYXNzZXNzbWVudCUyMHBoeXNpY2FsJTIwdGhlcmFweSUyMGJvZHklMjBhbGlnbm1lbnR8ZW58MXx8fHwxNzc1ODc2NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const kettlebellImg =
  "https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXR0bGViZWxsJTIwdHJhaW5pbmclMjB3b3Jrb3V0JTIwcG93ZXJ8ZW58MXx8fHwxNzc1ODc2NTU4fDA&ixlib=rb-4.1.0&q=80&w=600";
const bandsImg =
  "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpc3RhbmNlJTIwYmFuZHMlMjB3b3Jrb3V0JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzc1ODc2NTYzfDA&ixlib=rb-4.1.0&q=80&w=600";
const bodyweightImg =
  "https://images.unsplash.com/photo-1764885531407-5419366dfd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5d2VpZ2h0JTIwY2FsaXN0aGVuaWNzJTIwd29ya291dCUyMHBhcmt8ZW58MXx8fHwxNzc1ODc2NTU5fDA&ixlib=rb-4.1.0&q=80&w=600";
const travelImg =
  "https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBob3RlbCUyMHdvcmtvdXQlMjBmaXRuZXNzJTIwcm9vbXxlbnwxfHx8fDE3NzU4NzY1NjR8MA&ixlib=rb-4.1.0&q=80&w=600";

const assessmentSteps = [
  {
    title: "Static Posture",
    desc: "Analyze standing alignment from multiple angles to identify structural imbalances.",
    icon: "①",
    color: "#FF6B2C",
  },
  {
    title: "Dynamic Movement",
    desc: "Observe movement quality during walking, stepping, and transitional patterns.",
    icon: "②",
    color: "#FFD700",
  },
  {
    title: "Push & Pull",
    desc: "Evaluate upper body mechanics and scapular stability during resistance patterns.",
    icon: "③",
    color: "#A855F7",
  },
  {
    title: "Overhead Squat",
    desc: "Comprehensive full-body assessment revealing mobility and stability deficits.",
    icon: "④",
    color: "#22D3EE",
  },
];

const bodyPoints = [
  { label: "Head Position", top: "8%", left: "50%" },
  { label: "Shoulder Alignment", top: "22%", left: "50%" },
  { label: "Spinal Curvature", top: "40%", left: "50%" },
  { label: "Hip Level", top: "55%", left: "50%" },
  { label: "Knee Tracking", top: "72%", left: "50%" },
];

const trainingMethods = [
  {
    count: "45",
    unit: "workouts",
    name: "Kettlebell Training",
    tag: "Power & Fluidity",
    color: "#FF6B2C",
    img: kettlebellImg,
    time: "25-40 min",
    level: "Medium-High",
    desc: "Master the art of kettlebell training with exercises that build explosive power, core strength, and cardiovascular endurance in one fluid movement.",
    benefits: [
      "Full-body conditioning",
      "Improved grip strength",
      "Enhanced hip mobility",
      "Metabolic boost",
    ],
    exercises: ["Turkish Get-Up", "Swings", "Clean & Press", "+42 more"],
  },
  {
    count: "60",
    unit: "workouts",
    name: "Resistance Bands",
    tag: "Versatile & Joint-Friendly",
    color: "#A855F7",
    img: bandsImg,
    time: "15-30 min",
    level: "Low-High",
    desc: "Perfect for all fitness levels, resistance bands provide progressive tension for muscle building, rehabilitation, and mobility work without joint stress.",
    benefits: [
      "Joint-friendly resistance",
      "Portable anywhere",
      "Muscle activation",
      "Rehab-friendly",
    ],
    exercises: ["Pull-Aparts", "Banded Squats", "Face Pulls", "+57 more"],
  },
  {
    count: "80",
    unit: "workouts",
    name: "Bodyweight Training",
    tag: "Master Your Body",
    color: "#22D3EE",
    img: bodyweightImg,
    time: "20-45 min",
    level: "All Levels",
    desc: "Build incredible strength, control, and body awareness using nothing but your own weight. From basics to advanced calisthenics progressions.",
    benefits: [
      "No equipment needed",
      "Anywhere, anytime",
      "Functional strength",
      "Body control",
    ],
    exercises: ["Push-up Variations", "Pistol Squats", "Pull-ups", "+77 more"],
  },
  {
    count: "50",
    unit: "workouts",
    name: "Travel Workouts",
    tag: "Fitness On The Go",
    color: "#10B981",
    img: travelImg,
    time: "10-20 min",
    level: "Quick & Intense",
    desc: "Never miss a workout while traveling. Quick, effective routines designed for hotel rooms, airports, or anywhere with limited space.",
    benefits: [
      "No equipment required",
      "Small space friendly",
      "Time efficient",
      "Maintain momentum",
    ],
    exercises: [
      "Hotel HIIT",
      "Airport Stretches",
      "Jetlag Recovery",
      "+47 more",
    ],
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Assessments() {
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

          {/* <img src={heroImg} alt="Assessments" className="w-full h-full object-cover object-top" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/70 to-[#171A26]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171A26]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:-translate-x-45 lg:-translate-y-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block -translate-y-3 text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4 ml-2">
              Postural Assessment
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6">
              MOVE BETTER.
              <br />
              <span className="text-[#B8F27C] inline-block mt-3">
                FEEL BETTER.
              </span>
            </h1>
            
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              Our comprehensive assessment protocol identifies movement
              dysfunctions before they become injuries. Through detailed
              analysis, we create your personalized corrective roadmap.
            </p>

            {/* Primary CTA */}
            <Link
              to="/get-plan"
              className="group inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
            >
              Book Your Assessment
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            {/* <Link
              to="/get-plan"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] rounded-2xl text-white font-bold shadow-[0_8px_30px_rgba(255,107,44,0.5)] hover:shadow-[0_8px_50px_rgba(255,107,44,0.7)] transition-all duration-300 hover:scale-105"
            >
              Book Your Assessment <ArrowRight size={18} />
            </Link> */}
          </motion.div>
        </div>
      </div>

      {/* Assessment Steps */}
      <section className="py-24 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Body Analysis Graphic */}
            <FadeIn>
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="bg-gradient-to-b from-[#232631] to-[#232631] rounded-3xl p-10 border border-white/8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8F27C]/15 border border-[#B8F27C]/30 mb-3">
                        <BarChart2 size={14} className="text-[#B8F27C]" />
                        <span className="text-[#B8F27C] text-xs font-bold">
                          360° Full Analysis
                        </span>
                      </div>
                    </div>

                    {/* Silhouette with points */}
                    <div
                      className="relative flex items-center justify-center"
                      style={{ height: "340px" }}
                    >
                      {/* Body SVG silhouette */}
                      <svg
                        viewBox="0 0 120 320"
                        className="h-72 opacity-20"
                        fill="white"
                      >
                        {/* Head */}
                        <circle cx="60" cy="25" r="18" />
                        {/* Neck */}
                        <rect x="53" y="42" width="14" height="15" rx="4" />
                        {/* Torso */}
                        <path d="M30 57 L90 57 L85 160 L35 160 Z" />
                        {/* Arms */}
                        <path
                          d="M30 57 L10 130"
                          strokeWidth="16"
                          stroke="white"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M90 57 L110 130"
                          strokeWidth="16"
                          stroke="white"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Legs */}
                        <path
                          d="M40 160 L30 280"
                          strokeWidth="18"
                          stroke="white"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M80 160 L90 280"
                          strokeWidth="18"
                          stroke="white"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Checkpoint dots */}
                      {bodyPoints.map((pt, i) => (
                        <motion.div
                          key={pt.label}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + 0.3 }}
                          className="absolute flex items-center gap-2"
                          style={{
                            top: pt.top,
                            left: pt.left,
                            transform: "translateX(-50%)",
                          }}
                        >
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <div className="w-3 h-3 rounded-full bg-[#B8F27C] animate-pulse" />
                            <span className="text-[10px] text-white/60 hidden sm:block">
                              {pt.label}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-2 mt-4">
                      {bodyPoints.map((pt, i) => (
                        <motion.div
                          key={pt.label}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#B8F27C]" />
                          <span className="text-white/60 text-xs">
                            {pt.label}
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#B8F27C]/30 to-transparent" />
                          <CheckCircle size={12} className="text-[#B8F27C]" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Assessment Details */}
            <FadeIn delay={0.2}>
              <div>
                <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                  Our Method
                </span>
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 leading-none whitespace-nowrap"
                  // className="text-5xl text-white mb-6"
                >
                  4-POINT{" "}
                  <span className="text-[#B8F27C]">ASSESSMENT PROTOCOL</span>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Our detailed assessment covers four key movement categories to
                  build a complete picture of your body's strengths and areas
                  needing attention.
                </p>
                <div className="space-y-5">
                  {assessmentSteps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-all duration-300 group"
                    >
                      <div
                        className="text-2xl font-bold shrink-0"
                        style={{ color: step.color }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <h4
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                          className="font-bold text-white mb-1 text-sm"
                        >
                          {step.title}
                        </h4>
                        <p className="text-white/50 text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Link
                  to="/get-plan"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300 mt-5 ml-1"
                >
                  Book Your Assessment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform transition-200"/>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Training Methods */}
      <section className="py-20 bg-[#232631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Training Methods
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]"
              // className="text-6xl text-white mb-4"
            >
              
              TRAIN YOUR WAY, <span className="text-[#B8F27C]">ANYWHERE</span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Whether you prefer kettlebells, bands, or pure bodyweight, we
              have expertly designed programs for every training style and
              equipment preference.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingMethods.map((method, i) => (
              <FadeIn key={method.name} delay={i * 0.1}>
                <div className="group rounded-3xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-500 bg-[#171A26] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={method.img}
                      alt={method.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A26]/90 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-sm text-white border border-white/20">
                        {method.count} {method.unit}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-2xl font-bold text-white"
                      >
                        {method.name}
                      </h3>
                      <div
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: method.color }}
                      >
                        {method.tag}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <Clock size={12} style={{ color: method.color }} />
                        {method.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <BarChart2 size={12} style={{ color: method.color }} />
                        {method.level}
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {method.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {method.benefits.map((b) => (
                        <div
                          key={b}
                          className="flex items-center gap-2 text-xs text-white/60"
                        >
                          <CheckCircle
                            size={12}
                            style={{ color: method.color }}
                          />
                          {b}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {method.exercises.map((ex) => (
                        <span
                          key={ex}
                          className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/40"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/programs/all-program"
                      className="w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center"
                      style={{
                        backgroundColor: `${method.color}20`,
                        color: method.color,
                        border: `1px solid ${method.color}40`,
                      }}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
