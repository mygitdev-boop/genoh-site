export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.genohin.com";

export const site = {
  name: "GENOH",
  legalName: "GENOH Clean Products",
  tagline: "Clean floors, beautiful homes.",
  description:
    "A powerful, non-toxic home cleaning range made in Rajasthan, India.",
  phoneDisplay: "+91 78510 72595",
  phoneE164: "+917851072595",
  whatsappNumber: "917851072595",
  email: "support@genohin.com",
  address: {
    line1: "Vill. Kaman, Teh. Rajgarh",
    region: "Rajasthan",
    postalCode: "331301",
    country: "IN",
    full: "GENOH Clean Products, Vill. Kaman, Teh. Rajgarh (Raj.) 331301, India",
  },
  logo: "/images/logo.jpg",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Distributors", href: "/distributors" },
  { label: "Contact", href: "/contact" },
] as const;
