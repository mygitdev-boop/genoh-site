import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ProductsCatalog } from "@/components/product/ProductsCatalog";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { buildMetadata } from "@/lib/seo";
import { products } from "@/lib/data/products";

export const metadata: Metadata = buildMetadata({
  title: "GENOH Cleaning Products | Floor, Toilet, Glass Cleaner & Dishwash Gel",
  description:
    "Explore the full GENOH home cleaning range — Floor Cleaner, Toilet Cleaner, Glass Cleaner and Dishwash Gel. Powerful, non-toxic formulas made in India.",
  path: "/products",
});

const categories = ["All Products", "Floor Care", "Bathroom Care", "Glass & Surface", "Kitchen Care", "Coming Soon"];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[radial-gradient(120%_140%_at_85%_-10%,#17371f_0%,var(--color-ink)_55%)] text-paper pt-17.5 pb-15">
        <div className="container">
          <Reveal>
            <div className="font-mono text-[12.5px] text-lime tracking-[0.06em] uppercase mb-3.5">
              Home / Products
            </div>
            <h1 className="text-[clamp(32px,4.4vw,48px)] text-paper">The GENOH cleaning range</h1>
            <p className="text-paper-dim max-w-[60ch] text-[17px]">
              One brand, one standard — powerful cleaning formulas for every corner of the home, from
              floors to glass to dishes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUICK GUIDE */}
      <section className="py-16 border-b border-line">
        <div className="container">
          <Reveal>
            <span className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-forest">
              Not sure where to start?
            </span>
            <h2 className="text-[22px] text-ink mt-1.5 mb-6">A one-line guide to the range</h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-4 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4">
            {products.map((p) => (
              <StaggerItem key={p.slug}>
                <div className="border-l-2 border-lime-deep pl-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
                    {p.category}
                  </span>
                  <h3 className="text-ink text-[15.5px] mt-0.5 mb-1">{p.name.replace("GENOH ", "")}</h3>
                  <p className="text-slate text-[13.5px] m-0">{p.tagline}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <div className="flex gap-2.5 flex-wrap py-5.5 border-b border-line mb-11">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`font-mono text-[13px] px-4.5 py-2.5 rounded-full border-[1.5px] whitespace-nowrap ${
                  i === 0
                    ? "bg-ink border-ink text-paper"
                    : "border-line text-slate bg-white"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
          <ProductsCatalog products={products} />
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <Reveal className="bg-linear-to-br from-forest to-ink rounded-3xl px-14 py-14 text-center text-paper">
            <h2 className="text-paper">Looking to stock GENOH in bulk?</h2>
            <p className="text-paper-dim max-w-[60ch] mx-auto">
              Retailers, distributors and institutional buyers can get volume pricing and dedicated
              support.
            </p>
            <div className="flex gap-3.5 flex-wrap justify-center mt-6">
              <Button href="/distributors">Become a Distributor</Button>
              <Button href="/#bulk-enquiry" variant="outline">
                Bulk Enquiry
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
