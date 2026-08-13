export type ProductVariant = {
  value: string;
  label: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  netQty: string;
  variants?: ProductVariant[];
  defaultVariant?: string;
  tagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  badges: string[];
  benefits: string[];
  directions: string;
  ingredients: string;
  precautions: string;
  metaTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "floor-cleaner",
    name: "GENOH Floor Cleaner",
    category: "Floor Care",
    netQty: "1L · 2L · 5L",
    variants: [
      { value: "1L", label: "1 Litre" },
      { value: "2L", label: "2 Litre" },
      { value: "5L", label: "5 Litre" },
    ],
    defaultVariant: "5L",
    tagline:
      "Deep-cleans tiles, marble, granite, ceramic & Kota stone. No need to rinse.",
    intro:
      "A powerful daily floor care formula that removes tough dirt and stains, kills germs and leaves a refreshing fragrance that keeps your home fresh and hygienic.",
    image: "/images/product-bottle.jpg",
    imageAlt: "GENOH Floor Cleaner 5 litre bottle, yellow cap, black label",
    badges: ["Non-Toxic", "No Rinse Needed", "All Floor Types"],
    benefits: ["Deep Clean", "Fresh Fragrance", "Germ Kill", "No Rinse Needed"],
    directions:
      "Dilute 2 capfuls (approx. 40ml) in 5 litres of water. Mop with a clean cloth or mop. No need to rinse — use slightly more for tough stains.",
    ingredients:
      "Water, non-ionic surfactant, preservatives, fragrance, disinfectant, colour.",
    precautions:
      "Keep out of reach of children. Avoid contact with eyes. Do not swallow — if swallowed, seek medical attention immediately. Store in a cool, dry place away from sunlight.",
    metaTitle: "GENOH Floor Cleaner 5L | Non-Toxic Daily Floor Care",
    metaDescription:
      "GENOH Floor Cleaner 5L removes tough dirt and stains, kills germs and leaves a long-lasting fresh fragrance. Suitable for tiles, marble, granite, ceramic and Kota stone.",
  },
  {
    slug: "toilet-cleaner",
    name: "GENOH Toilet Cleaner",
    category: "Bathroom Care",
    netQty: "500ML · 1L",
    variants: [
      { value: "500ml", label: "500 ml" },
      { value: "1L", label: "1 Litre" },
    ],
    defaultVariant: "500ml",
    tagline:
      "Thick formula that clings to the bowl, kills 99.9% of germs and leaves a fresh ocean scent.",
    intro:
      "A thick, clinging gel formula built for the toilet bowl — kills 99.9% of germs, lifts tough stains and leaves a fresh ocean fragrance behind.",
    image: "/images/toilet-cleaner.jpg",
    imageAlt: "GENOH Toilet Cleaner 500ml bottle with angled applicator neck",
    badges: ["Kills 99.9% Germs", "Thick Formula", "Ocean Fresh"],
    benefits: [
      "Kills 99.9% Germs",
      "Removes Tough Stains",
      "Fresh Ocean Fragrance",
      "Thick Formula — Better Coverage",
    ],
    directions:
      "Squeeze the thick gel under the rim and along the sides of the toilet bowl. For tough stains, let it sit for 5–10 minutes, then scrub with a toilet brush and flush.",
    ingredients:
      "Formulated with a thick cleaning base and disinfecting agents. Full ingredient list available on pack.",
    precautions:
      "Keep out of reach of children. Avoid contact with eyes and skin. Do not mix with other cleaning products or bleach. Use in a ventilated area. In case of eye or skin contact, rinse thoroughly with water; if swallowed, seek medical attention immediately.",
    metaTitle: "GENOH Toilet Cleaner 500ml | Kills 99.9% Germs",
    metaDescription:
      "GENOH Toilet Cleaner is a thick-formula gel that kills 99.9% of germs, removes tough stains and leaves a fresh ocean fragrance in every flush.",
  },
  {
    slug: "glass-cleaner",
    name: "GENOH Glass Cleaner",
    category: "Glass & Surface",
    netQty: "500 ML",
    tagline: "Streak-free, crystal-clear finish for windows, mirrors and glass surfaces.",
    intro:
      "A fast-acting spray formula for a streak-free, crystal-clear finish on windows, mirrors and glass surfaces around the home.",
    image: "/images/glass-cleaner.jpg",
    imageAlt: "GENOH Glass Cleaner 500ml trigger spray bottle",
    badges: ["Streak Free", "Crystal Clear", "Powerful Cleaning"],
    benefits: ["Streak Free", "Crystal Clear Finish", "Powerful Cleaning"],
    directions:
      "Spray directly onto the glass or mirror surface from about 15–20cm away. Wipe with a clean, dry or lint-free cloth for a streak-free shine.",
    ingredients:
      "Formulated with a fast-evaporating, streak-free cleaning base. Full ingredient list available on pack.",
    precautions:
      "Keep out of reach of children. Avoid contact with eyes. Use in a ventilated area. Not recommended for unsealed wood or delicate finishes — spot test first.",
    metaTitle: "GENOH Glass Cleaner 500ml | Streak-Free Shine",
    metaDescription:
      "GENOH Glass Cleaner gives a crystal-clear, streak-free finish on windows, mirrors and glass surfaces. Fast, powerful, easy to use.",
  },
  {
    slug: "dishwash-gel",
    name: "GENOH Dishwash Gel",
    category: "Kitchen Care",
    netQty: "250 ML",
    tagline:
      "Triple-action lemon-fresh gel that cuts grease, lifts stains and is gentle on hands.",
    intro:
      "A triple-action, lemon-fresh dishwash gel that cuts through tough grease, removes stains and odour, and stays gentle on hands.",
    image: "/images/dishwash-gel.jpg",
    imageAlt: "GENOH Dishwash Gel 250ml, lemon fresh, yellow gel",
    badges: ["Triple Action", "Lemon Fresh", "Gentle on Hands"],
    benefits: [
      "Cuts Tough Grease",
      "Removes Stain & Odour",
      "Sparkling Clean",
      "Gentle on Hands",
    ],
    directions:
      "Apply a small amount to a wet scrub pad or directly onto dishes. Lather, scrub and rinse thoroughly with water.",
    ingredients:
      "Formulated with a natural-active, lemon-fresh cleaning base. Full ingredient list available on pack.",
    precautions:
      "Keep out of reach of children. Avoid prolonged skin contact — if irritation occurs, rinse with water. Avoid contact with eyes.",
    metaTitle: "GENOH Dishwash Gel 250ml | Lemon Fresh, Triple Action",
    metaDescription:
      "GENOH Dishwash Gel is a triple-action, lemon-fresh formula that cuts tough grease, removes stains and odour, and is gentle on hands.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const comingSoonProducts = [
  {
    name: "Liquid Hand Wash",
    category: "Hand Wash",
    netQty: "500 ML",
    tagline: "Neem & aloe vera hand wash for everyday germ protection, gentle on skin.",
  },
  {
    name: "Liquid Detergent",
    category: "Laundry Care",
    netQty: "1 LTR",
    tagline:
      "Advanced stain-removal detergent for machine and hand wash, long-lasting freshness.",
  },
  {
    name: "Dishwash Tub",
    category: "Kitchen Care",
    netQty: "500 G",
    tagline: "Long-lasting grease-cutting dishwash paste with fresh lemon fragrance.",
  },
];

export const homeFaqs = [
  {
    question: "Is GENOH Floor Cleaner safe for daily use?",
    answer:
      "Yes. It's formulated to be gentle on hands and safe for daily use across most hard floor surfaces, while still cutting through everyday dirt and germs.",
  },
  {
    question: "Which floor types is GENOH suitable for?",
    answer:
      "GENOH works well on tiles, marble, granite, ceramic and Kota stone. If you have an unsealed wood or a delicate natural finish, spot-test in a small area first.",
  },
  {
    question: "How much should I use per bucket?",
    answer:
      "Dilute 2 capfuls (approximately 40ml) in 5 litres of water. For tough stains, use slightly more concentrate. There's no need to rinse after mopping.",
  },
  {
    question: "Do you deliver in bulk for businesses?",
    answer:
      "Yes — we supply hotels, housekeeping agencies, schools, offices and retailers. Use the enquiry form above with your required quantity, or message us on WhatsApp.",
  },
  {
    question: "Where is GENOH made?",
    answer:
      "GENOH Floor Cleaner is manufactured by GENOH Clean Products in Rajgarh, Rajasthan, India.",
  },
  {
    question: "How long does one bottle of GENOH Floor Cleaner last?",
    answer:
      "It depends on how often you mop, but the dilution ratio is designed to stretch — 2 capfuls (about 40ml) per 5 litres of water means a single 5L bottle makes up a large number of mopping-bucket batches before it runs out.",
  },
  {
    question: "Can I mix GENOH Floor Cleaner with other cleaning products?",
    answer:
      "We don't recommend mixing any cleaning product with another, including bleach-based ones — combining chemicals can be unpredictable and, in some cases, release harmful fumes. Use GENOH on its own for the best and safest result.",
  },
  {
    question: "How should I store GENOH products?",
    answer:
      "Keep bottles in a cool, dry place away from direct sunlight, tightly capped when not in use, and out of reach of children — the same guidance printed on every GENOH label.",
  },
  {
    question: "Does GENOH work in hard water areas?",
    answer:
      "Yes, GENOH's cleaning base is formulated to still cut through dirt and grime in hard water conditions, though very heavy mineral buildup — like waterline rings in a toilet bowl — may need a slightly longer dwell time before scrubbing.",
  },
];
