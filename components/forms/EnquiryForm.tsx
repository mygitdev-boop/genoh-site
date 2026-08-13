"use client";

import { useState } from "react";
import { site } from "@/lib/data/site";

export function EnquiryForm({
  idPrefix,
  subject,
  messageRequired = false,
}: {
  idPrefix: string;
  subject: string;
  messageRequired?: boolean;
}) {
  const [qty, setQty] = useState("");

  return (
    <form
      className="bg-white border border-line rounded-[18px] p-7.5 shadow-[0_20px_50px_-20px_rgba(11,18,12,0.35)]"
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
    >
      <input type="hidden" name="_subject" value={qty ? `${subject} — Qty: ${qty}` : subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_next" value="/thank-you" />
      <input type="text" name="_honey" className="absolute -left-[9999px] -top-[9999px]" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-2 max-[560px]:grid-cols-1 gap-4">
        <Field id={`${idPrefix}-name`} label="Full name">
          <input id={`${idPrefix}-name`} type="text" name="Name" required className={inputClass} />
        </Field>
        <Field id={`${idPrefix}-phone`} label="Phone number">
          <input id={`${idPrefix}-phone`} type="tel" name="Phone" required className={inputClass} />
        </Field>
        <Field id={`${idPrefix}-email`} label="Email address">
          <input id={`${idPrefix}-email`} type="email" name="Email" required className={inputClass} />
        </Field>
        <Field id={`${idPrefix}-city`} label="City">
          <input id={`${idPrefix}-city`} type="text" name="City" className={inputClass} />
        </Field>
        <Field id={`${idPrefix}-interest`} label="I'm enquiring about">
          <select id={`${idPrefix}-interest`} name="Enquiry Type" className={inputClass}>
            <option>5L Floor Cleaner — Retail</option>
            <option>Bulk / Institutional Order</option>
            <option>Distributorship / Reselling</option>
            <option>General Question</option>
          </select>
        </Field>
        <Field id={`${idPrefix}-qty`} label="Quantity required">
          <input
            id={`${idPrefix}-qty`}
            type="text"
            name="Quantity"
            placeholder="e.g. 50 bottles / 200L"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className={inputClass}
          />
        </Field>
        <div className="col-span-full flex flex-col gap-1.5">
          <label htmlFor={`${idPrefix}-msg`} className="text-[13px] font-semibold text-charcoal">
            Message
          </label>
          <textarea
            id={`${idPrefix}-msg`}
            name="Message"
            placeholder="Tell us a bit about your requirement"
            required={messageRequired}
            className={`${inputClass} resize-y min-h-25`}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap mt-1.5">
        <span className="text-[12.5px] text-slate">
          We&rsquo;ll only use these details to respond to your enquiry.
        </span>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-lime text-ink px-6.5 py-3.5 text-[15.5px] shadow-[0_10px_24px_-10px_rgba(142,210,47,0.7)] hover:bg-lime-deep transition-[transform,background] hover:-translate-y-0.5"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "border-[1.5px] border-line rounded-[10px] px-3.5 py-3 text-[14.5px] bg-paper text-charcoal focus:border-lime-deep outline-none w-full";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}
