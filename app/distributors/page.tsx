import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { DistributorForm } from "@/components/forms/DistributorForm";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Become a GENOH Distributor | Wholesale & Business Partnerships",
  description:
    "Partner with GENOH as a distributor, wholesaler, retailer or institutional supplier. Explore business channels and submit a partnership enquiry.",
  path: "/distributors",
});

const channels = [
  {
    title: "Retail Distribution",
    body: "Stock GENOH across kirana stores, supermarkets and general trade in your city or region, with distributor margins and marketing support.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Institutional & Bulk Supply",
    body: "Hotels, hospitals, schools, offices and housekeeping agencies — recurring bulk orders with dedicated account support and volume pricing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <path d="M9 9h1" /><path d="M9 13h1" /><path d="M14 9h1" /><path d="M14 13h1" />
      </svg>
    ),
  },
  {
    title: "Modern Trade & Online Marketplaces",
    body: "List GENOH on your e-commerce store, quick-commerce platform, or marketplace storefront as an authorised online seller.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Private Label & White Label",
    body: "Looking for your own brand on our formulations? We can discuss contract manufacturing and private-label arrangements for qualified partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l9 4.9V17L12 22l-9-5.1V6.9z" />
        <path d="M12 22V12" /><path d="M21 6.9L12 12 3 6.9" />
      </svg>
    ),
  },
];

const steps = [
  ["1", "Submit enquiry", "Share your business details and required quantity below."],
  ["2", "We get in touch", "Our team reviews your request and calls or emails within 1–2 business days."],
  ["3", "Terms & pricing", "We share pricing, minimum order quantities and delivery terms for your region."],
  ["4", "First dispatch", "Once confirmed, your first order is packed and dispatched from Rajgarh."],
];

const perks = [
  "A growing multi-product range — floor, toilet, glass & dishwash — under one brand",
  "Competitive distributor margins and volume-based pricing",
  "Direct access to our manufacturing team in Rajgarh, Rajasthan",
  "Marketing assets and product training for your sales team",
];

const partnerFaqs = [
  {
    question: "What's the minimum order quantity for distributors?",
    answer:
      "MOQs vary by channel and region. Share your expected monthly volume in the enquiry form and we'll come back with a quantity and pricing structure that fits your business.",
  },
  {
    question: "Do you offer exclusive distribution rights for a region?",
    answer:
      "We're open to discussing regional arrangements as our network grows. Tell us your city or region and expected volume, and our team will walk you through what's currently available.",
  },
  {
    question: "How is GENOH shipped to distributors?",
    answer:
      "Orders are packed and dispatched directly from our Rajgarh, Rajasthan facility. Delivery timelines and logistics are confirmed with pricing once your enquiry is reviewed.",
  },
  {
    question: "Can I get product samples before committing to an order?",
    answer:
      "Yes — mention it in your enquiry or ask us directly on WhatsApp, and we'll arrange samples so you can evaluate the range before a full order.",
  },
];

export default function DistributorsPage() {
  return (
    <>
      <section className="bg-[radial-gradient(120%_140%_at_85%_-10%,#17371f_0%,var(--color-ink)_55%)] text-paper pt-17.5 pb-15">
        <div className="container">
          <Reveal>
            <div className="font-mono text-[12.5px] text-lime tracking-[0.06em] uppercase mb-3.5">
              Home / Distributors
            </div>
            <h1 className="text-[clamp(32px,4.4vw,48px)] text-paper">Grow your business with GENOH</h1>
            <p className="text-paper-dim max-w-[60ch] text-[17px]">
              We&rsquo;re building our distribution network across India. Whether you run a wholesale
              business, supply institutions, or want to stock GENOH on retail shelves, we&rsquo;d like
              to talk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Business Channels" title="Ways to partner with us">
              GENOH works with partners across the supply chain — pick the channel that fits your
              business.
            </SectionHead>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-5.5">
            {channels.map((c) => (
              <StaggerItem key={c.title}>
                <div className="bg-white border border-line rounded-[18px] p-7 flex gap-4.5 h-full">
                  <div className="w-12.5 h-12.5 rounded-[14px] bg-forest text-lime flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="text-[17.5px] text-ink mb-1.5">{c.title}</h3>
                    <p className="text-[14.5px] text-slate m-0">{c.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="How It Works" title="From enquiry to first order" center />
          </Reveal>
          <StaggerGroup className="grid grid-cols-4 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1 gap-5">
            {steps.map(([num, title, body]) => (
              <StaggerItem key={num}>
                <div className="text-center px-3 py-4.5">
                  <div className="w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center font-mono font-bold mx-auto mb-3.5">
                    {num}
                  </div>
                  <h4 className="text-[14.5px] text-ink mb-1.5">{title}</h4>
                  <p className="text-[13px] text-slate m-0">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container grid grid-cols-[.9fr_1.1fr] max-[900px]:grid-cols-1 gap-12 items-start">
          <Reveal className="bg-forest-soft rounded-[18px] p-7 text-paper">
            <h3 className="text-paper">Why partner with GENOH</h3>
            <ul className="flex flex-col gap-2.5 mt-4">
              {perks.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14.5px] text-[#DCEBDA]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-lime shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href={waLink("Hi GENOH, I'm interested in becoming a distributor.")} variant="yellow" className="mt-5.5">
              Chat on WhatsApp
            </Button>
          </Reveal>
          <DistributorForm />
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Partner FAQ" title="Common questions from partners" center />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion faqs={partnerFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
