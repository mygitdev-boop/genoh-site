import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blog/BlogCard";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/data/site";
import { getAllBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "GENOH Blog | Cleaning Tips & Home Care Guides",
  description:
    "Practical, no-nonsense cleaning tips for Indian homes — floor care, bathroom hygiene, glass cleaning and more from the GENOH team.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="bg-[radial-gradient(120%_140%_at_85%_-10%,#17371f_0%,var(--color-ink)_55%)] text-paper pt-17.5 pb-15">
        <div className="container">
          <div className="font-mono text-[12.5px] text-lime tracking-[0.06em] uppercase mb-3.5">
            Home / Blog
          </div>
          <h1 className="text-[clamp(32px,4.4vw,48px)] text-paper">
            Cleaning tips, actually worth reading
          </h1>
          <p className="text-paper-dim max-w-[60ch] text-[17px]">
            Practical guides on floor care, bathroom hygiene and everyday cleaning — written from
            what actually works, not just what sounds good on a label.
          </p>
        </div>
      </section>

      <section className="py-24 max-[720px]:py-16">
        <div className="container">
          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6.5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16">
        <div className="container">
          <div className="bg-linear-to-br from-forest to-ink rounded-3xl px-14 py-14 text-center text-paper">
            <h2 className="text-paper">Got a cleaning question we haven&rsquo;t covered?</h2>
            <p className="text-paper-dim max-w-[60ch] mx-auto">
              Message us on WhatsApp or send an enquiry — we&rsquo;re happy to help, even if it&rsquo;s
              not about buying anything.
            </p>
            <div className="flex gap-3.5 flex-wrap justify-center mt-6">
              <Button href={waLink("Hi GENOH, I have a cleaning question.")}>Chat on WhatsApp</Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
