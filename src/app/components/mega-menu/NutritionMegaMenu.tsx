import React from "react";
import {
  Apple,
  Scale,
  Dumbbell,
  Trophy,
  Utensils,
  Pill,
  BookOpen,
  Salad,
  Calculator,
  ArrowRight,
  Target,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "react-router";

type NutritionItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
};

const nutritionPlans: NutritionItem[] = [
  {
    icon: Target,
    title: "Personalized Nutrition",
  },
  {
    icon: Scale,
    title: "Weight Loss Nutrition",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building Nutrition",
  },
  {
    icon: Trophy,
    title: "Sports Nutrition",
  },
  {
    icon: Utensils,
    title: "Meal Planning",
  },
  {
    icon: Pill,
    title: "Supplement Guidance",
  },
];

const nutritionResources: NutritionItem[] = [
  {
    icon: BookOpen,
    title: "Nutrition Guides",
  },
  {
    icon: Salad,
    title: "Recipes",
  },
  {
    icon: Utensils,
    title: "Meal Plans",
  },
  {
    icon: Calculator,
    title: "Nutrition Calculator",
  },
];

const getStartedItems: NutritionItem[] = [
  {
    icon: Target,
    title: "Find Your Nutrition Plan",
  },
  {
    icon: Calculator,
    title: "Calculate Your Calories",
  },
  {
    icon: Utensils,
    title: "Explore Meal Plans",
  },
  {
    icon: BookOpen,
    title: "Read Nutrition Guides",
  },
];

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#B8F27C]">
    {children}
  </p>
);

export default function NutritionDropdown() {
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
        {/* Column 1 — Nutrition Plans */}
        <div>
          <ColumnHeading>Nutrition Plans</ColumnHeading>

          <ul className="space-y-1">
            {nutritionPlans.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.title}>
                  <button
                    type="button"
                    className="
              group flex w-full items-center gap-3
              rounded-lg px-3 py-3 text-left
              transition-colors duration-200
              hover:bg-[#4B4F5D]
            "
                  >
                    <Icon
                      size={17}
                      className="
                shrink-0 text-[#A7A8AF]
                transition-colors duration-200
                group-hover:text-[#FF6B5E]
              "
                    />

                    <span
                      className="
                text-[15px] font-medium text-[#E2E8F0]
                transition-colors duration-200
                group-hover:text-white
              "
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 2 — Resources */}
        <div className="border-l border-[#4B4F5D] pl-8">
          <ColumnHeading>Resources</ColumnHeading>

          <ul className="space-y-1">
            {nutritionResources.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.title}>
                  <button
                    type="button"
                    className="
              group flex w-full items-center gap-3
              rounded-lg px-3 py-3 text-left
              transition-colors duration-200
              hover:bg-[#4B4F5D]
            "
                  >
                    <Icon
                      size={17}
                      className="
                shrink-0 text-[#A7A8AF]
                transition-colors duration-200
                group-hover:text-[#FF6B5E]
              "
                    />

                    <span
                      className="
                text-[15px] font-medium text-[#E2E8F0]
                transition-colors duration-200
                group-hover:text-white
              "
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          {/* CTA Card */}
          <div className="mt-5 rounded-[10px] bg-[#171A26] p-4">
            <p className="text-[14px] font-semibold text-white">
              Ready to improve your nutrition?
            </p>

            <p className="mt-1 text-[12px] leading-relaxed text-[#A7A8AF]">
              Explore nutrition plans designed to support your health and
              fitness goals.
            </p>

            <Link
              to="/nutrition/explore"
              className="
    mt-5 inline-flex items-center gap-1.5
    rounded-lg border border-[#FF6B5E]
    px-3 py-2
    text-[14px] font-semibold text-[#FF6B5E]
    transition-colors duration-200
    hover:bg-[#FF6B5E] hover:text-white
  "
            >
              Explore Nutrition
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
