import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Retail Fascia",
    tag: "Built-up Letters",
    description: "Illuminated fascia signage built for high-street visibility.",
  },
  {
    title: "Office Branding",
    tag: "Wall Graphics",
    description: "Clean reception branding with acrylic, vinyl, and print finishes.",
  },
  {
    title: "Fleet Livery",
    tag: "Vehicle Graphics",
    description: "Sharp vehicle graphics prepared for daily brand exposure.",
  },
  {
    title: "Exhibition Stand",
    tag: "Large Format Print",
    description: "Portable event graphics with a polished, on-brand finish.",
  },
  {
    title: "Shopfront Window",
    tag: "Window Film",
    description: "Privacy, promotion, and decorative vinyl for retail fronts.",
  },
  {
    title: "Outdoor Hoarding",
    tag: "Illuminated Sign",
    description: "Durable external signage planned for scale, light, and distance.",
  },
];

export default function Work({ showMore = true }: { showMore?: boolean }) {
  return (
    <section id="work" className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-orange">
            Portfolio
            </p>
            <h2 className="max-w-xl text-4xl font-black leading-tight text-brand-dark sm:text-5xl">
              Our Projects
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              A focused look at signs, print, and brand displays we create for
              shops, offices, events, and outdoor spaces across the UK.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-lg bg-[#f6f6f4] p-4 shadow-sm ring-1 ring-black/5">
            <div>
              <strong className="block text-3xl font-black text-brand-dark">6+</strong>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Services
              </span>
            </div>
            <div>
              <strong className="block text-3xl font-black text-brand-dark">UK</strong>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Coverage
              </span>
            </div>
            <div>
              <strong className="block text-3xl font-black text-brand-dark">24h</strong>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Quote
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-lg bg-brand-dark shadow-2xl shadow-black/15">
          <div className="relative aspect-[16/9] min-h-[320px]">
            <Image
              src="/images/sign-vivid-portfolio-montage.png"
              alt="A montage of Sign Vivid signage projects including shopfront signs, office branding, and illuminated displays"
              fill
              priority={!showMore}
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
                Featured Work
              </span>
              <h3 className="mt-2 max-w-2xl text-2xl font-black text-white sm:text-4xl">
                Custom signage made to look sharp from first glance.
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-xl"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                {p.tag}
              </span>
              <h3 className="mt-3 text-xl font-black text-brand-dark">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{p.description}</p>
              <span className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f4] text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                +
              </span>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/project"
              className="rounded bg-brand-orange px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
