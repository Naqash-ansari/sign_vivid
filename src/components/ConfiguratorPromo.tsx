import Link from "next/link";

export default function ConfiguratorPromo() {
  return (
    <section className="bg-brand-grey px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Configure Online
          </p>
          <h2 className="text-4xl font-black text-brand-dark">Design your sign before you enquire</h2>
          <p className="mt-3 max-w-2xl text-brand-mid">
            Try a guided configurator for lettering, lighting, colour, mounting, and background options.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
          <div className="pointer-events-none select-none blur-[1.5px]">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute inset-y-0 left-0 w-[24%] bg-white/75" />
              <div className="absolute inset-y-0 left-[24%] w-[36%] bg-gradient-to-r from-zinc-200 to-zinc-400" />
              <div className="absolute inset-y-0 right-0 w-[24%] bg-white/90" />
              <div className="absolute right-[24%] top-0 h-full w-[18%] bg-[repeating-linear-gradient(135deg,#d6d6d6_0,#d6d6d6_3px,#f4f4f4_3px,#f4f4f4_8px)]" />
            </div>

            <div className="relative grid min-h-[420px] lg:grid-cols-[1fr_300px]">
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div className="flex flex-wrap gap-4 rounded-lg bg-white/85 p-3 shadow-sm backdrop-blur">
                  {["Design", "Size", "Colour", "Location", "Background", "Extras"].map((tab, index) => (
                    <span
                      key={tab}
                      className={`rounded-full px-6 py-2 text-sm font-bold ${index === 0 ? "bg-brand-dark text-white" : "bg-gray-100 text-gray-300"
                        }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                <div className="mx-auto flex flex-col items-center py-20 text-center">
                  <h2
                    className="text-6xl font-black text-white md:text-8xl"
                    style={{ textShadow: "0 0 14px rgba(255,255,255,.9), 0 5px 14px rgba(0,0,0,.35)" }}
                  >
                    SIGN VIVID
                  </h2>
                </div>

                <div className="flex gap-3">
                  {["image", "reset", "share"].map((tool) => (
                    <span
                      key={tool}
                      className="flex h-11 w-16 items-center justify-center rounded-full bg-black/20 text-xs font-bold uppercase text-white"
                    >
                      {tool.slice(0, 2)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden bg-white/95 p-6 shadow-2xl lg:block">
                <h3 className="text-center text-3xl font-light text-brand-dark">Design</h3>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <span className="rounded border border-orange-200 bg-white px-3 py-3 text-center text-sm font-bold text-brand-dark shadow-[0_0_12px_rgba(232,114,12,0.35)]">
                    Enter text
                  </span>
                  <span className="rounded border border-gray-200 px-3 py-3 text-center text-sm font-bold text-gray-400">
                    Upload
                  </span>
                </div>
                <div className="mt-4 h-28 rounded border border-gray-200 bg-white p-4 text-sm text-brand-mid">
                  SIGN VIVID
                </div>
                <div className="mx-auto mt-7 w-40 rounded bg-brand-orange py-3 text-center text-sm font-bold text-white">
                  Update
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["A", "A", "a", "A", "A", "A"].map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      className={`rounded bg-white p-3 text-center text-3xl font-serif shadow ${index === 2 ? "ring-2 ring-orange-200" : ""
                        }`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 z-10 bg-white/5" aria-hidden="true" />
          <Link
            href="/configurator-selection"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded bg-brand-orange px-8 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(232,114,12,0.35)] transition hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Start Configurator
          </Link>
        </div>
      </div>
    </section>
  );
}
