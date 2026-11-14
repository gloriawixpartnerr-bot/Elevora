"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleHelp, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const projectTypes = [
  { id: "web", name: "Web Development", price: 5000 },
  { id: "mobile", name: "Mobile App", price: 8000 },
  { id: "saas", name: "SaaS Platform", price: 12000 },
  { id: "design", name: "UI/UX Design", price: 3000 },
];

const featuresList = [
  { id: "auth", name: "User Authentication", price: 1500 },
  { id: "payment", name: "Payment Integration", price: 2000 },
  { id: "ai", name: "AI Chatbot/Agent", price: 3500 },
  { id: "cloud", name: "Cloud Infrastructure", price: 2500 },
];

export default function ServicesPage() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalEstimate = selectedType.price + featuresTotal;

  return (
    <main>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
              >
                Digital <br /> Solutions <br /> Built for Scale
              </motion.h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From strategic discovery to high-performance development, we
                offer a comprehensive suite of services designed to accelerate
                your growth.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-video lg:aspect-square"
            >
              <Image
                src="https://picsum.photos/seed/services-concept/1000/800"
                alt="Premium digital solutions concept"
                data-ai-hint="digital agency"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Project Cost Calculator */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-12">
              {/* Step 1: Project Type */}
              <div>
                <h3 className="text-2xl font-black font-headline mb-6 flex items-center gap-2">
                  1. Select Project Type{" "}
                  <CircleHelp className="text-muted-foreground w-[18px] h-[18px]" />
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all interactive ${
                          isSelected
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50 text-foreground"
                        }`}
                      >
                        <span className="font-bold block mb-1">
                          {type.name}
                        </span>
                        <span className="text-xs uppercase tracking-widest opacity-60">
                          Starting at ${type.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Key Features */}
              <div>
                <h3 className="text-2xl font-black font-headline mb-6 flex items-center gap-2">
                  2. Add Key Features{" "}
                  <CircleHelp className="text-muted-foreground w-[18px] h-[18px]" />
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {featuresList.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all flex justify-between items-center interactive ${
                          isChecked
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50 text-foreground"
                        }`}
                      >
                        <div>
                          <span className="font-bold block mb-1">
                            {feat.name}
                          </span>
                          <span className="text-xs uppercase tracking-widest opacity-60">
                            +${feat.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Estimate Summary */}
            <div className="sticky top-32 bg-secondary text-white p-10 rounded-[2rem] border border-white/10 shadow-2xl">
              <h4 className="font-headline font-bold text-xl mb-8 uppercase tracking-widest text-primary">
                Estimate Summary
              </h4>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span>Base Project ({selectedType.name})</span>
                  <span className="font-bold">${selectedType.price}</span>
                </div>
                {selectedFeatures.map((featId) => {
                  const feat = featuresList.find((f) => f.id === featId);
                  if (!feat) return null;
                  return (
                    <div
                      key={feat.id}
                      className="flex justify-between items-center text-sm text-white/80"
                    >
                      <span>{feat.name}</span>
                      <span className="font-bold">+${feat.price}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pt-6 border-t border-white/10 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-white/60 text-sm">Estimated Total</span>
                  <span className="text-4xl font-black font-headline">
                    ${totalEstimate.toLocaleString()}
                  </span>
                </div>
              </div>
              <Link href="/contact" className="block w-full">
                <MagneticButton className="w-full justify-center">
                  Request Full Quote <ArrowRight size={18} />
                </MagneticButton>
              </Link>
              <p className="mt-6 text-[10px] text-white/40 text-center uppercase tracking-widest leading-relaxed">
                * This is a preliminary estimate. Final costs may vary based on
                detailed requirements and scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

