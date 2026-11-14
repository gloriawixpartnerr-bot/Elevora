"use client";

import { motion } from "framer-motion";
import { Search, Map, Palette, Code, Rocket } from "lucide-react";

interface Step {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgMobile: string;
  reverse?: boolean;
}

const steps: Step[] = [
  {
    id: "discovery",
    title: "Discovery",
    desc: "We dive deep into your business, goals, and user needs to define the project foundation.",
    icon: <Search className="w-8 h-8" />,
    bgMobile: "bg-primary",
    reverse: false,
  },
  {
    id: "strategy",
    title: "Strategy",
    desc: "Developing a technical roadmap and product architecture optimized for growth and scale.",
    icon: <Map className="w-8 h-8" />,
    bgMobile: "bg-accent",
    reverse: true,
  },
  {
    id: "design",
    title: "Design",
    desc: "Crafting a world-class UI/UX that balances beauty with functional excellence.",
    icon: <Palette className="w-8 h-8" />,
    bgMobile: "bg-secondary",
    reverse: false,
  },
  {
    id: "development",
    title: "Development",
    desc: "Our engineers build your product using high-performance, future-proof technologies.",
    icon: <Code className="w-8 h-8" />,
    bgMobile: "bg-primary",
    reverse: true,
  },
  {
    id: "launch",
    title: "Launch",
    desc: "Deployment, optimization, and scaling. We ensure your product hits the ground running.",
    icon: <Rocket className="w-8 h-8" />,
    bgMobile: "bg-accent",
    reverse: false,
  },
];

export default function ProcessPage() {
  return (
    <main>
      <div className="pt-32 pb-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              The Prospira Way
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              How We Build <br /> Excellence
            </motion.h1>
          </div>

          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border hidden lg:block" />

            <div className="space-y-24 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Text Description Box */}
                  <div className="flex-1 w-full text-center lg:text-left">
                    <div
                      className={`inline-flex items-center justify-center p-6 rounded-3xl ${step.bgMobile} text-white mb-6 lg:hidden shadow-xl`}
                    >
                      {step.icon}
                    </div>
                    <h2 className="text-4xl font-black font-headline mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.desc}
                    </p>
                  </div>

                  {/* Desktop Center Circle */}
                  <div className="hidden lg:flex w-24 h-24 rounded-full bg-background border-4 border-primary z-20 items-center justify-center shadow-xl group hover:scale-110 transition-transform">
                    <div className="text-primary group-hover:rotate-12 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty Spacer Column on Desktop */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

