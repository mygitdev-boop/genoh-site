"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative bg-white border border-line rounded-[18px] overflow-hidden flex flex-col hover:shadow-[0_24px_44px_-26px_rgba(11,18,12,0.4)]"
    >
      <div className="bg-[radial-gradient(60%_60%_at_50%_30%,#ffffff_0%,var(--color-paper-dim)_70%)] p-5.5 flex items-center justify-center overflow-hidden">
        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={280}
            height={280}
            className="max-h-55 w-auto mx-auto object-contain"
          />
        </motion.div>
      </div>
      <div className="p-5 pb-5.5 flex flex-col flex-1">
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-forest">
          {product.category}
        </span>
        <h3 className="text-lg mt-1.5 mb-1.5 text-ink">{product.name.replace("GENOH ", "")}</h3>
        <span className="inline-block font-mono text-xs bg-paper-dim border border-line text-forest px-2.5 py-0.5 rounded-lg mb-2.5 self-start">
          {product.netQty}
        </span>
        <p className="text-sm text-slate flex-1">{product.tagline}</p>
        <div className="flex gap-2 mt-3">
          <Button href={`/products/${product.slug}`} variant="dark" size="sm" className="flex-1">
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
