import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { getAllBlogPosts, getAllBlogSlugs, getBlogPost } from "@/lib/data/blog";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | GENOH Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.heroImage,
    type: "article",
  });
}

function formatMonthYear(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.heroImage}`,
    author: { "@type": "Organization", name: "GENOH Clean Products" },
    publisher: {
      "@type": "Organization",
      name: "GENOH Clean Products",
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.jpg` },
    },
    datePublished: post.date,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="aspect-[21/9] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          width={1400}
          height={600}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <section className="pt-11">
        <div className="container">
          <div className="max-w-185 mx-auto">
            <div className="font-mono text-[12.5px] text-forest tracking-[0.06em] uppercase mb-2.5">
              <Link href="/" className="hover:underline">Home</Link> /{" "}
              <Link href="/blog" className="hover:underline">Blog</Link> / {post.category}
            </div>
            <h1 className="text-[clamp(28px,4vw,42px)] text-ink mt-2.5">{post.title}</h1>
            <div className="flex items-center gap-3.5 font-mono text-[12.5px] text-slate mb-5 mt-5 flex-wrap">
              <span>{post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-slate" />
              <span>{formatMonthYear(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-slate" />
              <span>{post.category}</span>
            </div>

            <div className="prose prose-headings:font-display prose-headings:text-ink prose-p:text-charcoal prose-li:text-charcoal prose-blockquote:font-display prose-blockquote:text-forest prose-blockquote:border-lime-deep prose-blockquote:not-italic max-w-none">
              <MDXRemote source={post.content} />
            </div>

            <div className="bg-paper-dim rounded-[18px] p-7 my-10 flex items-center justify-between gap-5 flex-wrap">
              <p className="m-0 text-[15px] text-charcoal font-semibold">
                Ready to see the product behind these tips?
              </p>
              <Button href="/products">View Products</Button>
            </div>

            <div className="flex gap-2 flex-wrap mt-9 pt-6 border-t border-line">
              {post.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs bg-paper-dim border border-line text-forest px-2.5 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim py-24 max-[720px]:py-16 mt-16">
        <div className="container">
          <div className="max-w-160 mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase text-forest bg-lime/16 border border-lime/40 px-3.5 py-1.5 rounded-full mb-4.5">
              Keep Reading
            </span>
            <h2 className="text-[clamp(28px,3.4vw,42px)] text-ink">More from the GENOH blog</h2>
          </div>
          <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-6.5">
            {otherPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
