import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const topics = [
  "Fitness",
  "Holistic Health",
  "Sports Performance",
  "Movement Optimization",
  "Physical Recovery",
  "Business Building",
];

const ProgramsMegaMenu = () => {
  return (
    <div className="absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2">
      <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 border border-[#171A26]/10">
        <div className="grid grid-cols-[max-content_max-content] gap-x-6 gap-y-1 p-4">
          {topics.map((topic) => (
            <a
              href="#"
              key={topic}
              className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#171A26]/80 transition-colors duration-150 whitespace-nowrap hover:bg-sculpt-lime hover:text-[#171A26]"
            >
              <ArrowRight
                size={14}
                className="text-[#171A26]/40 transition-colors duration-150 group-hover:text-[#171A26]"
              />
              <span>{topic}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-[#171A26]/10 px-3 py-2.5">
          <Link
            to="/nutrition"
            className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-[#FF6B5E] transition-colors duration-150 hover:bg-sculpt-lime hover:text-[#171A26]"
          >
            <ArrowRight
              size={14}
              className="text-[#FF6B5E] transition-colors duration-150 group-hover:text-[#171A26]"
            />
            <span>View all programs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramsMegaMenu;
