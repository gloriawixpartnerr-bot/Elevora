"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Web" | "Game Dev" | "SaaS" | "Systems";
  desc: string;
  tags: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: "golem",
    title: "LanternGolem Migration",
    category: "Game Dev",
    desc: "Migrating complex game systems to stable foundations while preserving original mechanics.",
    tags: ["Minecraft Mods", "System Migration", "Optimization"],
    imageUrl: "https://picsum.photos/seed/golem/800/1000",
  },
  {
    id: "voice",
    title: "Wang Fei Voice System",
    category: "Systems",
    desc: "Seamless voice integration for game environments, moving from V1 to V2 infrastructure.",
    tags: ["Voice AI", "Backend Migration", "Real-time"],
    imageUrl: "https://picsum.photos/seed/voice/800/600",
  },
  {
    id: "ecosphere",
    title: "EcoSphere Dashboard",
    category: "SaaS",
    desc: "Real-time environmental monitoring platform for global enterprises.",
    tags: ["React", "D3.js", "Firebase"],
    imageUrl: "https://picsum.photos/seed/port1/800/1000",
  },
  {
    id: "nebula",
    title: "Nebula OS",
    category: "Web",
    desc: "Immersive 3D operating system for browser-based collaboration.",
    tags: ["Next.js", "Three.js"],
    imageUrl: "https://picsum.photos/seed/port3/800/600",
  },
  {
    id: "pixelquest",
    title: "Pixel Quest",
    category: "Game Dev",
    desc: "Massively multiplayer online adventure game built for the open web.",
    tags: ["Unity", "WebGL"],
    imageUrl: "https://picsum.photos/seed/port4/800/1000",
  },
  {
    id: "atlas",
    title: "Atlas CRM",
    category: "SaaS",
    desc: "Transforming customer relationships through predictive analytics.",
    tags: ["Node.js", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/port6/800/800",
  },
];

const categories = ["All", "Web", "Game Dev", "SaaS", "Systems"] as const;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main>
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
              >
                Selected <br /> Works
              </motion.h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how we&apos;ve helped startups and game developers build
                world-class digital experiences and stable system architectures.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 interactive ${
                      isActive
                        ? "bg-primary border-primary text-white"
                        : "bg-transparent border-border hover:border-primary/50 text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry / Columns grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all break-inside-avoid interactive"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                      <p className="font-bold text-sm uppercase tracking-widest text-primary mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-3xl font-black font-headline mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mb-6 text-sm line-clamp-2">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-1 border border-white/20 rounded-full font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors interactive">
                        View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

