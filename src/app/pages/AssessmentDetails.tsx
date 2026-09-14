import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { Link } from 'react-router'


const assessments = [
  {
    title: "Fitness Assessment",
    description:
      "Understand your current fitness level and identify areas that can improve.",
  },
  {
    title: "Movement Assessment",
    description:
      "Evaluate your mobility, movement patterns, and overall movement quality.",
  },
  {
    title: "Performance Assessment",
    description:
      "Discover your strengths and identify opportunities to improve your performance.",
  },
  {
    title: "Nutrition Assessment",
    description:
      "Understand your current nutrition habits and identify areas for improvement.",
  },
  {
    title: "Recovery Assessment",
    description:
      "Learn how your sleep, rest, and recovery habits support your progress.",
  },
];

const assessmentSteps = [
  {
    title: "Choose an Assessment",
    description:
      "Select the area you want to understand better, from fitness and movement to nutrition and recovery.",
  },
  {
    title: "Complete the Assessment",
    description:
      "Answer a few simple questions about your current habits, goals, and needs.",
  },
  {
    title: "Understand Your Results",
    description:
      "Use your results to identify your strengths and discover where to focus next.",
  },
];

export const AssessmentDetails = () => {
    
  return (
    <div>
        <section className="relative h-[70vh] min-h-[680px] flex items-center overflow-hidden bg-[#171A26]">
  {/* Background */}
  <div className="absolute inset-0">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/70 to-[#171A26]/30" />

    {/* Bottom fade */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171A26]" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 pt-2">
    <motion.div
      className="max-w-[700px] text-left md:ml-29"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Small Label */}
      <span className="mb-4 ml-1 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#B8F27C]">
        Fitness Assessment
      </span>

      {/* Heading */}
      <h1 className="mb-7 text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
        FIND YOUR
        <br />
        <span className="mt-3 inline-block bg-gradient-to-r from-[#B8F27C] to-[#42C7C5] bg-clip-text text-transparent">
          RIGHT PATH
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
        Discover your fitness level, goals, and needs through our comprehensive
        assessment. Get personalized insights and take the right first step
        toward your transformation.
      </p>

      {/* Button */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/assessments"
          className="group inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
        >
          Start Your Assessment
          <ArrowRight
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  </div>
</section>


<section className="bg-[#232631] px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mb-10 max-w-2xl mx-auto text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B5E]">
        Explore Assessments
      </p>

      <h2 className="mt-3 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
        Find the right{" "}
        <span className="text-[#B8F27C]">
          starting point
        </span>
      </h2>

      <p className="mt-4 text-base leading-7 text-[#A7A8AF] sm:text-lg">
        Choose an assessment to better understand your current strengths,
        needs, and opportunities for progress.
      </p>
    </motion.div>

    {/* Assessment list */}
    <div className="overflow-hidden rounded-3xl border border-[#26313D]">
      {assessments.map((assessment, index) => (
        <motion.div
          key={assessment.title}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group flex items-center gap-6 border-b border-[#26313D] bg-[#171A26] px-6 py-7 transition-colors duration-300 last:border-b-0 hover:bg-[#232631] sm:px-8 sm:py-8 lg:px-10"
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#B8F27C] sm:text-2xl">
              {assessment.title}
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#A7A8AF] sm:text-base">
              {assessment.description}
            </p>
          </div>

          <ArrowRight
            size={22}
            className="shrink-0 text-[#52606D] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B8F27C]"
          />
        </motion.div>
      ))}
    </div>

  </div>
</section>

<section className="bg-[#4B4F5D] px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mb-14 max-w-2xl mx-auto text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B5E]">
        How It Works
      </p>

      <h2 className="mt-3 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
        A simple way to{" "}
        <span className="text-[#B8F27C]">
          get started.
        </span>
      </h2>

      <p className="mt-4 text-base leading-7 text-[#A7A8AF] sm:text-lg">
        Get a clearer picture of where you are and what you can work on next.
      </p>
    </motion.div>

    {/* Steps */}
    <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
      {assessmentSteps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative lg:px-8 first:lg:pl-0 last:lg:pr-0"
        >
          {/* Connecting line */}
          {index < assessmentSteps.length - 1 && (
            <div className="absolute right-0 top-6 hidden h-px w-8 bg-[#26313D] lg:block" />
          )}

          {/* Step indicator */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B8F27C] text-sm font-bold text-[#B8F27C]">
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="mt-7 text-2xl font-bold text-white">
            {step.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#A7A8AF] sm:text-base">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
    </div>
  )
}

