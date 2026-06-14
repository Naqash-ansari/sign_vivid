import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const priceCards = [
  {
    title: "LED Neon",
    style: "Direct to wall",
    size: "50 x 15 cm",
    price: "From £295",
    note: "Flexible LED neon-style signage for interiors, events and retail spaces.",
    meta: ["Indoor", "Clear backing", "Single colour"],
  },
  {
    title: "Built-Up Letters",
    style: "Front-lit",
    size: "80 x 20 cm",
    price: "From £420",
    note: "Premium dimensional letters for fascia signs, receptions and branded walls.",
    meta: ["Indoor / Outdoor", "Wall mounted", "Lit or non-lit"],
  },
  {
    title: "Flat Cut Letters",
    style: "Acrylic or metal",
    size: "80 x 20 cm",
    price: "From £180",
    note: "Clean, professional lettering for offices, shopfronts and wayfinding.",
    meta: ["Fast turnaround", "Multiple finishes", "Template supplied"],
  },
  {
    title: "Lightboxes",
    style: "Illuminated display",
    size: "60 x 30 cm",
    price: "From £380",
    note: "Bright display boxes for retail, reception, exterior and projecting signs.",
    meta: ["Printed face", "LED lighting", "Custom depth"],
  },
  {
    title: "Moss Letters",
    style: "Preserved moss",
    size: "100 x 25 cm",
    price: "From £360",
    note: "Natural-look branding for interiors, hospitality and feature walls.",
    meta: ["Indoor", "Low maintenance", "Logo option"],
  },
  {
    title: "Moss Walls",
    style: "Feature panel",
    size: "100 x 50 cm",
    price: "From £520",
    note: "Statement green walls with optional lettering, logo panels or lighting.",
    meta: ["Panel system", "Mixed foliage", "Custom layout"],
  },
];

const process = [
  {
    step: "01",
    title: "Send your brief",
    text: "Tell us the sign type, size, location and deadline. Upload artwork, a sketch, or simply describe the idea.",
  },
  {
    step: "02",
    title: "Free quote & preview",
    text: "We review the details and send a clear UK quote with material guidance, production notes and a visual direction.",
  },
  {
    step: "03",
    title: "Artwork approval",
    text: "You approve the layout, colours, size and finish before anything goes into production.",
  },
  {
    step: "04",
    title: "Production & delivery",
    text: "Your signage is manufactured, checked and delivered. If installation is required, we arrange the next step.",
  },
];

const leadTimes = [
  ["LED Neon", "10-15 working days", "7-10 working days", "Best for fast illuminated interiors"],
  ["Built-Up Letters lit", "15-20 working days", "10-15 working days", "Lighting and finish can affect time"],
  ["Built-Up Letters non-lit", "10-15 working days", "7-10 working days", "Often faster than illuminated letters"],
  ["Flat Cut Letters", "7-10 working days", "5-7 working days", "Simple shapes can be quicker"],
  ["Lightboxes", "10-20 working days", "Quoted per job", "Depends on size and fabrication"],
  ["Moss / Plant Walls", "10-15 working days", "Quoted per job", "Add time for complex logo work"],
];

const installation = [
  {
    title: "Survey & access",
    text: "For larger or exterior signs, we may need photos, measurements, wall material and access details before quoting installation.",
  },
  {
    title: "Self-install options",
    text: "Many indoor signs can be supplied with templates, fixings and guidance for local fitting or self-installation.",
  },
  {
    title: "UK installation support",
    text: "Where suitable, we can arrange fitting support across the UK and include it as part of your offer.",
  },
];

export const metadata = {
  title: "Prices & Process | Sign Vivid",
  description: "UK guide pricing, order process, production lead times and installation support for Sign Vivid signage.",
};

export default function PricesAndProcessPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16 text-brand-dark">
        <section className="relative overflow-hidden bg-brand-grey px-6 py-20">
          <div
            className="absolute -right-24 top-0 h-full w-[420px] bg-white"
            style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">
              Prices & Process
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              UK signage pricing, production and installation guidance.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-mid">
              Every Sign Vivid project is made to order. The examples below help you understand
              what affects pricing before we prepare a tailored quote for your size, finish,
              lighting and location.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded bg-brand-orange px-7 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/configurator-selection"
                className="rounded border border-brand-dark px-7 py-3 font-bold text-brand-dark transition hover:border-brand-orange hover:text-brand-orange"
              >
                Open Configurator
              </Link>
            </div>
          </div>
        </section>

        <AnchorNav />

        <section id="price" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Price Comparison"
              title="Example UK guide pricing"
              text="These figures are guide examples only. Final pricing depends on size, material, lighting, finish, access and installation requirements."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {priceCards.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl"
                >
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-dark to-[#111]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,114,12,0.24),transparent_34%)]" />
                    <span className="relative rounded bg-white/90 px-8 py-4 text-3xl font-black text-brand-dark shadow-lg">
                      {item.title.split(" ")[0]}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">{item.style}</p>
                    <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-brand-mid">{item.size}</p>
                    <p className="mt-5 text-3xl font-black text-brand-orange">{item.price}</p>
                    <p className="mt-1 text-xs font-semibold text-brand-mid">Guide price, ex. VAT and installation</p>
                    <p className="mt-4 text-sm leading-relaxed text-brand-mid">{item.note}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.meta.map((meta) => (
                        <span key={meta} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-brand-orange">
                          {meta}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="bg-brand-dark px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Order Process"
              title="How it works"
              text="A simple route from first idea to finished signage."
              dark
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.step} className="rounded-lg border border-white/10 p-6">
                  <span className="text-sm font-black text-brand-orange">{item.step}</span>
                  <h2 className="mt-5 text-xl font-black">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/quote"
                className="inline-flex rounded bg-brand-orange px-7 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Start Your Quote
              </Link>
            </div>
          </div>
        </section>

        <section id="shipping" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Lead Times"
              title="Typical production windows"
              text="Lead times are shown in UK working days after artwork approval and deposit/payment confirmation."
            />
            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
              <div className="hidden grid-cols-[1.2fr_1fr_1fr_1.4fr] bg-brand-dark px-5 py-4 text-sm font-bold uppercase tracking-widest text-white md:grid">
                <p>Product</p>
                <p>Standard</p>
                <p>Express</p>
                <p>Notes</p>
              </div>
              {leadTimes.map(([product, standard, express, note], index) => (
                <div
                  key={product}
                  className={`grid gap-2 px-5 py-5 md:grid-cols-[1.2fr_1fr_1fr_1.4fr] ${
                    index % 2 === 0 ? "bg-white" : "bg-brand-grey"
                  }`}
                >
                  <p className="font-bold">{product}</p>
                  <p className="text-sm font-semibold text-brand-mid">
                    <span className="md:hidden">Standard: </span>
                    {standard}
                  </p>
                  <p className="text-sm font-semibold text-brand-orange">
                    <span className="md:hidden">Express: </span>
                    {express}
                  </p>
                  <p className="text-sm text-brand-mid">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <p className="rounded-lg bg-brand-grey p-5 text-sm leading-relaxed text-brand-mid">
                Delivery is usually arranged by UK courier or direct delivery depending on size,
                fragility and postcode. Delivery costs are confirmed in your quote.
              </p>
              <p className="rounded-lg bg-brand-grey p-5 text-sm leading-relaxed text-brand-mid">
                Express production may carry a surcharge and is subject to material availability,
                design approval speed and workshop capacity.
              </p>
            </div>
          </div>
        </section>

        <section id="mounting" className="bg-brand-grey px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Installation"
              title="Fitting support and mounting guidance"
              text="We help you choose the right mounting method for your sign, wall type and location."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {installation.map((item) => (
                <article key={item.title} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-5 h-2 w-2 rounded-full bg-brand-orange" />
                  <h2 className="text-xl font-black">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-mid">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-lg bg-white p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <h2 className="text-2xl font-black">Need a site-specific answer?</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-mid">
                  Send photos, measurements and postcode. We will advise whether self-install,
                  local fitting or Sign Vivid installation support is the best route.
                </p>
              </div>
              <Link
                href="/quote"
                className="mt-5 inline-flex rounded bg-brand-orange px-7 py-3 font-bold text-white transition hover:bg-orange-600 md:mt-0"
              >
                Ask for Installation Advice
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AnchorNav() {
  const items = [
    ["Price comparison", "#price"],
    ["Order process", "#order"],
    ["Lead times", "#shipping"],
    ["Installation", "#mounting"],
  ];

  return (
    <div className="sticky top-16 z-30 border-y border-gray-100 bg-white/95 px-6 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl gap-3 overflow-x-auto py-4">
        {items.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-mid transition hover:border-brand-orange hover:text-brand-orange"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</p>
      <h2 className={`text-4xl font-black ${dark ? "text-white" : "text-brand-dark"}`}>{title}</h2>
      <p className={`mt-3 max-w-2xl text-sm leading-relaxed md:text-base ${dark ? "text-white/65" : "text-brand-mid"}`}>
        {text}
      </p>
    </div>
  );
}
