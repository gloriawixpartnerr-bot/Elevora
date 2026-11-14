"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Send, Check } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleAiAdvisor = (e: FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    setAiLoading(true);
    setAiResponse(null);

    setTimeout(() => {
      setAiLoading(false);
      setAiResponse(
        `Based on your concept, we recommend a Next.js 14 frontend coupled with Node/FastAPI microservices, Tailwind CSS for design systems, and PostgreSQL + Redis for real-time state. Estimated MVP timeframe: 6-8 weeks.`
      );
    }, 1200);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <main>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
              >
                Let&apos;s Build <br /> Your Next <br /> Digital Product
              </motion.h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Ready to take your project to the next level? Fill out the form
                or use our AI Project Advisor for immediate technical
                recommendations.
              </p>

              <div className="space-y-8">
                {/* AI Project Advisor */}
                <div className="p-8 bg-secondary text-white rounded-[2rem] border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-black font-headline mb-4 flex items-center gap-2 relative z-10">
                    <BrainCircuit className="text-primary w-6 h-6" /> AI Project
                    Advisor
                  </h3>
                  <p className="text-white/60 mb-6 relative z-10">
                    Input your project idea below to get instant AI-powered tech
                    stack and roadmap recommendations.
                  </p>
                  <form
                    onSubmit={handleAiAdvisor}
                    className="space-y-4 relative z-10"
                  >
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="E.g. I want to build a real-time SaaS platform for real estate agents..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 min-h-[120px] focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/40 interactive"
                    />
                    <button
                      type="submit"
                      disabled={aiLoading || !aiPrompt.trim()}
                      className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 interactive"
                    >
                      <Sparkles size={18} />{" "}
                      {aiLoading
                        ? "Analyzing Architecture..."
                        : "Get AI Recommendations"}
                    </button>
                  </form>
                  {aiResponse && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-xl bg-white/10 border border-white/15 text-sm text-white/90 leading-relaxed relative z-10"
                    >
                      <span className="font-bold text-accent block mb-1">
                        Architecture Blueprint:
                      </span>
                      {aiResponse}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-[#FDF6E3] border border-border p-10 rounded-[2rem] shadow-xl"
              >
                {formSubmitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center">
                      <Check size={32} />
                    </div>
                    <h3 className="text-3xl font-black font-headline text-foreground">
                      Inquiry Received
                    </h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      Thank you for contacting Prospira. Our engineering team
                      will review your project details and get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                        });
                      }}
                      className="text-primary font-bold hover:underline text-sm pt-4 block mx-auto interactive"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                          Your Name
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors interactive"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                          Work Email
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors interactive"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors interactive"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                        Tell us about your project
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-white border border-border rounded-xl p-4 min-h-[150px] focus:outline-none focus:border-primary transition-colors interactive"
                        placeholder="Briefly describe your goals, timeline, and any specific needs..."
                      />
                    </div>

                    <MagneticButton type="submit" className="w-full">
                      Send Inquiry <Send size={18} />
                    </MagneticButton>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

