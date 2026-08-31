import React from "react";
import { ArrowUpRight } from "lucide-react";

const topics = [
  "Fitness",
  "Nutrition",
  "Holistic Health",
  "Sports Performance",
  "Movement Optimization",
  "Physical Recovery",
  "Business Building",
  "Strength & Conditioning",
  "Personal Trainer",
  "Nutrition Coach",
  "Health & Wellness Coach",
];

const programs = [
  { title: "Nutrition Coach", description: "Build expertise in nutrition coaching." },
  { title: "Nutrition & Fitness Coach", description: "Combine fitness and nutrition coaching." },
  { title: "Sports Nutrition", description: "Learn nutrition strategies for performance." },
  { title: "Nutrition & Wellness", description: "Support complete health and wellness." },
];

const ProgramsMegaMenu = () => {
  return (
    <div className="absolute left-1/2 top-full z-50 pt-3 w-[820px] max-w-[92vw] -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="grid grid-cols-[220px_minmax(0,1fr)]">
          {/* LEFT - TOPICS */}
          <div className="bg-[#4B4F5D] px-6 py-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8F27C]">
              Explore Programs
            </p>
            <div className="space-y-1">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="group flex w-full items-center justify-between border-b border-white/10 py-2 text-left text-sm text-white/80 transition-all duration-200 hover:pl-2 hover:text-[#B8F27C]"
                >
                  <span>{topic}</span>
                  <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - PROGRAM OPTIONS */}
          <div className="px-7 py-6">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B5E]">
                  Programs
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-[#171A26]">
                  Find Your Path
                </h2>
              </div>
              <a href="#" className="text-sm font-medium text-[#171A26] underline underline-offset-4 hover:text-[#FF6B5E]">
                View All Programs
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {programs.map((program) => (
                
                  <a href="#"
                  key={program.title}
                  className="group rounded-xl border border-[#171A26]/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8F27C] hover:shadow-lg"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B8F27C] text-sm font-bold text-[#171A26]">
                      →
                    </span>
                    <ArrowUpRight size={18} className="text-[#171A26]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF6B5E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171A26]">{program.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#171A26]/60">{program.description}</p>
                </a>
              ))}
            </div>

            
              <a href="#"
              className="group mt-4 flex items-center justify-between rounded-xl bg-[#171A26] px-5 py-4 transition-all duration-300 hover:bg-[#FF6B5E]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8F27C]">Advanced Education</p>
                <h3 className="mt-1 text-base font-semibold text-white">Advanced Nutrition Education</h3>
              </div>
              <ArrowUpRight size={22} className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsMegaMenu;