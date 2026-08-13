"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { waLink } from "@/lib/data/site";
import type { Product } from "@/lib/data/products";
import { comingSoonProducts } from "@/lib/data/products";

type CartState = Record<string, { qty: number; variant: string }>;

export function ProductsCatalog({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<CartState>({});

  const items = useMemo(
    () =>
      products
        .map((p) => ({ product: p, entry: cart[p.slug] }))
        .filter((x) => x.entry && x.entry.qty > 0),
    [products, cart]
  );

  const totalQty = items.reduce((sum, x) => sum + (x.entry?.qty ?? 0), 0);

  const waHref = useMemo(() => {
    if (items.length === 0) return "#";
    let message = "Hi, I'm interested in placing a wholesale order for:\n\n";
    for (const { product, entry } of items) {
      message += `Product: ${product.name}\nVariant: ${entry!.variant}\nQuantity: ${entry!.qty}\n\n`;
    }
    message += "Please share pricing and availability.";
    return waLink(message);
  }, [items]);

  function setEntry(slug: string, patch: Partial<{ qty: number; variant: string }>) {
    setCart((prev) => {
      const current = prev[slug] ?? {
        qty: 0,
        variant: products.find((p) => p.slug === slug)?.defaultVariant ?? "Standard",
      };
      return { ...prev, [slug]: { ...current, ...patch } };
    });
  }

  return (
    <>
      <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 gap-6">
        {products.map((product) => {
          const entry = cart[product.slug] ?? {
            qty: 0,
            variant: product.defaultVariant ?? "Standard",
          };
          return (
            <div
              key={product.slug}
              className="relative bg-white border border-line rounded-[18px] overflow-hidden flex flex-col transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_44px_-26px_rgba(11,18,12,0.4)]"
            >
              <div className="bg-[radial-gradient(60%_60%_at_50%_30%,#ffffff_0%,var(--color-paper-dim)_70%)] p-5.5 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={260}
                  height={260}
                  className="max-h-55 w-auto mx-auto object-contain"
                />
              </div>
              <div className="p-5 pb-5.5 flex flex-col flex-1">
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-forest">
                  {product.category}
                </span>
                <h3 className="text-lg mt-1.5 mb-1.5 text-ink">
                  {product.name.replace("GENOH ", "")}
                </h3>
                <span className="inline-block font-mono text-xs bg-paper-dim border border-line text-forest px-2.5 py-0.5 rounded-lg mb-2.5 self-start">
                  {product.netQty}
                </span>
                <p className="text-sm text-slate flex-1">{product.tagline}</p>

                {product.variants && product.variants.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {product.variants.map((v) => (
                      <button
                        key={v.value}
                        type="button"
                        onClick={() => setEntry(product.slug, { variant: v.value })}
                        className={`font-mono text-[11.5px] px-3 py-1.5 rounded-full border-[1.5px] font-semibold transition-colors ${
                          entry.variant === v.value
                            ? "bg-ink border-ink text-paper"
                            : "bg-white border-line text-charcoal hover:border-lime-deep"
                        }`}
                      >
                        {v.value}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between gap-2.5 my-3">
                  <div className="inline-flex items-center border-[1.5px] border-line rounded-full overflow-hidden bg-white">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setEntry(product.slug, { qty: Math.max(0, entry.qty - 1) })}
                      className="w-9 h-9 flex items-center justify-center text-lg font-semibold text-ink hover:bg-paper-dim"
                    >
                      &minus;
                    </button>
                    <span className="w-11 text-center font-mono text-[15px] font-semibold text-ink">
                      {entry.qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setEntry(product.slug, { qty: entry.qty + 1 })}
                      className="w-9 h-9 flex items-center justify-center text-lg font-semibold text-ink hover:bg-paper-dim"
                    >
                      &plus;
                    </button>
                  </div>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-ink text-paper px-4.5 py-2.5 text-sm hover:bg-forest-soft transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          );
        })}

        {comingSoonProducts.map((product) => (
          <div
            key={product.name}
            className="relative bg-white border border-line rounded-[18px] overflow-hidden flex flex-col opacity-92"
          >
            <span className="absolute top-3.5 right-3.5 z-10 bg-cap-yellow text-ink font-mono text-[10.5px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full">
              Coming Soon
            </span>
            <div className="bg-linear-to-br from-paper-dim to-line min-h-45 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate opacity-50">
                <path d="M8 2h8" />
                <path d="M9 2v5.5L4.5 15A3 3 0 0 0 7 20h10a3 3 0 0 0 2.5-5L15 7.5V2" />
              </svg>
            </div>
            <div className="p-5 pb-5.5 flex flex-col flex-1">
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-forest">
                {product.category}
              </span>
              <h3 className="text-lg mt-1.5 mb-1.5 text-ink">{product.name}</h3>
              <span className="inline-block font-mono text-xs bg-paper-dim border border-line text-forest px-2.5 py-0.5 rounded-lg mb-2.5 self-start">
                {product.netQty}
              </span>
              <p className="text-sm text-slate flex-1">{product.tagline}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-ink text-paper px-4.5 py-2.5 text-sm hover:bg-forest-soft transition-colors mt-3"
              >
                Notify Me
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-slate text-[13.5px] mt-7">
        Want early access when a new product launches?{" "}
        <Link href="/contact" className="text-forest font-semibold">
          Let us know
        </Link>{" "}
        or message us on WhatsApp.
      </p>

      <div
        className={`fixed left-0 right-0 bottom-0 z-70 bg-ink border-t border-paper/14 py-4 shadow-[0_-12px_30px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 ${
          items.length > 0 ? "translate-y-0" : "translate-y-[120%]"
        }`}
      >
        <div className="container flex items-center justify-between gap-4 flex-wrap max-[520px]:justify-center max-[520px]:text-center">
          <span className="text-paper-dim font-mono text-[13.5px]">
            <b className="text-lime">{items.length}</b> {items.length === 1 ? "product" : "products"}{" "}
            selected &middot; <b className="text-lime">{totalQty}</b>{" "}
            {totalQty === 1 ? "unit" : "units"} total
          </span>
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 font-semibold rounded-full bg-lime text-ink px-4.5 py-2.5 text-sm hover:bg-lime-deep transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.2-8.24 8.2z" />
            </svg>
            Order via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
