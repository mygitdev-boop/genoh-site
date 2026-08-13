import { site } from "@/lib/data/site";

export function Topbar() {
  return (
    <div className="bg-ink text-paper-dim font-mono text-[12.5px] tracking-[0.03em]">
      <div className="container flex items-center justify-between gap-4 py-2.5 flex-wrap">
        <div className="flex gap-5 flex-wrap">
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:text-lime"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:text-lime"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 6l-10 7L2 6" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            {site.email}
          </a>
        </div>
        <div className="text-lime">Bulk &amp; institutional orders welcome</div>
      </div>
    </div>
  );
}
