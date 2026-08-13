import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PdpOrderPanel } from "@/components/product/PdpOrderPanel";
import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { SectionHead } from "@/components/ui/SectionHead";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { getProduct, products } from "@/lib/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
    ogImage: product.image,
    type: "website",
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: "GENOH" },
    description: product.metaDescription,
    manufacturer: {
      "@type": "Organization",
      name: "GENOH Clean Products",
      address: "Vill. Kaman, Teh. Rajgarh, Rajasthan 331301",
    },
    image: `${siteUrl}${product.image}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="pt-11 pb-0">
        <div className="container">
          <div className="font-mono text-[12.5px] text-forest tracking-[0.06em] uppercase">
            <Link href="/" className="hover:underline">Home</Link> /{" "}
            <Link href="/products" className="hover:underline">Products</Link> / {product.name}
          </div>
        </div>
      </section>

      <section className="pt-6 pb-24 max-[720px]:pb-16">
        <div className="container">
          <div className="grid grid-cols-[.85fr_1.15fr] max-[900px]:grid-cols-1 gap-14 items-start">
            <Reveal y={16} className="bg-[radial-gradient(60%_60%_at_50%_30%,#ffffff_0%,var(--color-paper-dim)_70%)] rounded-3xl p-8.5 border border-line sticky top-24 max-[900px]:static">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={420}
                height={520}
                priority
                className="max-h-130 w-auto mx-auto"
              />
              <div className="flex gap-2 flex-wrap mt-4.5 justify-center">
                {product.badges.map((b) => (
                  <span key={b} className="font-mono text-[11.5px] bg-forest text-paper px-2.75 py-1.25 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} y={16}>
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-forest">
                {product.category}
              </span>
              <h1 className="my-2 text-[clamp(28px,3.4vw,40px)] text-ink">{product.name}</h1>
              <p className="text-[17px] text-slate max-w-[56ch]">{product.intro}</p>

              <ul className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-x-4 gap-y-2 mt-5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[14px] text-charcoal">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" className="text-lime-deep shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="border-[1.5px] border-ink rounded-[18px] overflow-hidden bg-white mt-6.5">
                <div className="bg-ink text-paper px-6 py-4.5 flex items-center justify-between flex-wrap gap-2">
                  <h3 className="m-0 text-paper text-xl">{product.name}</h3>
                  <span className="font-mono bg-lime text-ink px-3 py-1 rounded-full text-[13px] font-semibold">
                    {product.netQty}
                  </span>
                </div>
                <div className="px-6 py-5.5">
                  <dl>
                    <div className="grid grid-cols-[150px_1fr] gap-3.5 py-3.5 border-b border-dashed border-line text-[14.5px]">
                      <dt className="font-mono uppercase tracking-[0.06em] text-[11.5px] text-slate">
                        Key Benefits
                      </dt>
                      <dd className="m-0">
                        <div className="flex gap-2 flex-wrap">
                          {product.benefits.map((b) => (
                            <span key={b} className="font-mono text-xs bg-paper-dim border border-line text-forest px-2.5 py-1 rounded-lg">
                              {b}
                            </span>
                          ))}
                        </div>
                      </dd>
                    </div>
                    {[
                      ["Directions", product.directions],
                      ["Ingredients", product.ingredients],
                      ["Precautions", product.precautions],
                      ["Manufactured by", "GENOH Clean Products, Vill. Kaman, Teh. Rajgarh (Raj.) 331301"],
                    ].map(([dt, dd]) => (
                      <div key={dt} className="grid grid-cols-[150px_1fr] gap-3.5 py-3.5 border-b border-dashed border-line last:border-b-0 text-[14.5px]">
                        <dt className="font-mono uppercase tracking-[0.06em] text-[11.5px] text-slate">{dt}</dt>
                        <dd className="m-0 text-charcoal">{dd}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="px-6 pb-6 pt-1">
                  <PdpOrderPanel
                    productName={product.name}
                    variants={product.variants}
                    defaultVariant={product.defaultVariant}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Explore More" title="Rest of the GENOH range" center />
          </Reveal>
          <StaggerGroup className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-6">
            {related.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
