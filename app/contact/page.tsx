import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { SectionHead } from "@/components/ui/SectionHead";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { buildMetadata } from "@/lib/seo";
import { site, waLink } from "@/lib/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact GENOH | Enquiries, Bulk Orders & WhatsApp Support",
  description:
    "Get in touch with GENOH Clean Products for retail, bulk or distributor enquiries. Call, email, WhatsApp, or send us your required quantity directly.",
  path: "/contact",
});

const cards = [
  {
    title: "Call us",
    body: <a href={`tel:${site.phoneE164}`} className="text-forest font-semibold">{site.phoneDisplay}</a>,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Email us",
    body: <a href={`mailto:${site.email}`} className="text-forest font-semibold">{site.email}</a>,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 6l-10 7L2 6" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    body: (
      <a href={waLink("Hi GENOH, I'd like to know more about your floor cleaner.")} target="_blank" rel="noopener" className="text-forest font-semibold">
        Chat with us instantly
      </a>
    ),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2z" />
      </svg>
    ),
  },
  {
    title: "Manufacturing address",
    body: <p className="m-0 text-slate text-[14.5px]">{site.address.full}</p>,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Response time",
    body: <p className="m-0 text-slate text-[14.5px]">We typically reply within 1 business day, Monday–Saturday.</p>,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const contactFaqs = [
  {
    question: "Should I use the form or message on WhatsApp?",
    answer:
      "Either works. WhatsApp is faster for quick questions or a single order; the form is better when you need to share several details at once, like a distributor enquiry with quantity and business type.",
  },
  {
    question: "I want a retail order, not bulk — is that okay to ask here?",
    answer:
      "Yes. Select “5L Floor Cleaner — Retail” in the enquiry type, or just message us on WhatsApp directly — we handle both single-bottle and bulk enquiries through the same channels.",
  },
  {
    question: "How soon will I hear back?",
    answer:
      "We typically reply within 1 business day, Monday to Saturday. WhatsApp messages are often answered sooner.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[radial-gradient(120%_140%_at_85%_-10%,#17371f_0%,var(--color-ink)_55%)] text-paper pt-17.5 pb-15">
        <div className="container">
          <Reveal>
            <div className="font-mono text-[12.5px] text-lime tracking-[0.06em] uppercase mb-3.5">
              Home / Contact
            </div>
            <h1 className="text-[clamp(32px,4.4vw,48px)] text-paper">Let&rsquo;s talk floors</h1>
            <p className="text-paper-dim max-w-[60ch] text-[17px]">
              Retail question, bulk order, or interested in stocking GENOH? Send us a message and
              we&rsquo;ll get back within 1 business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container grid grid-cols-[.9fr_1.1fr] max-[900px]:grid-cols-1 gap-12 items-start">
          <StaggerGroup>
            {cards.map((c) => (
              <StaggerItem key={c.title}>
                <div className="bg-white border border-line rounded-[18px] p-6 flex gap-4 items-start mb-4">
                  <div className="w-11 h-11 rounded-xl bg-forest text-lime flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="m-0 mb-1 text-ink text-[15.5px]">{c.title}</h4>
                    {c.body}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <EnquiryForm idPrefix="contact" subject="GENOH Contact Page Enquiry" messageRequired />
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="FAQ" title="Before you reach out" center />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion faqs={contactFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
