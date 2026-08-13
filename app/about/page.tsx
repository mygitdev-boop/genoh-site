import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { buildMetadata } from "@/lib/seo";
import { site, waLink } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "About GENOH | Non-Toxic Floor Cleaner, Made in Rajasthan",
  description:
    "GENOH Clean Products is a Rajasthan-based manufacturer of non-toxic, daily-use home cleaning formulas. Learn our story, values and manufacturing details.",
  path: "/about",
  ogImage: "/images/lifestyle2-full.jpg",
});

const values = [
  {
    title: "Deep clean, honestly",
    body: "We don't chase fragrance at the cost of cleaning power. GENOH is tested to lift tough dirt and grime, not just mask it.",
  },
  {
    title: "Safe for the whole home",
    body: "Formulated to be gentle on hands and safe for daily use in homes with children, elders and pets underfoot.",
  },
  {
    title: "Made where we live",
    body: "Every bottle is manufactured in Rajgarh, Rajasthan — close to home, with quality we can personally stand behind.",
  },
];

const processSteps = [
  { num: "01", title: "Sourcing", body: "Raw ingredients are sourced against a consistent specification for every batch." },
  { num: "02", title: "Formulation", body: "Each batch follows the same non-ionic, disinfectant-based formula — no shortcuts between runs." },
  { num: "03", title: "Bottling & labelling", body: "Bottled and labelled at our Rajgarh facility, with a batch number and manufacturing date on every unit." },
  { num: "04", title: "Dispatch", body: "Packed and dispatched to retail, bulk and distributor orders straight from Rajgarh." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[radial-gradient(120%_140%_at_85%_-10%,#17371f_0%,var(--color-ink)_55%)] text-paper pt-17.5 pb-15">
        <div className="container">
          <Reveal>
            <div className="font-mono text-[12.5px] text-lime tracking-[0.06em] uppercase mb-3.5">
              Home / About
            </div>
            <h1 className="text-[clamp(32px,4.4vw,48px)] text-paper">
              A cleaner formula, built close to home
            </h1>
            <p className="text-paper-dim max-w-[60ch] text-[17px]">
              GENOH is manufactured by GENOH Clean Products in Rajgarh, Rajasthan — one bottle, one
              job: a genuinely deep clean without harsh chemicals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-9 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase text-forest bg-lime/16 border border-lime/40 px-3.5 py-1.5 rounded-full mb-4.5">
              How We Started
            </span>
            <h2 className="text-[clamp(28px,3.4vw,42px)] text-ink">Why we built GENOH</h2>
            <p className="text-slate mt-2">
              Most floor cleaners on Indian shelves ask for a trade-off: either a strong chemical
              smell and dirt is gone, or something &ldquo;gentle&rdquo; that barely touches everyday
              grime. In homes that mop daily — often more than once — that trade-off adds up on
              hands, on lungs, and on trust.
            </p>
            <p className="text-slate">
              GENOH was formulated to close that gap. We built a non-ionic, disinfectant-based
              formula that lifts tough dirt, grime and sticky stains in one pass, rinses clean without
              leaving residue, and still smells fresh hours later — without demanding gloves and open
              windows every time you mop.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Image
              src="/images/lifestyle2-full.jpg"
              alt="GENOH Floor Cleaner bottle beside a mop and bucket on a clean tiled floor"
              width={700}
              height={500}
              className="rounded-[18px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="What We Stand For" title="Our values" center />
          </Reveal>
          <StaggerGroup className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-5.5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white border border-line rounded-[18px] p-6.5 h-full">
                  <h3 className="text-[17px] text-ink">{v.title}</h3>
                  <p className="text-slate text-[14.5px] m-0">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Quality Process" title="From formulation to your door" center />
          </Reveal>
          <StaggerGroup className="grid grid-cols-4 max-[820px]:grid-cols-2 gap-5">
            {processSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="relative pt-2">
                  <div
                    className="font-mono text-[36px] font-bold text-lime opacity-90"
                    style={{ WebkitTextStroke: "1px var(--color-ink)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-ink text-[16px] mt-1 mb-1">{step.title}</h3>
                  <p className="text-slate text-[13.5px] m-0">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-forest text-paper py-24 max-[720px]:py-16">
        <div className="container grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-9 items-center">
          <Reveal className="max-[900px]:order-1">
            <Image
              src="/images/about-lifestyle.jpg"
              alt="GENOH Floor Cleaner in use on a marble floor"
              width={700}
              height={500}
              className="rounded-[18px] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase text-lime bg-lime/14 border border-lime/40 px-3.5 py-1.5 rounded-full mb-4.5">
              Manufacturing
            </span>
            <h2 className="text-[clamp(28px,3.4vw,42px)] text-paper">Made in Rajgarh, Rajasthan</h2>
            <p className="text-[#CFE0CF] mt-2">
              GENOH Floor Cleaner is manufactured and marketed by GENOH Clean Products, following a
              consistent formulation for every batch — from raw ingredient sourcing to bottling and
              labelling. Every bottle carries a batch number and manufacturing date so quality stays
              traceable from our facility to your floor.
            </p>
            <div className="bg-forest-soft text-paper rounded-[18px] p-6.5 font-mono text-sm leading-8 mt-5">
              <b className="block font-display text-lg text-lime mb-1.5">{site.legalName}</b>
              {site.address.line1}
              <br />
              (Raj.) {site.address.postalCode}, India
              <br />
              <br />
              {site.email}
              <br />
              {site.phoneDisplay}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal className="bg-linear-to-br from-forest to-ink rounded-3xl px-14 py-14 text-center text-paper">
            <h2 className="text-paper">Bringing GENOH to your home or business</h2>
            <p className="text-paper-dim max-w-[60ch] mx-auto">
              Whether it&rsquo;s one bottle for your kitchen or a bulk order for your hotel, we&rsquo;d
              love to hear from you.
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
