import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Thank You | GENOH",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6 py-25">
      <div>
        <div className="w-17.5 h-17.5 rounded-full bg-lime text-ink flex items-center justify-center mx-auto mb-6">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-ink">Thanks — your enquiry is in</h1>
        <p className="text-slate max-w-[50ch] mx-auto mb-7">
          Our team will get back to you within 1 business day. For anything urgent, message us
          directly on WhatsApp.
        </p>
        <div className="flex gap-3.5 flex-wrap justify-center">
          <Button href="/" variant="dark">Back to Home</Button>
          <Button href={waLink("Hi GENOH")}>Chat on WhatsApp</Button>
        </div>
      </div>
    </div>
  );
}
