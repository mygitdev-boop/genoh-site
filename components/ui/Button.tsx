"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);

type Variant = "primary" | "outline" | "dark" | "yellow";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-ink shadow-[0_10px_24px_-10px_rgba(142,210,47,0.7)] hover:bg-lime-deep",
  outline: "bg-transparent text-paper border-paper/40 hover:border-paper hover:bg-paper/8",
  dark: "bg-ink text-paper hover:bg-forest-soft",
  yellow: "bg-cap-yellow text-ink hover:brightness-95",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: "md" | "sm";
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  external,
  className = "",
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full border-2 border-transparent whitespace-nowrap transition-[box-shadow,background,color] duration-200 ${
    size === "sm" ? "px-4.5 py-2.5 text-sm" : "px-6.5 py-3.5 text-[15.5px]"
  } ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { y: -3, scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionProps}>
      {children}
    </MotionLink>
  );
}
