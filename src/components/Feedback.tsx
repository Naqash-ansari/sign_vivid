import Image from "next/image";

const testimonials = [
  {
    quote:
      "The whole process was clear from the first design proof to the final fitting. The sign looks sharp, bright, and exactly right for our frontage.",
    name: "Adeel Khan",
    role: "Restaurant Owner",
    company: "Cluck Ville",
    image: "/images/projects/cluck-ville-front.png",
    accent: "Night-time visibility",
  },
  {
    quote:
      "Sign Vivid helped us turn a busy retail frontage into something cleaner and easier to recognise from the street. Fast, practical, and well finished.",
    name: "Martin Shaw",
    role: "Store Manager",
    company: "FIX TECH",
    image: "/images/projects/fix-tech-ai-enhanced.png",
    accent: "Retail fascia refresh",
  },
  {
    quote:
      "The team understood the look we wanted and made the installation feel straightforward. The finished shopfront has made a real difference locally.",
    name: "Sara Malik",
    role: "Founder",
    company: "Melluw",
    image: "/images/projects/melluw-shop-front.jpeg",
    accent: "Shopfront branding",
  },
];

export default function Feedback() {
  return (
    <section className="bg-[#f6f6f4] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-orange">
              Client Feedback
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight text-brand-dark sm:text-5xl">
              Trusted by businesses that need to be seen.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gray-600 lg:justify-self-end">
            From first artwork to final installation, our work is built around
            clear communication, durable materials, and signs that look right in
            the real world.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.company}
              className={`group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
                <Image
                  src={item.image}
                  alt={`${item.company} signage project`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark">
                  {item.accent}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1 text-brand-orange" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={`${item.company}-${starIndex}`}>*</span>
                    ))}
                  </div>
                  <span className="text-5xl font-black leading-none text-brand-orange/15">
                    &quot;
                  </span>
                </div>

                <p className="min-h-36 text-lg leading-8 text-brand-dark">
                  {item.quote}
                </p>

                <div className="mt-8 border-t border-gray-100 pt-5">
                  <p className="font-black text-brand-dark">{item.name}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brand-orange">
                    {item.role}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
