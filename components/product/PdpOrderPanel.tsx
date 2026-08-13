"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { waLink } from "@/lib/data/site";
import type { ProductVariant } from "@/lib/data/products";

export function PdpOrderPanel({
  productName,
  variants,
  defaultVariant,
}: {
  productName: string;
  variants?: ProductVariant[];
  defaultVariant?: string;
}) {
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState(defaultVariant ?? "Standard");

  const href = useMemo(() => {
    const message =
      `Hi, I'm interested in placing a wholesale order for:\n\n` +
      `Product: ${productName}\n` +
      `Variant: ${variant}\n` +
      `Quantity: ${qty}\n\n` +
      `Please share pricing and availability.`;
    return waLink(message);
  }, [productName, variant, qty]);

  return (
    <div className="flex flex-col items-stretch">
      {variants && variants.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-4">
          {variants.map((v) => (
            <button
              key={v.value}
              type="button"
              onClick={() => setVariant(v.value)}
              className={`font-mono text-[13px] px-4 py-2 rounded-full border-[1.5px] font-semibold transition-colors ${
                variant === v.value
                  ? "bg-ink border-ink text-paper"
                  : "bg-white border-line text-charcoal hover:border-lime-deep"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3.5 flex-wrap mb-3.5">
        <div className="inline-flex items-center border-[1.5px] border-line rounded-full overflow-hidden bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-lg font-semibold text-ink hover:bg-paper-dim"
          >
            &minus;
          </button>
          <span className="w-11 text-center font-mono text-[15px] font-semibold text-ink">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-lg font-semibold text-ink hover:bg-paper-dim"
          >
            &plus;
          </button>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 font-semibold rounded-full bg-lime text-ink px-6.5 py-3.5 text-[15.5px] shadow-[0_10px_24px_-10px_rgba(142,210,47,0.7)] hover:bg-lime-deep transition-[transform,background] hover:-translate-y-0.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.2-8.24 8.2z" />
          </svg>
          Order via WhatsApp
        </a>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Link
          href="/#bulk-enquiry"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-full border-[1.5px] border-line text-ink px-6.5 py-3.5 text-[15.5px] hover:bg-paper-dim transition-colors"
        >
          Get Bulk Pricing
        </Link>
      </div>
    </div>
  );
}
