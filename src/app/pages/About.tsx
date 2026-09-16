import { Link } from "react-router";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Users, Award, Clock, CheckCircle } from "lucide-react";
import trainerWomanImg from "../../assets/Namita.jpeg";
import trainerManImg from "../../assets/Sagar.jpeg";
import heroVideo from "../../assets/hero-video.mp4";
import yoga1 from "../../assets/yoga1.jpg";


const groupImg =
  "https://images.unsplash.com/photo-1731325632701-90d4e869a98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdGVhbSUyMGdyb3VwJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc3NTg3NjU2OXww&ixlib=rb-4.1.0&q=80&w=600";

const stats = [
  { value: "20+", label: "Active Members", icon: Users },
  { value: "2+", label: "Expert Trainers", icon: Award },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "USA Certified", icon: CheckCircle },
];

const certifications = {
  namita: ["CPT", "CNC", "WFS", "SFC", "CES", "PES"],
  sagar: ["CPT", "CNC", "PBC", "SFS", "WLS", "YES"],
};

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

export function About() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[75vh] min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* <img src={heroImg} alt="About" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/95 via-[#171A26]/70 to-[#171A26]/40" />
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
              About Us
            </span>
            <h1
              
              className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6"
            >
              SCULPT
              <br />
              <span className="text-[#B8F27C] inline-block mt-3">AND STRIVE</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              A results-driven fitness brand dedicated to helping individuals of
              all ages and fitness levels achieve their health goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="h-full flex flex-col justify-between text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#B8F27C]/8 to-transparent border border-[#B8F27C]/15 hover:border-[#B8F27C]/40 transition-all duration-500 group">
                  <stat.icon
                    size={28}
                    className="text-[#B8F27C] mx-auto mb-3 group-hover:scale-110 transition-transform"
                  />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 whitespace-nowrap">
  {stat.value}
</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#232631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeIn>
              <div>
                <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4 ml-1">
                  Our Story
                </span>
                <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.05]"
                  // className="text-5xl md:text-6xl text-white mb-6"
                >
                  FITNESS THAT{" "}
                  <span className="text-[#B8F27C]">MOVES WITH YOU</span>
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-5">
                  At Sculpt And Strive, fitness fits your life. Whether you are
                  working out at home, at the gym, or while traveling our
                  flexible programs make it easy to stay consistent anywhere.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-5">
                  We design programs that go beyond the physical focusing on
                  your strength, mobility, confidence, and overall well-being.
                  Led by USA certified coaches Namita Lamba and Sagar Lamba.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  From prenatal fitness to senior vitality, corrective exercise
                  to youth training, we have built a platform that meets every
                  human at every stage of life.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden h-72">
                  <img
                    src={groupImg}
                    alt="Group training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-72 mt-8">
                  <img
                    src={yoga1}
                    alt="yoga1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <FadeIn>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-[#B8F27C]/15 to-[#B8F27C]/5 border border-[#B8F27C]/20 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#B8F27C]/20 flex items-center justify-center mb-6">
                  <Target size={26} className="text-[#B8F27C]" />
                </div>
               <h3 className="text-4xl font-bold text-white mb-4">
  OUR MISSION
</h3>
                <p className="text-white/60 leading-relaxed">
                  Sculpt And Strive Fitness is dedicated to creating a space where
                  every member feels supported, challenged, and motivated to
                  reach their personal best. We believe that fitness is not a
                  destination, it is a lifelong commitment to becoming the best
                  version of yourself.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-[#42C7C5]/15 to-[#42C7C5]/5 border border-[#42C7C5]/20 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#42C7C5]/20 flex items-center justify-center mb-6">
                  <Eye size={26} className="text-[#42C7C5]" />
                </div>
               <h3 className="text-4xl font-bold text-white mb-4">
  OUR VISION
</h3>
                <p className="text-white/60 leading-relaxed">
                  At Sculpt And Strive, we believe true fitness is both an art
                  and a science deeply personal, purpose-driven, and guided by
                  data. We bring together evidence-based training, intelligent
                  nutrition, and mindful recovery to empower every individual to
                  move smarter, grow stronger, and thrive sustainably.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trainers Preview */}
      <section className="py-24 bg-[#171A26]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Leadership
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.05]"
              // className="text-6xl text-white"
            >
              LED BY{" "}
              <span className="text-[#B8F27C]">USA CERTIFIED COACHES</span>
            </h2>
             
  <p className="text-white/60 text-base max-w-xl mx-auto">
    Meet the certified experts behind every personalized training plan.
  </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Namita Lamba",
                role: "Lead Fitness Coach & Nutrition Specialist",
                exp: "6 Years",
                certs: certifications.namita,
                img: trainerWomanImg,
                color: "#FF6B8A",
              },
              {
                name: "Sagar Lamba",
                role: "Head Coach & Performance Specialist",
                exp: "10 Years",
                certs: certifications.sagar,
                img: trainerManImg,
                color: "#B8F27C",
              },
            ].map((trainer, i) => (
              <FadeIn key={trainer.name} delay={i * 0.15}>
                <div className="rounded-3xl overflow-hidden border border-white/8 bg-[#171A26] hover:border-white/15 transition-all duration-500 group">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A26] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-xs text-white font-semibold">
                        {trainer.exp}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      
                      className="text-xl font-bold text-white mb-1"
                    >
                      {trainer.name}
                    </h3>
                    <p
                      className="text-sm mb-5"
                      style={{ color: trainer.color }}
                    >
                      {trainer.role}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certs.map((cert) => (
                        <div
                          key={cert}
                          className="group/cert relative px-3 py-1.5 rounded-xl text-xs font-bold border"
                          style={{
                            borderColor: `${trainer.color}40`,
                            color: trainer.color,
                            backgroundColor: `${trainer.color}12`,
                          }}
                          title={certMeanings[cert]}
                        >
                          {cert}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a2e] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/cert:opacity-100 transition-opacity z-10 border border-white/10 pointer-events-none">
                            {certMeanings[cert]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              to="/trainers"
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-lg text-[#FF6B5E] font-semibold hover:bg-[#FF6B5E] hover:text-white hover:shadow-[0_8px_30px_rgba(255,107,94,0.35)] transition-all duration-300"
            >
              Meet Our Trainers <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform transition-200"/>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// Inline icon component
function Target({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function Eye({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
