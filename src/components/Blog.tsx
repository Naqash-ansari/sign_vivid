import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "How to choose a fascia sign that works from the street",
    excerpt:
      "A quick guide to sizing, contrast, lighting, and letter depth for shopfronts that need to be noticed before customers reach the door.",
    category: "Shopfronts",
    readTime: "4 min read",
    image: "/images/projects/lane-ends-illuminated.jpg",
    href: "/project",
  },
  {
    title: "Illuminated letters, lightboxes, or halo lighting?",
    excerpt:
      "The right lighting choice depends on your frontage, opening hours, brand style, and how much impact you need after dark.",
    category: "Lighting",
    readTime: "5 min read",
    image: "/images/projects/cluck-ville-front.png",
    href: "/prices-and-process",
  },
  {
    title: "What to prepare before asking for a sign quote",
    excerpt:
      "Photos, rough measurements, logo files, postcode, and deadline details help us price faster and recommend the best route.",
    category: "Planning",
    readTime: "3 min read",
    image: "/images/projects/fix-tech-ai-enhanced.png",
    href: "/quote",
  },
  {
    title: "Making hotel and hospitality signage feel premium",
    excerpt:
      "Small decisions around finish, spacing, mounting, and colour can make a sign feel calm, polished, and properly fitted to the building.",
    category: "Brand Finish",
    readTime: "4 min read",
    image: "/images/projects/dream-hotel.jpeg",
    href: "/project",
  },
  {
    title: "Window graphics that promote without blocking the shop",
    excerpt:
      "Vinyl, privacy film, and printed window graphics can add brand presence while keeping the space bright and easy to browse.",
    category: "Graphics",
    readTime: "4 min read",
    image: "/images/projects/melluw-shop-front.jpeg",
    href: "/support",
  },
];

export default function Blog() {
  const [featured, ...articles] = posts;

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-orange">
            Blog
          </p>
          <h2 className="text-4xl font-black leading-tight text-brand-dark sm:text-5xl">
            Signage ideas before you start your next project.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Practical notes from shopfronts, illuminated signs, window graphics,
            and installation planning. Written for business owners, not sign
            industry jargon.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article className="group overflow-hidden rounded-lg bg-brand-dark text-white shadow-2xl shadow-black/15 md:col-span-2">
            <div className="relative min-h-[420px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 760px"
                className="object-cover opacity-85 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest">
                  <span className="rounded-full bg-brand-orange px-3 py-1.5">
                    {featured.category}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-white/80">
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="max-w-xl text-3xl font-black leading-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                  {featured.excerpt}
                </p>
                <Link
                  href={featured.href}
                  className="mt-6 inline-flex rounded bg-white px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-brand-orange hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </article>

          {articles.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-[#f6f6f4] shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {post.readTime}
                </p>
                <h3 className="text-xl font-black leading-tight text-brand-dark">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex text-sm font-bold text-brand-dark underline decoration-brand-orange decoration-2 underline-offset-4 transition hover:text-brand-orange"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
