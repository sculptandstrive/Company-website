import { Link } from "react-router";
import React from "react";
import { motion } from "motion/react";
import { Star, Instagram, Facebook, Award, ArrowRight } from "lucide-react";
import trainerWoman from "../../assets/Namita.jpeg";
import trainerMan from "../../assets/Sagar.jpeg";
import heroVideo from "../../assets/hero-video.mp4";

// const heroImg = 'https://images.unsplash.com/photo-1758875570137-8691b7c55033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGd5bSUyMG1vdGl2YXRpb258ZW58MXx8fHwxNzc1ODc2NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080';
// const trainerWomanImg = 'https://images.unsplash.com/photo-1533560586907-f0bd1db0da77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHRyYWluZXJ8ZW58MXx8fHwxNzc1ODc2NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080';
// const trainerManImg = 'https://images.unsplash.com/photo-1708011108842-30966718105a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWFuJTIwY29hY2glMjBtYWxlJTIwdHJhaW5lciUyMG11c2N1bGFyfGVufDF8fHx8MTc3NTg3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080';

const certMeanings: Record<string, string> = {
  CPT: "Certified Personal Trainer",
  CNC: "Certified Nutrition Coach",
  WFS: "Women's Fitness Specialist",
  SFC: "Senior Fitness Coach",
  CES: "Corrective Exercise Specialist",
  PES: "Performance Enhancement Specialist",
  PBC: "Pre/Postnatal Body Coach",
  SFS: "Senior Fitness Specialist",
  WLS: "Weight Loss Specialist",
  YES: "Youth Exercise Specialist",
};

const trainers = [
  {
    name: "Sagar Lamba",
    role: "Head Coach & Performance Specialist",
    rating: 4.9,
    exp: "10 Years",
    certs: ["CPT", "CNC", "PBC", "SFS", "WLS", "YES"],
    img: trainerMan,
    color: "#B8F27C",
    bio: "Sagar brings a decade of elite coaching experience, specializing in performance enhancement, youth fitness, and weight transformation. His evidence-based approach combines cutting-edge training science with personalized attention to help every client exceed their goals.",
    specialties: [
      "Performance Training",
      "Youth Athletics",
      "Weight Loss",
      "Senior Fitness",
      "Prenatal Coaching",
    ],
    social: { ig: "#", fb: "#" },
  },
  {
    name: "Namita Lamba",
    role: "Lead Fitness Coach & Nutrition Specialist",
    rating: 4.8,
    exp: "6 Years",
    certs: ["CPT", "CNC", "WFS", "SFC", "CES", "PES"],
    img: trainerWoman,
    color: "#FF6B8A",
    bio: "Namita is a passionate wellness advocate with deep expertise in women's fitness, corrective exercise, and sports nutrition. Her holistic approach addresses not just physical training but hormonal health, bone density, and metabolic optimization for lasting transformation.",
    specialties: [
      "Women's Fitness",
      "Corrective Exercise",
      "Nutrition Coaching",
      "Senior Vitality",
      "Performance Enhancement",
    ],
    social: { ig: "#", fb: "#" },
  },
];

const highlights = [
  {
    icon: Award,
    label: "USA Certified",
    desc: "NASM & ISSA accredited certifications ensuring elite training standards",
  },
  {
    icon: Star,
    label: "Top Rated",
    desc: "Consistently rated 4.8+ by clients across all programs",
  },
  {
    icon: Award,
    label: "Specialized",
    desc: "Multiple specializations covering every fitness category",
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

export function Trainers() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* <img src={heroImg} alt="Trainers" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/70 to-[#171A26]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171A26]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:-translate-x-40 lg:-translate-y-5"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block -translate-y-3 text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4 ml-2">
              Our Expert Trainers
            </span>
            <h1 className="ttext-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6">
              CERTIFIED
              <br />
              <span className="text-[#B8F27C] inline-block mt-3">
                PROFESSIONALS
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Our certified professionals are here to guide you on your fitness
              journey with expertise, passion, and unwavering motivation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trainer Cards */}
      <section className="py-24 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {trainers.map((trainer, i) => (
              <FadeIn key={trainer.name} delay={i * 0.15}>
                <div className="group rounded-3xl overflow-hidden border border-white/8 bg-[#171A26] hover:border-white/20 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                  {/* Image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A26] via-[#171A26]/20 to-transparent" />

                    {/* Rating badge */}
                    <div className="absolute top-5 left-5">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#171A26]/60 backdrop-blur-md border border-white/15">
                        <Star
                          size={14}
                          className="text-[#FFD700] fill-[#FFD700]"
                        />
                        <span className="text-white font-bold text-sm">
                          {trainer.rating}
                        </span>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="absolute top-5 right-5 flex gap-2">
                      <a
                        href={trainer.social.ig}
                        className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-[#FF6B5E] hover:border-[#FF6B5E]/50 transition-all duration-300"
                      >
                        <Instagram size={16} />
                      </a>
                      <a
                        href={trainer.social.fb}
                        className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-[#FF6B5E] hover:border-[#FF6B5E]/50 transition-all duration-300"
                      >
                        <Facebook size={16} />
                      </a>
                    </div>

                    {/* Exp badge */}
                    <div className="absolute bottom-5 right-5">
                      <div
                        className="px-4 py-2 rounded-2xl text-xs font-bold text-white backdrop-blur-md border"
                        style={{
                          backgroundColor: `${trainer.color}30`,
                          borderColor: `${trainer.color}50`,
                        }}
                      >
                        {trainer.exp}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-2xl font-bold text-white mb-1"
                    >
                      {trainer.name}
                    </h3>
                    <p
                      className="text-sm mb-5"
                      style={{ color: trainer.color }}
                    >
                      {trainer.role}
                    </p>

                    {/* Bio */}
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {trainer.bio}
                    </p>

                    {/* Certifications */}
                    <div className="mb-6">
                      <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                        Certifications
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trainer.certs.map((cert) => (
                          <div
                            key={cert}
                            className="relative group/cert px-3 py-1.5 rounded-xl text-xs font-bold border cursor-default"
                            style={{
                              borderColor: `${trainer.color}40`,
                              color: trainer.color,
                              backgroundColor: `${trainer.color}12`,
                            }}
                          >
                            {cert}
                            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1a1a2e] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/cert:opacity-100 transition-opacity z-10 border border-white/10 pointer-events-none">
                              {certMeanings[cert]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                        Specialties
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-3 py-1 rounded-full text-xs text-white/50 bg-white/5 border border-white/8"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/get-plan"
                      className="flex items-center justify-between w-full px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${trainer.color}20, ${trainer.color}10)`,
                        borderColor: `${trainer.color}40`,
                        color: trainer.color,
                        border: `1px solid ${trainer.color}40`,
                      }}
                    >
                      Book a Session <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-24 bg-[#232631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
              WHY OUR <span className="text-[#B8F27C]">COACHES STAND OUT</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <FadeIn key={h.label} delay={i * 0.1}>
                <div className="text-center p-10 rounded-3xl bg-[#171A26] border border-white/8 hover:border-[#B8F27C]/20 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#B8F27C]/20 group-hover:bg-[#B8F27C]/25 flex items-center justify-center mx-auto mb-6">
                    <h.icon size={28} className="text-[#B8F27C]" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-xl font-bold text-white mb-3"
                  >
                    {h.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#171A26]/70">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
              TRAIN WITH <span className="text-[#B8F27C]">THE BEST</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Start your journey with a certified coach who truly understands
              your goals.
            </p>
            <Link
              to="/get-plan"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 min-h-11 rounded-[8px] bg-white text-[#FF6B5E] text-sm md:text-base font-bold transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8F27C]"
            >
              Get Your Plan <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
