import type { Metadata } from "next";
import { site, siteUrl } from "./data/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
}: BuildMetadataInput): Metadata {
  const image = ogImage ?? "/images/lifestyle-full.jpg";
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName: site.name,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export { siteUrl };
