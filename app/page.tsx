import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BlogCard } from "@/components/blog/BlogCard";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Counter } from "@/components/motion/Counter";
import { HeroVisual } from "@/components/home/HeroVisual";
import { CategoryTile } from "@/components/home/CategoryTile";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { waLink } from "@/lib/data/site";
import { getProduct, homeFaqs } from "@/lib/data/products";
import { getAllBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "GENOH Floor Cleaner | Deep Clean, Non-Toxic Floor Cleaner Made in India",
  description:
    "GENOH Floor Cleaner is a powerful, non-toxic daily floor cleaner for tiles, marble, granite, ceramic and Kota stone. Fresh fragrance, no rinse needed. Made in Rajasthan, India.",
  path: "/",
  ogImage: "/images/lifestyle-full.jpg",
});

const floorCleaner = getProduct("floor-cleaner")!;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GENOH Floor Cleaner",
  brand: { "@type": "Brand", name: "GENOH" },
  description:
    "Powerful, non-toxic floor cleaner formula for daily floor care. Removes tough dirt and stains, kills germs and leaves a long-lasting fresh fragrance. Suitable for tiles, marble, granite, ceramic and Kota stone.",
  manufacturer: {
    "@type": "Organization",
    name: "GENOH Clean Products",
    address: "Vill. Kaman, Teh. Rajgarh, Rajasthan 331301",
  },
  image: `${siteUrl}${floorCleaner.image}`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const categories = [
  { slug: "floor-cleaner", label: "Floor Care", cta: "Floor Cleaner", image: "/images/product-bottle.jpg", alt: "GENOH Floor Cleaner" },
  { slug: "toilet-cleaner", label: "Bathroom Care", cta: "Toilet Cleaner", image: "/images/toilet-cleaner.jpg", alt: "GENOH Toilet Cleaner" },
  { slug: "glass-cleaner", label: "Glass & Surface", cta: "Glass Cleaner", image: "/images/glass-cleaner.jpg", alt: "GENOH Glass Cleaner" },
  { slug: "dishwash-gel", label: "Kitchen Care", cta: "Dishwash Gel", image: "/images/dishwash-gel.jpg", alt: "GENOH Dishwash Gel" },
];

const recentPosts = getAllBlogPosts().slice(0, 3);

export default function HomePage() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* HERO */}
      <section className="relative bg-[radial-gradient(120%_140%_at_15%_-10%,#17371f_0%,var(--color-ink)_55%)] text-paper pt-22 pb-15 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-32 w-125 h-125 rounded-full bg-lime/10 blur-3xl pointer-events-none"
          style={{ animation: "blob-float 14s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 -left-24 w-90 h-90 rounded-full bg-cap-yellow/8 blur-3xl pointer-events-none"
          style={{ animation: "blob-float 18s ease-in-out infinite reverse" }}
        />
        <div className="container relative grid grid-cols-[1.05fr_.95fr] max-[920px]:grid-cols-1 gap-14 items-center">
          <StaggerGroup>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase text-lime bg-lime/14 border border-lime/40 px-3.5 py-1.5 rounded-full mb-4.5">
                Daily Floor Care · Non-Toxic Formula
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(38px,5vw,60px)] text-paper leading-[1.08]">
                Clean floors.
                <br />
                <span className="text-lime">Beautiful homes.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-paper-dim max-w-[52ch] mt-4">
                GENOH Floor Cleaner cuts through everyday dirt, grime and sticky stains while leaving
                behind a fragrance that lasts for hours — gentle enough for daily use, strong enough
                for tough Indian households.
              </p>
            </StaggerItem>
            <StaggerItem className="flex gap-3.5 flex-wrap my-7.5">
              <Button href={waLink("Hi GENOH, I'd like to place an order.")}>
                Order via WhatsApp
              </Button>
              <Button href="#bulk-enquiry" variant="outline">
                Enquire in Bulk
              </Button>
            </StaggerItem>
            <StaggerItem>
              <ul className="flex gap-6.5 flex-wrap">
                {["Non-toxic, safe for daily use", "Tiles, marble, granite & more", "Made in India"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2 text-[13.5px] text-paper-dim font-mono">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="text-lime shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {t}
                    </li>
                  )
                )}
              </ul>
            </StaggerItem>
            <StaggerItem className="flex mt-9 pt-7 border-t border-paper/14 max-[520px]:flex-wrap max-[520px]:gap-4.5">
              {[
                { value: 4, suffix: "", label: "Products in the range" },
                { value: 5, suffix: "+", label: "Floor types covered" },
                { value: 100, suffix: "%", label: "Made in Rajasthan" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="pr-8 mr-8 border-r border-paper/14 last:border-r-0 last:mr-0 last:pr-0 max-[520px]:w-1/2 max-[520px]:border-r-0 max-[520px]:pr-0 max-[520px]:mr-0"
                >
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block font-display text-2xl text-lime"
                  />
                  <span className="text-xs text-paper-dim font-mono">{stat.label}</span>
                </div>
              ))}
            </StaggerItem>
          </StaggerGroup>
          <HeroVisual />
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-lime py-5">
        <div className="container flex justify-between gap-5 flex-wrap">
          {["Deep Clean", "Fresh Fragrance", "Non-Toxic", "Safe for Home Use", "Made in India"].map(
            (t) => (
              <div key={t} className="flex items-center gap-2.5 text-ink font-semibold text-[14.5px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2.5 2.5L16 9" />
                </svg>
                {t}
              </div>
            )
          )}
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Shop by Room" title="One brand, every corner of the home" center />
          </Reveal>
          <StaggerGroup className="grid grid-cols-4 max-[820px]:grid-cols-2 gap-4.5">
            {categories.map((cat) => (
              <StaggerItem key={cat.slug}>
                <CategoryTile
                  href={`/products/${cat.slug}`}
                  image={cat.image}
                  alt={cat.alt}
                  label={cat.label}
                  cta={cat.cta}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHY GENOH */}
      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Why GENOH" title="Powerful cleaning, every single day" center>
              One formula, built for the way Indian homes actually get cleaned — daily mopping, tough
              floor types, and a fragrance that should still be there by evening.
            </SectionHead>
          </Reveal>
          <StaggerGroup className="grid grid-cols-4 max-[920px]:grid-cols-2 max-[520px]:grid-cols-1 gap-5.5">
            <StaggerItem>
            <FeatureCard
              title="Removes Dirt & Stains"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 13.6l-5 3.6 1.9-5.8L4 7.8h6.1z" />
                </svg>
              }
            >
              Cuts through tough dirt, grime and sticky stains in a single mop pass.
            </FeatureCard>
            </StaggerItem>
            <StaggerItem>
            <FeatureCard
              title="Long-Lasting Freshness"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 3 18 1c1 4 3.5 5.5 3.5 9A7 7 0 0 1 11 20z" />
                </svg>
              }
            >
              A clean fragrance that keeps rooms smelling fresh for hours, not minutes.
            </FeatureCard>
            </StaggerItem>
            <StaggerItem>
            <FeatureCard
              title="Suitable for All Floors"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              }
            >
              Formulated for tiles, marble, granite, ceramic and Kota stone.
            </FeatureCard>
            </StaggerItem>
            <StaggerItem>
            <FeatureCard
              title="Non-Toxic Formula"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" />
                </svg>
              }
            >
              Gentle on hands and safe for daily use in homes with kids and pets.
            </FeatureCard>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-forest text-paper py-24 max-[720px]:py-16">
        <div className="container grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-9 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase text-lime bg-lime/14 border border-lime/40 px-3.5 py-1.5 rounded-full mb-4.5">
              Our Story
            </span>
            <h2 className="text-[clamp(28px,3.4vw,42px)] text-paper">
              Built in Rajasthan, made for every Indian floor
            </h2>
            <p className="text-[#CFE0CF] mt-2">
              GENOH started with a simple problem: most floor cleaners are either too harsh on hands
              or too weak on stains. We set out to build one bottle that does both jobs — a strong,
              dependable clean without the sting of harsh chemicals — manufactured right here in
              Rajgarh, Rajasthan.
            </p>
            <div className="flex gap-8.5 flex-wrap my-7">
              {[
                { value: 5, suffix: "L", label: "Family-size bottle" },
                { value: 5, suffix: "+", label: "Floor types covered" },
                { value: 100, suffix: "%", label: "Made in India" },
              ].map((stat) => (
                <div key={stat.label}>
                  <Counter value={stat.value} suffix={stat.suffix} className="block font-display text-[30px] text-lime" />
                  <span className="text-[13px] text-[#CFE0CF]">{stat.label}</span>
                </div>
              ))}
            </div>
            <Button href="/about" variant="yellow">
              Read our story
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <Image
              src="/images/about-lifestyle.jpg"
              alt="GENOH Floor Cleaner bottle and mop bucket in a bright Indian home"
              width={700}
              height={500}
              className="rounded-[18px] shadow-[0_20px_50px_-20px_rgba(11,18,12,0.35)] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* PRODUCT SPOTLIGHT */}
      <section id="products" className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal className="max-w-160 mb-12">
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase text-forest bg-lime/16 border border-lime/40 px-3.5 py-1.5 rounded-full mb-4.5">
              Our Bestseller
            </span>
            <h2 className="text-[clamp(28px,3.4vw,42px)] text-ink">GENOH Floor Cleaner</h2>
            <p className="text-[17px] text-slate mt-2">
              Daily floor care formula with an advanced cleaning base, a fresh fragrance and a
              no-rinse finish. It&rsquo;s the product we started with — see our{" "}
              <Link href="/products" className="text-forest underline">
                full cleaning range
              </Link>
              , including Toilet Cleaner, Glass Cleaner and Dishwash Gel.
            </p>
          </Reveal>
          <div className="grid grid-cols-[.85fr_1.15fr] max-[900px]:grid-cols-1 gap-14 items-center">
            <Reveal className="bg-[radial-gradient(60%_60%_at_50%_30%,#ffffff_0%,var(--color-paper-dim)_70%)] rounded-3xl p-7.5 border border-line flex items-center justify-center">
              <Image
                src={floorCleaner.image}
                alt={floorCleaner.imageAlt}
                width={360}
                height={460}
                className="max-h-115 w-auto mx-auto"
              />
            </Reveal>
            <Reveal delay={0.1} className="border-[1.5px] border-ink rounded-[18px] overflow-hidden bg-white">
              <div className="bg-ink text-paper px-6 py-4.5 flex items-center justify-between flex-wrap gap-2">
                <h3 className="m-0 text-paper text-xl">GENOH Floor Cleaner</h3>
                <span className="font-mono bg-lime text-ink px-3 py-1 rounded-full text-[13px] font-semibold">
                  5 LTR
                </span>
              </div>
              <div className="px-6 py-5.5">
                <dl>
                  {[
                    ["Ingredients", floorCleaner.ingredients],
                    ["Directions", floorCleaner.directions],
                    ["Precautions", floorCleaner.precautions],
                  ].map(([dt, dd]) => (
                    <div key={dt} className="grid grid-cols-[150px_1fr] gap-3.5 py-3.5 border-b border-dashed border-line text-[14.5px]">
                      <dt className="font-mono uppercase tracking-[0.06em] text-[11.5px] text-slate">{dt}</dt>
                      <dd className="m-0 text-charcoal">{dd}</dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-[150px_1fr] gap-3.5 py-3.5 text-[14.5px]">
                    <dt className="font-mono uppercase tracking-[0.06em] text-[11.5px] text-slate">Suitable for</dt>
                    <dd className="m-0 text-charcoal">
                      <div className="flex gap-2 flex-wrap">
                        {["Tiles", "Marble", "Granite", "Ceramic", "Kota Stone"].map((tag) => (
                          <span key={tag} className="font-mono text-xs bg-paper-dim border border-line text-forest px-2.5 py-1 rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex gap-3 flex-wrap px-6 py-5 border-t border-line">
                <Button href={waLink("Hi GENOH, I'd like to place an order.")}>
                  Order via WhatsApp
                </Button>
                <Button href="/products/floor-cleaner" variant="dark">
                  View Full Details
                </Button>
                <Button href="#bulk-enquiry" variant="outline" className="!text-ink !border-line">
                  Get Bulk Pricing
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INGREDIENTS & SAFETY */}
      <section className="bg-ink text-paper py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Ingredients & Safety" title="What's in the bottle, and why" center dark>
              We&rsquo;d rather be upfront about the formula than hide behind a fragrance.
            </SectionHead>
          </Reveal>
          <StaggerGroup className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-5.5">
            <StaggerItem>
              <div className="bg-forest-soft rounded-[18px] p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-lime/16 border border-lime/40 text-lime flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 2v5.5L4.5 15A3 3 0 0 0 7 20h10a3 3 0 0 0 2.5-5L15 7.5V2" />
                    <path d="M8 2h8" />
                  </svg>
                </div>
                <h3 className="text-paper text-[17px]">Non-ionic, not harsh</h3>
                <p className="text-[#CFE0CF] text-[14.5px] m-0">
                  Every GENOH formula is built on a non-ionic surfactant base with a disinfectant
                  component — strong enough to lift dirt and kill germs, without the sting of
                  aggressive, high-pH cleaners.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-forest-soft rounded-[18px] p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-lime/16 border border-lime/40 text-lime flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" />
                  </svg>
                </div>
                <h3 className="text-paper text-[17px]">Precautions we print on every label</h3>
                <p className="text-[#CFE0CF] text-[14.5px] m-0">
                  Keep out of reach of children, avoid contact with eyes, never mix with other
                  cleaning products or bleach, and store in a cool, dry place away from sunlight —
                  the same guidance on every bottle we ship.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-forest-soft rounded-[18px] p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-lime/16 border border-lime/40 text-lime flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2.5 2.5L16 9" />
                  </svg>
                </div>
                <h3 className="text-paper text-[17px]">Batch-traceable, every time</h3>
                <p className="text-[#CFE0CF] text-[14.5px] m-0">
                  Every bottle carries a batch number and manufacturing date, so the formula you buy
                  today matches the one we tested — no guessing which batch you got.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="How to Use" title="Three steps to a spotless floor" center />
          </Reveal>
          <StaggerGroup className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-7">
            {[
              ["01", "Dilute", "Take 2 capfuls, approximately 40ml, and mix into 5 litres of water in your mopping bucket."],
              ["02", "Mop", "Dip the mop into the solution and clean the floor as you usually would. No need to rinse afterwards."],
              ["03", "Tackle tough stains", "For stubborn marks or heavy grime, use slightly more concentrate for extra cleaning power."],
            ].map(([num, title, body]) => (
              <StaggerItem key={num} className="pt-2">
                <div className="font-mono text-[44px] font-bold text-lime opacity-90" style={{ WebkitTextStroke: "1px var(--color-ink)" }}>
                  {num}
                </div>
                <h3 className="text-ink text-[19px] mt-1">{title}</h3>
                <p className="text-slate text-[15px]">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BULK ENQUIRY */}
      <section id="bulk-enquiry" className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Bulk & Institutional Orders" title="Tell us how much you need" center>
              Housekeeping agencies, hotels, schools, offices and retailers — share your quantity and
              we&rsquo;ll get back with pricing and availability.
            </SectionHead>
          </Reveal>
          <div className="grid grid-cols-[.9fr_1.1fr] max-[900px]:grid-cols-1 gap-12 items-start">
            <div className="bg-forest-soft rounded-[18px] p-7 text-paper">
              <h3 className="text-paper">What happens next</h3>
              <ul className="flex flex-col gap-2.5 mt-4">
                {[
                  "Your enquiry is emailed straight to our team at support@genohin.com",
                  "We'll respond within 1 business day with pricing and stock",
                  "Prefer chat? Message us directly on WhatsApp — button in the corner",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14.5px] text-[#DCEBDA]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-lime shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href={waLink("Hi GENOH, I'd like to enquire about a bulk order.")} variant="yellow" className="mt-5.5">
                Chat on WhatsApp
              </Button>
            </div>
            <EnquiryForm idPrefix="home" subject="GENOH Website Enquiry" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="FAQ" title="Common questions" center />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion faqs={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* RECENT BLOGS */}
      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="From the Blog" title="Cleaning tips worth reading" center>
              Practical guides on floor, bathroom and glass care from the GENOH team.
            </SectionHead>
          </Reveal>
          <StaggerGroup className="grid grid-cols-3 max-[900px]:grid-cols-1 max-[900px]:max-w-120 max-[900px]:mx-auto gap-6.5">
            {recentPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="text-center mt-9">
            <Button href="/blog" variant="dark">
              Read All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal className="bg-linear-to-br from-forest to-ink rounded-3xl px-14 py-14 text-center text-paper">
            <h2 className="text-paper">Ready to try GENOH?</h2>
            <p className="text-paper-dim max-w-[60ch] mx-auto">
              Order online through our shop or reach out directly for bulk pricing — either way, our
              team is one message away.
            </p>
            <div className="flex gap-3.5 flex-wrap justify-center mt-6">
              <Button href={waLink("Hi GENOH, I'd like to place an order.")}>
                Order via WhatsApp
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
