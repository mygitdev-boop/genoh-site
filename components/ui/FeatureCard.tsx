"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-white border border-line rounded-[18px] p-6.5 hover:shadow-[0_20px_40px_-24px_rgba(11,18,12,0.35)]"
    >
      <motion.div
        whileHover={{ rotate: -6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-13 h-13 rounded-[14px] bg-forest text-lime flex items-center justify-center mb-4.5"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg text-ink">{title}</h3>
      <p className="text-[14.5px] text-slate m-0">{children}</p>
    </motion.div>
  );
}
