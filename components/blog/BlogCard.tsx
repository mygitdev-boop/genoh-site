"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-white border border-line rounded-[18px] overflow-hidden flex flex-col hover:shadow-[0_24px_44px_-26px_rgba(11,18,12,0.4)]"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1 no-underline text-inherit">
        <div className="aspect-[16/10] overflow-hidden bg-paper-dim">
          <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.35 }} className="w-full h-full">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              width={640}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="p-5.5 flex flex-col flex-1">
          <span className="font-mono text-[11.5px] text-slate tracking-[0.04em] uppercase mb-2.5">
            {post.category} &middot; {post.readTime}
          </span>
          <h3 className="text-lg mb-2 text-ink leading-tight">{post.title}</h3>
          <p className="text-sm text-slate flex-1 mb-3.5">{post.description}</p>
          <span className="font-mono text-[13px] text-forest font-semibold inline-flex items-center gap-1.5">
            Read Article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
