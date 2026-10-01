import React, { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "motion/react";
import yoga1 from "../../assets/yoga1.jpg";
import yoga2 from "../../assets/yoga2.jpg";
import yoga3 from "../../assets/yoga3.jpg";

import reel5 from "../../assets/reels/reel-5.mp4";
import reel6 from "../../assets/reels/reel-13.mp4";
import reel7 from "../../assets/reels/reel-9.mp4";
import reel8 from "../../assets/reels/reel-10.mp4";
import {
  Dumbbell,
  PersonStanding,
  HeartPulse,
  Leaf,
  Move,
  BriefcaseBusiness,
  UserRoundCheck,
  ClipboardList,
  PlayCircle,
  ChartNoAxesCombined,
  UsersRound,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const programPaths = [
  {
    title: "Become a Certified Personal Trainer",
    description:
      "Start your fitness career with confidence through a structured certification pathway.",
    button: "Explore Personal Trainer Programs",
  },
  {
    title: "Fitness + Nutrition",
    description:
      "Go beyond training with education across fitness, nutrition, and wellness.",
    button: "Explore Fitness & Nutrition",
  },
  {
    title: "Career-Focused Bundles",
    description:
      "Build multiple professional skills through comprehensive education bundles.",
    button: "Compare Career Bundles",
  },
  {
    title: "Specialize Your Expertise",
    description:
      "Develop focused knowledge for specific populations, goals, and training areas.",
    button: "Explore Specializations",
  },
  {
    title: "Group Fitness",
    description: "Develop the skills to lead and train groups.",
    button: "Explore Group Fitness",
  },
  {
    number: "06",
    title: "Continuing Education",
    description:
      "Keep developing your knowledge across training, nutrition, behavior, and wellness.",
    button: "Explore Continuing Education",
  },
];

const popularPrograms = [
  {
    title: "Strength Builder",
    duration: "8 Weeks Program",
    description:
      "Build strength, improve endurance, and develop a stronger foundation through structured training.",
    image: yoga1,
  },
  {
    title: "Fat Loss Accelerator",
    duration: "6 Weeks Program",
    description:
      "Follow a structured approach to improve fitness, build healthy habits, and work toward your fat-loss goals.",
    image: yoga2,
  },
  {
    title: "Athletic Performance",
    duration: "12 Weeks Program",
    description:
      "Develop strength, speed, conditioning, and movement skills to perform at your best.",
    image: yoga3,
  },
];

const programCategories = [
  {
    title: "Fitness",
    description: "Build strength and endurance.",
    icon: Dumbbell,
  },
  {
    title: "Sports Performance",
    description: "Enhance athletic performance.",
    icon: PersonStanding,
  },
  {
    title: "Physical Recovery",
    description: "Recover faster and move better.",
    icon: HeartPulse,
  },
  {
    title: "Holistic Health",
    description: "Mind, body and lifestyle balance.",
    icon: Leaf,
  },
  {
    title: "Movement Optimization",
    description: "Improve mobility and flexibility.",
    icon: Move,
  },
  {
    title: "Business Building",
    description: "Grow your fitness business.",
    icon: BriefcaseBusiness,
  },
];

const programFeatures = [
  {
    title: "Expert Coaching",
    description:
      "Learn from experienced fitness professionals who guide you throughout your program.",
    icon: UserRoundCheck,
  },
  {
    title: "Personalized Plans",
    description:
      "Follow structured plans designed around your goals, experience, and progress.",
    icon: ClipboardList,
  },
  {
    title: "Video Workouts",
    description:
      "Access guided video workouts to help you train with confidence wherever you are.",
    icon: PlayCircle,
  },
  {
    title: "Progress Tracking",
    description:
      "Track your progress and stay motivated as you work toward your goals.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Community Support",
    description:
      "Stay connected with a supportive community throughout your fitness journey.",
    icon: UsersRound,
  },
];

const reels = [
  { src: reel5, title: "Barbell Squat" },
  { src: reel6, title: "Banded Squat" },
  { src: reel7, title: "Kettlebell Swing" },
  { src: reel8, title: "Overhead Press" },
];

export const ViewAllPrograms = () => {

  const reelRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
    const handleMouseEnter = (index: number) => {
      const video = reelRefs.current[index];
      if (video) {
        video.play();
      }
    };
  
    const handleMouseLeave = (index: number) => {
      const video = reelRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = 0; // optional: rewind to start on leave
      }
    };
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative h-[70vh] min-h-[680px] flex items-center overflow-hidden bg-[#171A26]">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/60 to-[#171A26]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171A26]" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171A26]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 pt-10">
          {/* <div className="mx-auto max-w-7xl"> */}
          <motion.div
            className="max-w-[700px] text-left md:ml-30"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Label */}
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#B8F27C]">
              Sculpt And Strive
            </span>

            {/* Heading */}
            <h1 className="mb-7 text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
              BUILD YOUR KNOWLEDGE
              <br />
              <span className="mt-3 inline-block bg-gradient-to-r from-[#B8F27C] to-[#42C7C5] bg-clip-text text-transparent">
                SHAPE YOUR CAREER
              </span>
              <br />
              <span className="mt-3 inline-block">TRANSFORM LIVES</span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Explore flexible fitness education programs designed to help you
              build expertise, advance your career, and transform lives.
            </p>
            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* Explore Programs */}
              <Link
                to="/programs"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
              >
                Explore Programs
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform transition-200"
                />{" "}
              </Link>

              {/* Find Your Path */}
              <Link
                to="/get-plan"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 min-h-11 rounded-lg border border-sculpt-border bg-transparent text-white text-base font-semibold transition-all duration-300 hover:bg-white/5 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sculpt-lime"
              >
                {" "}
                Find Your Path{" "}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Choose Your Path */}
      <section className="bg-[#232631] px-6 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8F27C]">
              Choose Your Path
            </p>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              BUILD YOUR <span className="text-[#B8F27C]">FITNESS CAREER</span>
            </h2>

            <p className="mt-2 text-base leading-7 text-white/60 sm:text-lg">
              Explore flexible pathways to start and grow your fitness career.
            </p>
          </div>

          {/* Program Path Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {programPaths.map((path) => (
              <div
                key={path.number}
                className="
            group
            block
            min-h-[180px]
            rounded-2xl
            border border-[#4B4F5D]
            bg-[#171A26]
            p-6
            transition-all duration-200
            hover:-translate-y-1
            hover:border-[#B8F27C]
            hover:shadow-lg
          "
              >
                <div>
                  {/* Program Title */}
                  <h3 className="text-xl font-bold leading-tight text-[#B8F27C]">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-sm text-xs leading-normal text-[#A7A8AF] line-clamp-2">
                    {path.description}
                  </p>
                </div>

                {/* Explore Button */}
                <button
                  type="button"
                  className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#FF6B5E]/60
              transition-all
              duration-200
              group-hover:gap-3
            "
                >
                  {path.button}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* reels section */}
            <section className="bg-[#171A26] py-10 md:py-16 px-4 md:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-center text-[#B8F27C] mb-10">
                  
                Move Like a Pro
                </h2>
      
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
                  {reels.map((reel, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={() => handleMouseLeave(i)}
                      className="relative w-full rounded-xl overflow-hidden group cursor-pointer"
                      style={{ aspectRatio: "9 / 14" }}
                    >
                      <video
                        ref={(el) => (reelRefs.current[i] = el)}
                        src={reel.src}
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171A26]/50 via-[#171A26]/10 to-transparent" />
                      {/* play icon on hover */}
                      <div
                        className="absolute bottom-2
                      left-2 opacity-100 group-hover:opacity-0
                       transition-opacity"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#B8F27C]/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-[#B8F27C] ml-1" />
                        </div>
                      </div>
                      {/* workout name */}
                      {/* <div className="absolute bottom-2 right-2">
                        <p className="text-[#B8F27C] text-sm font-semibold drop-shadow-md line-clamp-2">
                          {reel.title}
                        </p>
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

      {/* 3. Program Categories */}
      <section className="bg-[#4B4F5D] px-6 py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10 max-w-3xl text-center mx-auto">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8F27C]">
              Program Categories
            </p>

            <h2 className="text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white mb-4 leading-[1.05">
              Explore your <span className="text-[#B8F27C]">expertise</span>
            </h2>

            <p className="mt-1 max-w-2xl text-base leading-7 mx-auto text-white/60 sm:text-lg">
              Programs in fitness, wellness, movement, and business.
            </p>
          </div>

          {/* Categories */}
          <div className="grid gap-4 md:grid-cols-2">
            {programCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex h-[100px] items-center justify-between rounded-2xl border border-[#26313D] bg-[#171A26] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8F27C]/50"
                >
                  {/* Left */}
                  <div className="flex items-center gap-5">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B8F27C]/10">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                        className="text-[#B8F27C]"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-md font-semibold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#A7A8AF]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="ml-4 text-xl text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B8F27C]">
                    →
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Popular Programs */}
      <section className="bg-[#171A26] px-6 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl text-center mx-auto">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8F27C]">
                Popular Programs
              </p>

              <h2 className="text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
                Programs for <span className="text-[#B8F27C]">your growth</span>
              </h2>

              <p className="mt-2 text-base leading-7 text-white/60 sm:text-lg">
                Explore popular programs for strength, performance, and
                transformation.
              </p>
            </div>

            {/* <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#B8F27C] transition-all duration-200 hover:gap-3"
            >
              Explore All Programs
              <span>→</span>
            </button> */}
          </div>

          {/* Program Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-2xl border border-[#26313D] bg-[#232631] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8F27C]/50"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#232631] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#B8F27C]">
                    {program.duration}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A7A8AF]">
                    {program.description}
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8F27C] transition-all duration-200 group-hover:gap-3"
                  >
                    View Program
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What's Included */}
      <section className="bg-[#232631] px-6 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8F27C]">
              What's Included
            </p>

            <h2 className="text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Keep moving <span className="text-[#B8F27C]">forward</span>
            </h2>

            <p className="mt-1 text-base leading-7 text-white/60 sm:text-lg">
              Get the support you need to make progress.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
            {programFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-[#26313D] bg-[#171A26] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B5E]/50 hover:bg-[#FF6B5E]/10 h-full flex flex-col justify-between"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B5E]/15">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="text-[#FF6B5E]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#A7A8AF]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Not Sure Where to Start? */}
      <section className="bg-[#4B4F5D] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-[#26313D] bg-[#232631] px-6 py-12 sm:px-10 lg:px-16"
          >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B8F27C]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#42C7C5]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              {/* Content */}
              <div className="max-w-2xl">
                {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8F27C]">
                  Not Sure Where to Start?
                </p> */}

                <h2 className="text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
                  Find your{" "}
                  <span className="text-[#B8F27C]">right program</span>
                </h2>

                <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
                  Take our assessment to find the right program for your goals.
                </p>
              </div>

              {/* Button */}
              <Link
                to="/assessments"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
              >
                Take Assessment
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
