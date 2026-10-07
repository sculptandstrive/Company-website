import React, { useState } from "react";
import {
  HeartPulse,
  Footprints,
  TrendingUp,
  Apple,
  RefreshCcw,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

/**
 * Sculpt & Strive — Assessments Mega Menu
 * Matches the same colors/tokens as ProgramsDropdown.
 */

type Assessment = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
};

const assessments: Assessment[] = [
  { icon: HeartPulse, title: "Fitness Assessment" },
  { icon: Footprints, title: "Movement Assessment" },
  { icon: TrendingUp, title: "Performance Assessment" },
  { icon: Apple, title: "Nutrition Assessment" },
  { icon: RefreshCcw, title: "Recovery Assessment" },
];

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#B8F27C]">
    {children}
  </p>
);

export default function AssessmentMegaMenu() {
  const [activeAssessment, setActiveAssessment] = useState(0);

  return (
    <div className="fixed left-1/2 top-[64px] z-50 -translate-x-1/2 after:absolute after:-top-4 after:left-0 after:h-4 after:w-full">
      <div
        className="
          mx-auto grid grid-cols-2 gap-8 p-6
      w-[1000px] max-w-[calc(100vw-48px)] min-w-[900px]
      rounded-2xl border border-[#26313D] bg-[#232631]
      shadow-[0_20px_60px_rgba(0,0,0,0.40)]
        "
      >
        {/* Column 1 — Assessments */}
        <div>
          <ColumnHeading>Assessments</ColumnHeading>

          <ul className="space-y-1">
            {assessments.map((assessment, i) => {
              const Icon = assessment.icon;
              const active = i === activeAssessment;

              return (
                <li key={assessment.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveAssessment(i)}
                    className={`
                      flex w-full items-center gap-3
                      rounded-lg border-l-[3px]
                      py-2.5 pl-3 pr-2 text-left
                      transition-colors duration-200 ease-in-out
                      ${
                        active
                          ? "bg-[#4B4F5D] border-l-[#FF6B5E]"
                          : "bg-transparent border-l-transparent"
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      className={`shrink-0 ${
                        active ? "text-[#FF6B5E]" : "text-[#4B4F5D]"
                      }`}
                    />

                    <span
                      className={`text-[15px] font-medium ${
                        active ? "text-white" : "text-[#E2E8F0]"
                      }`}
                    >
                      {assessment.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 2 — Assessment CTA */}
        <div className="border-l border-[#4B4F5D]/30 pl-8">
          <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#26313D] bg-[#171A26]">
            {/* CTA Icon Area */}
            <div className="flex h-[120px] items-center justify-center bg-[#2E3340]">
              <ClipboardCheck size={40} className="text-[#FF6B5E]" />
            </div>

            {/* CTA Content */}
            <div className="flex flex-1 flex-col p-4">
              <p className="text-[14px] font-semibold leading-relaxed text-white">
                Take a quick assessment and get a personalized starting point.
              </p>

              <Link
                to="/assessments/details"
                className="
    mt-auto flex h-[42px] w-full
    items-center justify-center gap-1.5
    rounded-md border border-[#FF6B5E]
    px-[18px] text-[14px] font-semibold
    text-[#FF6B5E]
    transition-colors duration-200
    hover:bg-[#FF6B5E] hover:text-white
  "
              >
                Start Your Assessment
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
