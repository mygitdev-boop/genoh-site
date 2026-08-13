"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-[920px]:max-w-90 max-[920px]:mx-auto"
    >
      <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,18,12,0.35)] border border-paper/12">
        <Image
          src="/images/hero-bottle.jpg"
          alt="GENOH Floor Cleaner bottle on a marble floor in a well-lit living room"
          width={900}
          height={1000}
          priority
          className="w-full h-full object-cover aspect-[900/1000]"
        />
      </div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4.5 -bottom-4.5 max-[920px]:left-3 max-[920px]:-bottom-6 bg-paper text-ink rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(11,18,12,0.35)] w-57.5 max-[920px]:w-50"
      >
        <div className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-slate">
          Dilution ratio
        </div>
        <div className="font-mono text-[22px] font-semibold text-forest my-1">2 capfuls : 5L</div>
        <div className="text-xs text-slate">≈ 40ml concentrate per 5 litres of water</div>
      </motion.div>
    </motion.div>
  );
}
