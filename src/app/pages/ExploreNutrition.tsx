import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CalendarDays,
  Play,
} from "lucide-react";
import dietPlanImg from "../../assets/diet-plan.jpg";
import nutritionImg from "../../assets/resources.jpg";

import heroVideo9 from "../../assets/herovideo/herovideo9.mp4"

const nutritionPlans = [
  {
    title: "Personalized Nutrition",
    description:
      "Get nutrition guidance tailored to your goals, lifestyle, preferences, and individual needs.",
  },
  {
    title: "Weight Loss Nutrition",
    description:
      "Build sustainable eating habits and follow a practical approach to support healthy weight management.",
  },
  {
    title: "Muscle Building Nutrition",
    description:
      "Fuel your workouts and recovery with nutrition designed to support strength and muscle growth.",
  },
  {
    title: "Sports Nutrition",
    description:
      "Optimize your energy, performance, hydration, and recovery with sport-focused nutrition guidance.",
  },
  {
    title: "Meal Planning",
    description:
      "Make healthy eating easier with practical meal plans that fit your routine and nutrition goals.",
  },
  {
    title: "Supplement Guidance",
    description:
      "Learn how supplements can complement your nutrition and support your overall fitness goals.",
  },
];

const resources = [
  {
    title: "Nutrition Guides",
    description:
      "Simple guides to help you understand nutrition and build healthier habits.",
    bgColor: "#B8F27C",
    textColor: "#0B0F0F",
    textMuted: "#0B0F0F/70",
  },
  {
    title: "Recipes",
    description:
      "Discover easy, nutritious recipes that fit into your everyday routine.",
    bgColor: "#42C7C5",
    textColor: "#0B0F0F",
    textMuted: "#0B0F0F/70",
  },
  {
    title: "Meal Plans",
    description:
      "Stay organized with practical meal plans designed around your nutrition goals.",
    bgColor: "#FF6B5E",
    textColor: "#0B0F0F",
    textMuted: "#0B0F0F/75",
  },
  {
    title: "Nutrition Calculator",
    description:
      "Get useful nutrition insights to better understand your daily needs.",
    bgColor: "#8D2A8B",
    textColor: "#0B0F0F",
    textMuted: "#0B0F0F/75",
  },
];

export const ExploreNutrition = () => {
  return (
    <div>
      {/* hero */}
      <section className="relative h-[70vh] min-h-[680px] flex items-center overflow-hidden bg-[#171A26]">
        {/* Background */}
        <div className="absolute inset-0">
          <video
            src={heroVideo9}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Left dark overlay for text */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/70 to-[#171A26]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171A26]" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#171A26]/60 via-[#171A26]/40 to-[#171A26]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/80 via-transparent to-[#171A26]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 pt-10">
          <motion.div
            className="max-w-[700px] text-left md:ml-30"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Label */}
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#B8F27C]">
              Sculpt And Strive Nutrition
            </span>

            {/* Heading */}
            <h1 className="mb-7 text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
              NOURISH YOUR BODY
              <br />
              <span className="mt-3 inline-block bg-gradient-to-r from-[#B8F27C] to-[#42C7C5] bg-clip-text text-transparent">
                FUEL YOUR GOALS
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Discover nutrition plans designed to support your health, fuel
              your training, and help you build healthier habits that last.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Link
                to="/get-plan"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
                // className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/nutrition"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 min-h-11 rounded-lg border border-sculpt-border bg-transparent text-white text-base font-semibold transition-all duration-300 hover:bg-white/5 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
              >
                <Play
                  size={16}
                  className="text-sculpt-coral transition-colors group-hover:text-white"
                />
                Explore Nutrition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#232631] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl text-center mx-auto"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8F27C]">
              Nutrition Plans
            </p>
          </motion.div>

          {/* Main Layout */}
          <div className="grid overflow-hidden rounded-3xl border border-[#26313D] bg-[#171A26] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Featured Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-[480px] overflow-hidden"
            >
              {/* Image */}
              <img
                src={dietPlanImg}
                alt="Personalized nutrition"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232631] via-[#232631]/45 to-transparent" />

              {/* Featured Content */}
              {/* TEXT ON IMAGE */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center p-7 sm:p-9">
                <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                  Nutrition designed
                  <span className="inline-block text-[#B8F27C]">
                    around your goals
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
                  Discover nutrition guidance built to support your lifestyle,
                  training, health, and long-term goals.
                </p>
              </div>
            </motion.div>

            {/* Nutrition Plan List */}
            <div className="flex flex-col p-5 sm:p-7 lg:p-8">
              {nutritionPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex flex-1 items-center border-b border-[#26313D] py-6 first:pt-2 last:border-b-0 last:pb-2"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-[#B8F27C] sm:text-xl">
                      {plan.title}
                    </h3>

                    <p className="mt-1 max-w-lg text-sm leading-6 text-[#A7A8AF]">
                      {plan.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="ml-4 shrink-0 text-[#52606D] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#B8F27C]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RESOURCES ==================== */}
      <section className="bg-[#171A26] px-6 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center mx-auto"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8F27C]">
              Resources
            </p>

            <h2 className="text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Everything to <span className="text-[#B8F27C]">eat smarter</span>
            </h2>

            <p className="mt-2 max-w-2xl text-base leading-7 text-[#A7A8AF] sm:text-lg mx-auto">
              Nutrition tips for better choices and meal planning.
            </p>
          </motion.div>

          {/* Main resources layout */}
          <div className="grid overflow-hidden rounded-3xl border border-[#26313D] bg-[#171A26] lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT — 4 colored cards */}
            {/* LEFT — 4 colored cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  style={{
                    backgroundColor: resource.bgColor,
                    color: resource.textColor,
                  }}
                  //   className="group min-h-[250px] p-7 transition-transform duration-300 hover:scale-[1.02]"
                  className="group min-h-[250px] p-7"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="mt-1 text-2xl font-bold">
                        {resource.title}
                      </h3>

                      <p
                        style={{ color: resource.textMuted }}
                        className="mt-3 text-sm leading-6"
                      >
                        {resource.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={22}
                      className="mt-6 transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-[520px] overflow-hidden lg:min-h-full"
            >
              <img
                src={nutritionImg}
                alt="Healthy nutrition"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0F]/80 via-transparent to-transparent" /> */}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232631] via-[#232631]/45 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8F27C]">
                  Eat well Live well
                </p>

                <h3 className="mt-3 max-w-md text-3xl uppercase font-bold leading-tight text-white sm:text-4xl">
                  Make nutrition part of{" "}
                  <span className="text-[#B8F27C]">your lifestyle</span>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#232631] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-3xl border border-[#26313D] bg-[#171A26] p-8 sm:p-10 lg:p-14"
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B8F27C]/10 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#42C7C5]/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8F27C]">
                  Your next step
                </p>

                <h2 className="text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
                  Better <span className="text-[#B8F27C]">nutrition?</span>
                </h2>

                <p className="text-base leading-7 text-[#A7A8AF] sm:text-lg">
                  Build healthier habits with guidance tailored to your goals.
                </p>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="flex flex-col items-start gap-4 lg:items-end"
              >
                <Link
                  to="/get-plan"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
