"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CategoryTile({
  href,
  image,
  alt,
  label,
  cta,
}: {
  href: string;
  image: string;
  alt: string;
  label: string;
  cta: string;
}) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Link
        href={href}
        className="relative block rounded-[18px] overflow-hidden aspect-[4/3] flex items-end p-5 bg-forest"
      >
        <Image src={image} alt={alt} fill className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/85 to-transparent" />
        <span className="relative z-10 text-paper font-display text-[19px]">
          {label}
          <span className="block text-lime font-mono text-[11.5px] mt-0.5">{cta} &rarr;</span>
        </span>
      </Link>
    </motion.div>
  );
}
