import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, X, Mail, MessageCircle } from "lucide-react";
import heroVideo from "../../assets/hero-video.mp4";

// const heroImg =
//   "https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwZGFyayUyMGRyYW1hdGljJTIwaGVybyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1ODc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

interface Plan {
  id: string;
  name: string;
  badge?: string;
  color: string;
  features: string[];
  category?: string;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    color: "#6366F1",
    features: [
      "Initial Fitness & Posture Assessment",
      "Monthly Workout Plan",
      "Weekly Progress Check-In",
      "Access to Workout Recordings",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",
    badge: "Popular",
    color: "#3B8F27C",
    features: [
      "Everything in Basic",
      "Nutrition Coaching (Bi-Weekly)",
      "2 Monthly Support Calls",
      "Posture & Mobility Guidance",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    color: "#FFD700",
    features: [
      "Everything in Standard",
      "Behaviour & Habit Coaching",
      "Weekly Coaching Calls",
      "Advanced Posture Analysis",
    ],
  },
  {
    id: "elite45",
    name: "Elite 1:1 Coaching",
    color: "#FF6B2C",
    category: "45 Minutes",
    features: [
      "1:1 Personal Training (45 mins)",
      "5 Days a Week (20 Sessions a Month)",
      "Supplement & Nutrition Guidance",
      "Unlimited Chat Support",
    ],
  },
  {
    id: "elite30",
    name: "Elite 1:1 Coaching",
    color: "#FF6B2C",
    category: "30 Minutes",
    features: [
      "1:1 Personal Training (30 mins)",
      "5 Days a Week (20 Sessions a Month)",
      "Nutrition & Supplement Guidance",
      "Weekly Progress Feedback",
    ],
  },
  {
    id: "senior",
    name: "Senior Fitness Group PT",
    color: "#FFD700",
    category: "30 Min • 3 Days/Week",
    features: [
      "Low-Impact Senior-Friendly Workouts",
      "3 Days/Week • 30-Minute Sessions",
      "12 Guided Sessions Per Month",
      "Balance, Mobility & Joint-Friendly Training",
    ],
  },
  {
    id: "youth",
    name: "Youth Fitness Group PT",
    color: "#22D3EE",
    category: "30 Min • 3 Days/Week",
    features: [
      "Fun & Engaging Youth Training",
      "3 Days/Week • 30-Minute Sessions",
      "12 Skill-Building Sessions Per Month",
      "Strength, Agility & Confidence Development",
    ],
  },
  {
    id: "prenatal",
    name: "Pre & Post Natal Group PT",
    color: "#FF6B8A",
    category: "30 Min • 3 Days/Week",
    features: [
      "Safe Pregnancy & Postpartum-Friendly Sessions",
      "3 Days/Week • 30-Minute Sessions",
      "12 Guided Sessions Per Month",
      "Core Strength, Mobility & Recovery",
    ],
  },
  {
    id: "menopause",
    name: "Menopausal Stage Fitness & Nutrition",
    color: "#A855F7",
    features: [
      "Initial Fitness & Posture Assessment",
      "Monthly Workout Plan (Hormone-Friendly)",
      "Weekly Progress Check-In",
      "Nutrition Guidance for Menopause Support",
    ],
  },
  {
    id: "posture",
    name: "Posture Corrective Exercise Solution",
    color: "#10B981",
    features: [
      "Initial Fitness & Posture Assessment",
      "Monthly Workout Plan",
      "Weekly Progress Check-In",
      "Access to Workout Recordings",
    ],
  },
  {
    id: "elite45-12",
    name: "Elite 1:1 Coaching",
    color: "#FF6B2C",
    category: "45 Min • 12 Sessions/3 Days a Week",
    features: [
      "1:1 Personal Training (45 mins)",
      "3 Days/Week – 12 Sessions per Month",
      "Nutrition & Supplement Guidance",
      "Weekly Progress Tracking",
    ],
  },
  {
    id: "elite30-12",
    name: "Elite 1:1 Coaching",
    color: "#FF6B2C",
    category: "30 Min • 12 Sessions",
    features: [
      "1:1 Personal Training (30 mins)",
      "Nutrition & Supplement Guidance",
      "3 Days/Week – 12 Sessions per Month",
      "Weekly Progress Feedback",
    ],
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

export function GetPlan() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedPlan(null);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* <img
            src={heroImg}
            alt="Get Plan"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A26]/97 via-[#171A26]/80 to-[#171A26]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171A26]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:-translate-x-30 lg:-translate-y-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#B8F27C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Coaching Plans
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-6">
              FITNESS
              <br />
              <span className="text-[#B8F27C] inline-block mt-3">
                COACHING PLANS
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Choose the coaching plan that fits your lifestyle, goals, and
              schedule. Every plan is backed by USA certified trainers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Plans Grid */}
      <section className="py-24 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <FadeIn key={plan.id} delay={i * 0.05}>
                <div
                  className={`relative group rounded-3xl border transition-all duration-500 bg-[#232631] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden ${
                    plan.badge
                      ? "border-[#B8F27C]/40 shadow-[0_0_30px_rgba(255,107,44,0.15)]"
                      : "border-white/8 hover:border-white/20"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <div className="px-5 py-1.5 bg-gradient-to-r from-[#B8F27C] to-[#B8F27C] rounded-b-2xl text-[#171A26] text-xs font-bold">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="p-7 pt-8">
                    {plan.category && (
                      <div
                        className="text-xs font-semibold mb-2 px-2 py-1 rounded-lg inline-block"
                        style={{
                          color: plan.color,
                          backgroundColor: `${plan.color}15`,
                        }}
                      >
                        {plan.category}
                      </div>
                    )}
                    <h3
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="text-xl font-bold text-white mb-5"
                    >
                      {plan.name}
                    </h3>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm text-white/65"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: plan.color }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className="w-full py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 border"
                      style={{
                        backgroundColor: `${plan.color}15`,
                        borderColor: `${plan.color}40`,
                        color: plan.color,
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = `${plan.color}30`;
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = plan.color;
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = `${plan.color}15`;
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.borderColor = `${plan.color}40`;
                      }}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#232631]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.05]"
            >
              HAVE QUESTIONS? <span className="text-[#B8F27C]">REACH OUT</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="mailto:info@sculptandstrive.com"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B8F27C]/50 hover:bg-[#B8F27C]/10 transition-all duration-300"
              >
                <Mail size={18} className="text-[#B8F27C]" />
                <span className="text-white/70 text-sm">
                  info@sculptandstrive.com
                </span>
              </a>
              <a
                href="tel:+917302113369"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B8F27C]/50 hover:bg-[#B8F27C]/10 transition-all duration-300"
              >
                <MessageCircle size={18} className="text-[#B8F27C]" />
                <span className="text-white/70 text-sm">+91 7302113369</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0f1015] border border-white/10 rounded-3xl p-8 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-[#10B981]" />
                  </motion.div>
                  <h3
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-2xl font-bold text-white mb-3"
                  >
                    Enquiry Sent!
                  </h3>
                  <p className="text-white/50 text-sm">
                    We'll reach out to you shortly to discuss your plan.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-7">
                    <div>
                      <h3
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-xl font-bold text-white mb-1"
                      >
                        Enquire: {selectedPlan.name}
                      </h3>
                      {selectedPlan.category && (
                        <div
                          className="text-xs"
                          style={{ color: selectedPlan.color }}
                        >
                          {selectedPlan.category}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedPlan(null)}
                      className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      {
                        key: "name",
                        label: "Full Name",
                        type: "text",
                        placeholder: "Your full name",
                      },
                      {
                        key: "email",
                        label: "Email Address",
                        type: "email",
                        placeholder: "your@email.com",
                      },
                      {
                        key: "phone",
                        label: "Phone Number",
                        type: "tel",
                        placeholder: "+91 XXXXX XXXXX",
                      },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wider uppercase">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [field.key]: e.target.value,
                            }))
                          }
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF6B2C]/60 focus:bg-[#FF6B2C]/5 transition-all"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wider uppercase">
                        Message (Optional)
                      </label>
                      <textarea
                        placeholder="Tell us about your goals..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF6B2C]/60 focus:bg-[#FF6B2C]/5 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B2C] to-[#FF4500] shadow-[0_4px_20px_rgba(255,107,44,0.4)] hover:shadow-[0_4px_30px_rgba(255,107,44,0.6)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
