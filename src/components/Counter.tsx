"use client";

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function Counter({ value, label, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black font-headline text-primary mb-2 flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
        {label}
      </p>
    </div>
  );
}

