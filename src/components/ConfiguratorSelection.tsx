import Link from "next/link";

const families = [
  { title: "Glass Neon", price: "Best for premium interiors", type: "outline", href: "/glass-neon-configurator" },
  { title: "LED Neon", price: "Flexible glow signage", type: "outline", href: "/led-neon-configurator" },
  { title: "Letters", price: "Built-up illuminated letters", type: "solid", href: "/letters-configurator" },
  { title: "Moss", price: "Green wall statement signs", type: "moss", href: "/moss-configurator" },
];

export default function ConfiguratorSelection() {
  return (
    <main className="min-h-screen bg-brand-grey">
      <section className="relative overflow-hidden px-6 pb-24 pt-28">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-white" />
          <div className="absolute right-0 top-0 h-full w-1/4 bg-[repeating-linear-gradient(135deg,#eeeeee_0,#eeeeee_4px,#f9f9f9_4px,#f9f9f9_10px)]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-brand-orange">
              Sign Vivid Configurator
            </p>
            <h1 className="text-4xl font-black tracking-tight text-brand-dark md:text-6xl">
              Choose a product family
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-brand-mid">
              Start with the closest signage type. You can customise design, sizing, lighting,
              mounting, and finishing options in the next step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {families.map((family) => (
              <Link
                key={family.title}
                href={family.href}
                className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl"
              >
                <div className="relative h-64 bg-gradient-to-b from-brand-dark to-[#111111]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,114,12,0.22),transparent_30%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`text-[150px] font-black leading-none ${
                        family.type === "moss"
                          ? "text-green-600 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                          : family.type === "solid"
                            ? "text-zinc-100 drop-shadow-[0_0_18px_rgba(232,114,12,0.45)]"
                            : "text-transparent [-webkit-text-stroke:8px_white] drop-shadow-[0_0_22px_rgba(232,114,12,0.65)]"
                      }`}
                    >
                      A
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-brand-dark">{family.title}</h2>
                  <p className="mt-2 text-sm text-brand-mid">{family.price}</p>
                  <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-orange">
                    Configure now
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
