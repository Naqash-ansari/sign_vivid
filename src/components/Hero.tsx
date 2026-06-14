import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">

      {/* Background accent stripe */}
      <div
        className="absolute -right-20 top-0 w-[420px] h-full bg-brand-grey"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">
            Design · Print · Sign
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-brand-dark mb-6">
            Signs That <br />
            <span className="text-brand-orange">Speak</span> for<br />
            Your Brand
          </h1>
          <p className="text-brand-mid text-lg leading-relaxed mb-8 max-w-md">
            From concept to installation, we craft high-impact signage that gets your business noticed — professionally made across the UK.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="bg-brand-orange text-white font-semibold px-7 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#work"
              className="border border-brand-dark text-brand-dark font-semibold px-7 py-3 rounded hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "12+",  label: "Years Experience"   },
            { value: "98%",  label: "Client Satisfaction" },
            { value: "UK",   label: "Nationwide Delivery" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <p className="text-3xl font-black text-brand-orange">{s.value}</p>
              <p className="text-sm text-brand-mid mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
