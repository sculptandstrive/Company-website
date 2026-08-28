import { useState } from "react";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Heart,
  Activity,
} from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

const heroImg =
  "https://images.unsplash.com/photo-1587996616596-b714c1c54146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBwcmVwJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU4NzY1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const dailyData = [
  { day: "Mon", pct: 92 },
  { day: "Tue", pct: 88 },
  { day: "Wed", pct: 95 },
  { day: "Thu", pct: 78 },
  { day: "Fri", pct: 85 },
  { day: "Sat", pct: 72 },
  { day: "Sun", pct: 90 },
];

const macros = [
  { label: "Protein", pct: 35, color: "#FF6B2C", grams: "154g" },
  { label: "Carbs", pct: 40, color: "#FFD700", grams: "220g" },
  { label: "Fats", pct: 25, color: "#A855F7", grams: "51g" },
];

const meals = [
  { name: "Breakfast", status: "done", cal: 520, icon: "🌅" },
  { name: "Lunch", status: "done", cal: 680, icon: "☀️" },
  { name: "Snack", status: "pending", cal: 180, icon: "🍎" },
  { name: "Dinner", status: "pending", cal: 720, icon: "🌙" },
];

const goals = [
  {
    label: "Weight Loss",
    icon: TrendingUp,
    color: "#FF6B2C",
    desc: "Caloric deficit plans with macro precision",
  },
  {
    label: "Muscle Gain",
    icon: Zap,
    color: "#FFD700",
    desc: "High-protein protocols for lean mass",
  },
  {
    label: "Energy Boost",
    icon: Activity,
    color: "#22D3EE",
    desc: "Nutrient timing for peak performance",
  },
  {
    label: "Athletic Performance",
    icon: Target,
    color: "#A855F7",
    desc: "Sport-specific fueling strategies",
  },
  {
    label: "Prenatal Nutrition",
    icon: Heart,
    color: "#FF6B8A",
    desc: "Safe, research-backed prenatal support",
  },
  {
    label: "Senior Vitality",
    icon: TrendingUp,
    color: "#10B981",
    desc: "Age-specific nutrient requirements",
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

export function Nutrition() {
  const [search, setSearch] = useState("");

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* <img src={heroImg} alt="Nutrition" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/70 to-[#171A26]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171A26]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
          className="lg:-translate-x-30 lg:-translate-y-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block -translate-y-3 text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4 ml-2">
              Smart Nutrition
            </span>
            <h1
              className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6"
            >
              FUEL YOUR
              <br />
              <span className="text-[#B8F27C] inline-block mt-3">TRANSFORMATION</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg leading-relaxed">
              Track your nutrition with our comprehensive Global food database.
              Monitor your diet adherence and achieve your fitness goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Dashboard */}
      <section className="py-24 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Food Database Search */}
            <FadeIn className="xl:col-span-1">
              <div className="rounded-3xl bg-[#0f1015] border border-white/8 p-6 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-[#FF6B2C]/20 flex items-center justify-center">
                    <Search size={14} className="text-[#FF6B2C]" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="font-bold text-white text-base"
                  >
                    Food Database
                  </h3>
                </div>
                <div className="text-[#FF6B2C] text-xs font-semibold mb-5 ml-10">
                  Global Foods
                </div>

                <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                  Global Food Database
                </div>
                <div className="relative mb-4">
                  <Search
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search foods..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF6B2C]/50 focus:bg-[#FF6B2C]/5 transition-all"
                  />
                </div>

                {search && (
                  <div className="text-white/30 text-sm text-center py-4">
                    No foods found
                  </div>
                )}

                {/* Popular foods */}
                <div className="mt-4">
                  <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                    Popular Foods
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        name: "Chicken Breast (100g)",
                        cal: 165,
                        p: 31,
                        c: 0,
                        f: 4,
                      },
                      {
                        name: "Brown Rice (1 cup)",
                        cal: 216,
                        p: 5,
                        c: 45,
                        f: 2,
                      },
                      { name: "Paneer (100g)", cal: 265, p: 18, c: 2, f: 20 },
                      { name: "Banana (medium)", cal: 105, p: 1, c: 27, f: 0 },
                      { name: "Almonds (28g)", cal: 164, p: 6, c: 6, f: 14 },
                    ].map((food) => (
                      <div
                        key={food.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer border border-transparent hover:border-white/10"
                      >
                        <div>
                          <div className="text-white text-xs font-medium">
                            {food.name}
                          </div>
                          <div className="text-white/40 text-[10px] mt-0.5">
                            P: {food.p}g • C: {food.c}g • F: {food.f}g
                          </div>
                        </div>
                        <div className="text-[#FF6B2C] text-xs font-bold">
                          {food.cal} cal
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Diet Adherence */}
            <FadeIn delay={0.1} className="xl:col-span-1">
              <div className="rounded-3xl bg-[#0f1015] border border-white/8 p-6 h-full">
                <h3
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="font-bold text-white text-base mb-1"
                >
                  Diet Adherence
                </h3>
                <div className="text-white/40 text-xs mb-5">
                  Weekly Performance
                </div>

                {/* Overall Score */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#scoreGrad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42 * 0.86} ${2 * Math.PI * 42}`}
                      />
                      <defs>
                        <linearGradient
                          id="scoreGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF6B2C" />
                          <stop offset="100%" stopColor="#FFD700" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
                      <div
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        className="text-3xl text-white"
                      >
                        86%
                      </div>
                      <div className="text-white/40 text-[10px]">
                        Overall Score
                      </div>
                    </div>
                  </div>
                </div>

                {/* Daily bars */}
                <div className="flex items-end justify-between gap-2 mb-6 h-24">
                  {dailyData.map((d) => (
                    <div
                      key={d.day}
                      className="flex flex-col items-center gap-1 flex-1"
                    >
                      <div className="text-white/40 text-[10px]">{d.pct}%</div>
                      <div
                        className="w-full rounded-t-lg transition-all duration-500"
                        style={{
                          height: `${d.pct * 0.7}%`,
                          background:
                            d.pct >= 90
                              ? "linear-gradient(to top, #FF6B2C, #FFD700)"
                              : d.pct >= 80
                                ? "#FF6B2C99"
                                : "#FF6B2C44",
                        }}
                      />
                      <div className="text-white/30 text-[10px]">{d.day}</div>
                    </div>
                  ))}
                </div>

                {/* Macro scores */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Calories", pct: 92, color: "#FF6B2C" },
                    { label: "Protein", pct: 88, color: "#FFD700" },
                    { label: "Macros", pct: 78, color: "#A855F7" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/8"
                    >
                      <div
                        className="text-lg font-bold"
                        style={{ color: m.color }}
                      >
                        {m.pct}%
                      </div>
                      <div className="text-white/40 text-[10px]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Today's Nutrition */}
            <FadeIn delay={0.2} className="xl:col-span-1">
              <div className="rounded-3xl bg-[#0f1015] border border-white/8 p-6 h-full">
                <h3
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="font-bold text-white text-base mb-1"
                >
                  Today's Nutrition
                </h3>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-white/40 text-xs">1,847 / 2,200 cal</div>
                  <div className="px-2 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-bold border border-[#10B981]/30">
                    On Track
                  </div>
                </div>

                {/* Calorie progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-white/40 mb-2">
                    <span>Daily Progress</span>
                    <span>84%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "84%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#FFD700]"
                    />
                  </div>
                </div>

                {/* Macro distribution */}
                <div className="mb-6">
                  <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">
                    Macro Distribution
                  </div>
                  <div className="space-y-3">
                    {macros.map((m) => (
                      <div key={m.label}>
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-white/60">{m.label}</span>
                          <span
                            className="font-bold"
                            style={{ color: m.color }}
                          >
                            {m.pct}% • {m.grams}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${m.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: m.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meals */}
                <div>
                  <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                    Today's Meals
                  </div>
                  <div className="space-y-2">
                    {meals.map((meal) => (
                      <div
                        key={meal.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/8"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{meal.icon}</span>
                          <span className="text-white text-xs font-medium">
                            {meal.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white/40 text-xs">
                            {meal.cal} cal
                          </span>
                          <div
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              meal.status === "done"
                                ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30"
                                : "bg-white/5 text-white/30 border border-white/10"
                            }`}
                          >
                            {meal.status === "done" ? "✓ Done" : "Pending"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-[#0f1015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[#FF6B2C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Goal-Based Plans
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
              className="text-6xl text-white mb-4"
            >
              NUTRITION FOR <span className="text-[#FF6B2C]">YOUR GOAL</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Tailored nutrition strategies aligned with your specific fitness
              objectives and lifestyle.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <FadeIn key={goal.label} delay={i * 0.08}>
                <div className="group p-6 rounded-3xl bg-[#0a0b0f] border border-white/8 hover:border-white/15 transition-all duration-500 cursor-pointer">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${goal.color}20` }}
                  >
                    <goal.icon size={22} style={{ color: goal.color }} />
                  </div>
                  <h3
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="font-bold text-white mb-2"
                  >
                    {goal.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/get-plan"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] rounded-2xl text-white font-bold text-lg shadow-[0_8px_40px_rgba(255,107,44,0.5)] hover:shadow-[0_8px_60px_rgba(255,107,44,0.7)] transition-all duration-300 hover:scale-105"
            >
              Start Tracking Your Diet <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
