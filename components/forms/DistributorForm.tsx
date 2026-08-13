import { site } from "@/lib/data/site";

const inputClass =
  "border-[1.5px] border-line rounded-[10px] px-3.5 py-3 text-[14.5px] bg-paper text-charcoal focus:border-lime-deep outline-none w-full";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}

export function DistributorForm() {
  return (
    <form
      className="bg-white border border-line rounded-[18px] p-7.5 shadow-[0_20px_50px_-20px_rgba(11,18,12,0.35)]"
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
    >
      <input type="hidden" name="_subject" value="GENOH Distributor / Business Partnership Enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_next" value="/thank-you" />
      <input type="text" name="_honey" className="absolute -left-[9999px] -top-[9999px]" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-2 max-[560px]:grid-cols-1 gap-4">
        <Field id="d-company" label="Company / Firm name">
          <input id="d-company" type="text" name="Company Name" required className={inputClass} />
        </Field>
        <Field id="d-contact" label="Contact person">
          <input id="d-contact" type="text" name="Contact Person" required className={inputClass} />
        </Field>
        <Field id="d-phone" label="Phone number">
          <input id="d-phone" type="tel" name="Phone" required className={inputClass} />
        </Field>
        <Field id="d-email" label="Email address">
          <input id="d-email" type="email" name="Email" required className={inputClass} />
        </Field>
        <Field id="d-city" label="City / Region">
          <input id="d-city" type="text" name="City / Region" required className={inputClass} />
        </Field>
        <Field id="d-type" label="Business type">
          <select id="d-type" name="Business Type" className={inputClass}>
            <option>Distributor</option>
            <option>Wholesaler</option>
            <option>Retailer</option>
            <option>Institutional Buyer</option>
            <option>Online Seller / Marketplace</option>
            <option>Private Label Enquiry</option>
            <option>Other</option>
          </select>
        </Field>
        <Field id="d-gst" label="GST number (if applicable)">
          <input id="d-gst" type="text" name="GST Number" className={inputClass} />
        </Field>
        <Field id="d-volume" label="Expected monthly volume">
          <input id="d-volume" type="text" name="Expected Volume" placeholder="e.g. 500 units/month" className={inputClass} />
        </Field>
        <div className="col-span-full">
          <Field id="d-products" label="Products of interest">
            <input
              id="d-products"
              type="text"
              name="Products of Interest"
              placeholder="e.g. Floor Cleaner, Toilet Cleaner"
              className={inputClass}
            />
          </Field>
        </div>
        <div className="col-span-full flex flex-col gap-1.5">
          <label htmlFor="d-msg" className="text-[13px] font-semibold text-charcoal">
            Message
          </label>
          <textarea
            id="d-msg"
            name="Message"
            placeholder="Tell us about your business and requirement"
            className={`${inputClass} resize-y min-h-25`}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap mt-1.5">
        <span className="text-[12.5px] text-slate">
          We&rsquo;ll only use these details to respond to your partnership enquiry.
        </span>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-lime text-ink px-6.5 py-3.5 text-[15.5px] shadow-[0_10px_24px_-10px_rgba(142,210,47,0.7)] hover:bg-lime-deep transition-[transform,background] hover:-translate-y-0.5"
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}
