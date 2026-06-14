const services = [
  {
    icon: "✏️",
    title: "Design",
    desc: "Our in-house designers turn your ideas into bold, print-ready artwork. Brand new or refresh — we handle it all.",
  },
  {
    icon: "🖨️",
    title: "Print",
    desc: "Wide-format, large-format, or specialist print on any substrate. Sharp colours, fast turnaround, built to last.",
  },
  {
    icon: "🪧",
    title: "Sign",
    desc: "Professional fitting and installation UK-wide. We survey, manufacture, and install — no subcontractors.",
  },
  {
    icon: "🚗",
    title: "Vehicle Graphics",
    desc: "Full wraps, partial graphics, or fleet livery. Turn every vehicle into a moving advert for your brand.",
  },
  {
    icon: "🪟",
    title: "Window & Wall Graphics",
    desc: "Frosted films, full-colour murals, retail window displays — transforming blank surfaces into brand statements.",
  },
  {
    icon: "💡",
    title: "Illuminated Signs",
    desc: "LED built-up letters, lightboxes, and halo-lit channel letters for maximum visibility day and night.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-brand-grey">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2">
            What We Do
          </p>
          <h2 className="text-4xl font-black text-brand-dark">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg p-7 border border-gray-100 hover:border-brand-orange hover:shadow-md transition-all group"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="text-lg font-bold text-brand-dark mt-4 mb-2 group-hover:text-brand-orange transition-colors">
                {s.title}
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
