import React, { useState } from "react";
import {
  Dumbbell,
  Trophy,
  HeartPulse,
  Activity,
  RefreshCcw,
  Briefcase,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

type Category = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const programCategories: Category[] = [
  { icon: Dumbbell, title: "Fitness", desc: "Build strength and endurance" },
  {
    icon: Trophy,
    title: "Sports Performance",
    desc: "Enhance athletic performance",
  },
  {
    icon: RefreshCcw,
    title: "Physical Recovery",
    desc: "Recover faster and move better",
  },
  {
    icon: HeartPulse,
    title: "Holistic Health",
    desc: "Mind, body and lifestyle balance",
  },
  {
    icon: Activity,
    title: "Movement Optimization",
    desc: "Improve mobility and flexibility",
  },
  {
    icon: Briefcase,
    title: "Business Building",
    desc: "Grow your fitness business",
  },
];

const popularPrograms = [
  {
    title: "Strength Builder",
    duration: "8 Weeks Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Fat Loss Accelerator",
    duration: "6 Weeks Program",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Athletic Performance",
    duration: "12 Weeks Program",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=200&auto=format&fit=crop",
  },
];

const whatsIncluded = [
  "Expert Coaching",
  "Personalized Plans",
  "Video Workouts",
  "Progress Tracking",
  "Community Support",
];

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#B8F27C]">
    {children}
  </p>
);


interface ProgramsMegaMenuProps {
  mobile?: boolean;
}
export default function ProgramsDropdown({ mobile = false }: ProgramsMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    // Outer positioning wrapper — spec §2: 56px top offset.
    // Requires the trigger/nav item that renders this to have `position: relative`.
    // <div className="fixed left-1/2 top-[64px] z-50 -translate-x-1/2 after:absolute after:-top-4 after:left-0 after:h-4 after:w-full">
    <div className={
      mobile
      ? "w-full"
      : "fixed left-1/2 top-[64px] z-50 -translate-x-1/2 after:absolute after:-top-4 after:left-0 after:h-4 after:w-full"}>
      
      <div
  className={
    mobile
      ? "w-full rounded-2xl border border-[#26313D] bg-[#232631] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.40)]"
      : "mx-auto grid grid-cols-3 gap-8 p-6 w-[1000px] max-w-[calc(100vw-48px)] min-w-[900px] rounded-2xl border border-[#26313D] bg-[#232631] shadow-[0_20px_60px_rgba(0,0,0,0.40)]"
  }
>
      {/* <div
        className="
          mx-auto grid grid-cols-3 gap-8 p-6
          w-[1000px] max-w-[calc(100vw-48px)] min-w-[900px]
          rounded-2xl border border-[#26313D] bg-[#232631]
          shadow-[0_20px_60px_rgba(0,0,0,0.40)]
        "
      > */}
        {/* Column 1 — Program Categories */}
        <div>
          <ColumnHeading>Program Categories</ColumnHeading>
          <ul className="space-y-1">
            {programCategories.map((cat, i) => {
              const Icon = cat.icon;
              const active = i === activeCategory;
              return (
                <li key={cat.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveCategory(i)}
                    className={`
                      flex w-full items-start gap-3 rounded-lg py-2.5 pl-3 pr-2 text-left
                      border-l-[3px] transition-colors duration-200 ease-in-out
                      ${active ? "bg-[#4B4F5D] border-l-[#FF6B5E]" : "bg-transparent border-l-transparent"}
                    `}
                  >
                    <Icon
                      size={16}
                      className={`mt-0.5 shrink-0 ${active ? "text-[#FF6B5E]" : "text-[#4B4F5D]"}`}
                    />
                    <span>
                      <span
                        className={`block text-[15px] font-medium ${
                          active ? "text-white" : "text-[#E2E8F0]"
                        }`}
                      >
                        {cat.title}
                      </span>
                      <span className="block text-[12.5px] text-[#A7A8AF]">
                        {cat.desc}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          
        </div>

        {/* Column 2 — Popular Programs */}
        <div className="border-l border-[#4B4F5D]/30 pl-8">
          <ColumnHeading>Popular Programs</ColumnHeading>
          <ul className="space-y-2">
            {popularPrograms.map((p) => (
              <li key={p.title}>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg bg-[#171A26] p-2 transition-colors duration-200 ease-in-out hover:brightness-110"
                >
                  <img
                    src={p.image}
                    alt=""
                    className="h-11 w-11 shrink-0 rounded-md object-cover"
                  />
                  <span>
                    <span className="block text-[15px] font-medium text-white">
                      {p.title}
                    </span>
                    <span className="block text-[12.5px] text-[#64748B]">
                      {p.duration}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/programs/all-program"
      
            className="mt-3 flex h-[42px] w-full items-center justify-center gap-2 rounded-lg border border-[#52606D] px-[18px] text-[14px] font-semibold text-white transition-all duration-200 ease-in-out hover:border-[#FF4D4F] hover:bg-[#FF4D4F] active:shadow-[0_0_20px_rgba(255,77,79,0.45)]"
          >
            <PlayCircle
              size={16}
              className="text-[#FF4D4F] transition-colors duration-200 group-hover:text-white"
            />
            Explore All Programs
          </Link>
          
        </div>

        {/* Column 3 — What's Included + Assessment CTA */}
        <div className="border-l border-[#4B4F5D]/30 pl-8">
          <ColumnHeading>What&rsquo;s Included</ColumnHeading>
          <ul className="space-y-2.5">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-[#FF6B5E]" />
                <span className="text-[14px] font-medium text-[#E2E8F0]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-[10px] bg-[#171A26] p-4">
            <p className="text-[14px] font-semibold text-white">
              Not sure where to start?
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-[#8A96A3]">
              Take our quick assessment and we&rsquo;ll guide you to the right
              program.
            </p>
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#FF6B5E] px-3 py-2 text-[14px] font-semibold text-[#FF6B5E] transition-colors duration-200 ease-in-out hover:bg-[#FF6B5E] hover:text-white"
            >
              Take Assessment <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
