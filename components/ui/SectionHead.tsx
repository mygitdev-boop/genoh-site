import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  children,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-160 mb-12 ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border mb-4.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full ${
          dark
            ? "text-lime bg-lime/14 border-lime/40 before:bg-lime"
            : "text-forest bg-lime/16 border-lime/40 before:bg-lime-deep"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`text-[clamp(28px,3.4vw,42px)] ${dark ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {children && (
        <p className={`text-[17px] mt-2 ${dark ? "text-paper-dim" : "text-slate"}`}>{children}</p>
      )}
    </div>
  );
}
