"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, site, waLink } from "@/lib/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-ink sticky top-0 z-50 border-b border-paper/8">
      <div
        className={`container flex items-center justify-between transition-[padding] duration-300 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="GENOH home">
          <motion.div animate={{ scale: scrolled ? 0.86 : 1 }} transition={{ duration: 0.3 }}>
            <Image
              src={site.logo}
              alt="GENOH logo"
              width={56}
              height={56}
              className="rounded-xl object-cover"
            />
          </motion.div>
        </Link>

        <nav
          aria-label="Primary"
          className="max-[920px]:hidden flex items-center gap-8.5"
        >
          {primaryNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 font-medium text-[15px] after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:h-0.5 after:bg-lime after:transition-[width] after:duration-200 ${
                  active
                    ? "text-lime after:w-full"
                    : "text-paper-dim hover:text-paper after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href={waLink("Hi GENOH, I'd like to place an order.")}
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="max-[920px]:hidden inline-flex items-center gap-2 rounded-full bg-lime text-ink font-semibold text-sm px-4.5 py-2.5 shadow-[0_10px_24px_-10px_rgba(142,210,47,0.7)] hover:bg-lime-deep transition-colors"
          >
            Order on WhatsApp
          </motion.a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="min-[921px]:hidden relative z-10 bg-transparent border-none text-paper w-7 h-7 cursor-pointer flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
              className="block w-6 h-0.5 bg-paper rounded-full"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block w-6 h-0.5 bg-paper rounded-full"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
              className="block w-6 h-0.5 bg-paper rounded-full"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Primary mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="min-[921px]:hidden overflow-hidden bg-ink border-t border-paper/8"
          >
            {primaryNav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block w-full py-3.5 px-6 border-t border-paper/6 first:border-t-0 font-medium text-[15px] ${
                    active ? "text-lime" : "text-paper-dim"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
