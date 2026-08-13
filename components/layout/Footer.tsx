import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper-dim pt-16 pb-7">
      <div className="container">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.1fr] max-[820px]:grid-cols-2 max-[520px]:grid-cols-1 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src={site.logo}
                alt="GENOH logo"
                width={40}
                height={40}
                className="rounded-[10px] object-cover"
              />
              <span className="font-display text-xl text-paper">GENOH</span>
            </div>
            <p className="text-sm max-w-[34ch] mt-3.5">
              Clean floors, beautiful homes. A powerful, non-toxic cleaning range made in India.
            </p>
          </div>
          <div>
            <h4 className="font-mono uppercase tracking-[0.1em] text-[12.5px] text-lime mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[14.5px]">
              <li><Link href="/" className="hover:text-lime">Home</Link></li>
              <li><Link href="/products" className="hover:text-lime">Products</Link></li>
              <li><Link href="/blog" className="hover:text-lime">Blog</Link></li>
              <li><Link href="/about" className="hover:text-lime">About</Link></li>
              <li><Link href="/distributors" className="hover:text-lime">Distributors</Link></li>
              <li><Link href="/contact" className="hover:text-lime">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono uppercase tracking-[0.1em] text-[12.5px] text-lime mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-[14.5px]">
              <li><Link href="/distributors" className="hover:text-lime">Become a Distributor</Link></li>
              <li><Link href="/#bulk-enquiry" className="hover:text-lime">Bulk Enquiry</Link></li>
              <li>
                <a href={waLink("Hi GENOH, I'd like to know more.")} target="_blank" rel="noopener" className="hover:text-lime">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono uppercase tracking-[0.1em] text-[12.5px] text-lime mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[14.5px]">
              <li className="flex gap-2.5 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${site.phoneE164}`} className="hover:text-lime">{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-2.5 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime mt-0.5 shrink-0">
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <a href={`mailto:${site.email}`} className="hover:text-lime">{site.email}</a>
              </li>
              <li className="flex gap-2.5 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime mt-0.5 shrink-0">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{site.address.line1} (Raj.) {site.address.postalCode}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-13 pt-6 border-t border-paper/10 flex justify-between flex-wrap gap-3 text-[13px] text-slate">
          <span>&copy; {year} {site.legalName}. All rights reserved.</span>
          <span>
            Manufactured &amp; marketed by {site.legalName}, Rajgarh, Rajasthan &middot; Developed by{" "}
            <a href="https://denxlabs.com" target="_blank" rel="noopener" className="underline text-inherit">
              DENX Labs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
