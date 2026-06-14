import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Projects | Sign Vivid",
  description:
    "Explore Sign Vivid signage projects including shopfront fascias, illuminated signs, hotel signage, and retail branding.",
};

const projects = [
  {
    title: "Lane Ends Food",
    category: "Illuminated Fascia",
    location: "Retail signage",
    image: "/images/projects/lane-ends-illuminated.jpg",
    summary:
      "A high-impact corner shopfront with bright illuminated lettering, dark fascia panels, and clear street visibility.",
    featured: true,
  },
  {
    title: "Novara",
    category: "External Illuminated Sign",
    location: "Automotive showroom",
    image: "/images/projects/novara-front.png",
    summary:
      "Crisp white illuminated lettering designed to stand out clearly at night across a wide commercial frontage.",
  },
  {
    title: "Cluck Ville",
    category: "Illuminated Shopfront",
    location: "Food and takeaway",
    image: "/images/projects/cluck-ville-front.png",
    summary:
      "Bold red illuminated border lighting with 3D fascia lettering, built to give the restaurant strong night-time street presence.",
  },
  {
    title: "FIX TECH",
    category: "Retail Fascia Refresh",
    location: "Mobile and tech retail",
    image: "/images/projects/fix-tech-ai-enhanced.png",
    summary:
      "A bright high-street fascia with bold dimensional lettering, improved street visibility, and a clean retail frontage presentation.",
  },
  {
    title: "Dream Hotel",
    category: "Hotel Fascia Sign",
    location: "Hospitality",
    image: "/images/projects/dream-hotel.jpeg",
    summary:
      "Minimal black fascia with clean white graphics, built to sit neatly within an existing building elevation.",
  },
  {
    title: "Melluw",
    category: "Shopfront Branding",
    location: "Food and takeaway",
    image: "/images/projects/melluw-shop-front.jpeg",
    summary:
      "Bold colour-led shopfront signage supported by window display graphics for strong local recognition.",
  },
  {
    title: "YumYo",
    category: "Full Shopfront Graphics",
    location: "Food and dessert",
    image: "/images/projects/yumyo-shopfront-ai.png",
    summary:
      "A complete food retail frontage with bold fascia panels, window graphics, and strong orange brand impact.",
  },
  {
    title: "Lane Ends Front",
    category: "Fascia Concept",
    location: "Retail frontage",
    image: "/images/projects/lane-ends-front.jpg",
    summary:
      "Wide fascia layout planned for clear hierarchy across the main name, category, and supporting message.",
  },
];

const stats = [
  ["Retail", "Shopfronts"],
  ["LED", "Illumination"],
  ["UK", "Coverage"],
  ["Custom", "Fabrication"],
];

export default function ProjectPage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <>
      <Navbar />
      <main className="bg-[#f6f6f4] pt-16">
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-brand-orange">
                  Portfolio
                </p>
                <h1 className="max-w-3xl text-5xl font-black leading-none text-brand-dark sm:text-6xl lg:text-7xl">
                  Real signage projects, built for real businesses.
                </h1>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
                <p className="text-lg leading-8 text-gray-600">
                  From hotel fascia signs to retail shopfronts and illuminated
                  commercial displays, every project is planned around visibility,
                  finish, and how the brand looks from the street.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map(([value, label]) => (
                    <div key={value} className="rounded-lg bg-[#f6f6f4] p-4">
                      <strong className="block text-2xl font-black text-brand-dark">
                        {value}
                      </strong>
                      <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-brand-dark shadow-2xl shadow-black/20">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative min-h-[360px] lg:min-h-[560px]">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} signage project by Sign Vivid`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-8 text-white sm:p-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-orange">
                    Featured Project
                  </span>
                  <h2 className="mt-5 text-4xl font-black leading-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/50">
                    {featuredProject.category}
                  </p>
                  <p className="mt-8 text-lg leading-8 text-white/75">
                    {featuredProject.summary}
                  </p>
                </div>
                <div className="mt-10 border-t border-white/15 pt-8">
                  <p className="text-sm uppercase tracking-widest text-white/45">
                    Project focus
                  </p>
                  <p className="mt-2 text-xl font-bold">{featuredProject.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-orange">
                  Selected Work
                </p>
                <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">
                  Shopfronts, fascias and illuminated displays
                </h2>
              </div>
              <Link
                href="/quote"
                className="inline-flex w-fit rounded bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Start a project
              </Link>
            </div>

            <ProjectGrid projects={otherProjects} initialCount={6} />
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-orange">
                  Have a sign in mind?
                </p>
                <h2 className="mt-3 text-3xl font-black text-brand-dark">
                  Send us your brief and we will guide the best route.
                </h2>
              </div>
              <Link
                href="/quote"
                className="inline-flex justify-center rounded bg-brand-dark px-8 py-4 font-semibold text-white transition hover:bg-brand-orange"
              >
                Request a Free Offer
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
