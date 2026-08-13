import type { NextConfig } from "next";

const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/index.html", destination: "/" },
  { source: "/products.html", destination: "/products" },
  { source: "/product-floor-cleaner.html", destination: "/products/floor-cleaner" },
  { source: "/product-toilet-cleaner.html", destination: "/products/toilet-cleaner" },
  { source: "/product-glass-cleaner.html", destination: "/products/glass-cleaner" },
  { source: "/product-dishwash-gel.html", destination: "/products/dishwash-gel" },
  { source: "/blog.html", destination: "/blog" },
  { source: "/blog-floor-cleaning-mistakes.html", destination: "/blog/floor-cleaning-mistakes" },
  { source: "/blog-floor-cleaner-vs-phenyl.html", destination: "/blog/floor-cleaner-vs-phenyl" },
  {
    source: "/blog-best-floor-cleaner-marble-tiles-granite.html",
    destination: "/blog/best-floor-cleaner-marble-tiles-granite",
  },
  { source: "/blog-toilet-cleaning-routine.html", destination: "/blog/toilet-cleaning-routine" },
  { source: "/blog-streak-free-glass-cleaning.html", destination: "/blog/streak-free-glass-cleaning" },
  { source: "/about.html", destination: "/about" },
  { source: "/distributors.html", destination: "/distributors" },
  { source: "/contact.html", destination: "/contact" },
  { source: "/thankyou.html", destination: "/thank-you" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
