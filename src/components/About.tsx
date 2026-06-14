export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl font-black mb-6 leading-tight">
            Built on Craft,<br />Driven by Results
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Sign Vivid is a full-service signage company based in the UK. We&apos;ve been helping businesses look their best since day one — from independent shops to national brands.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every project is handled in-house: design, production, and installation. No passing the buck, no subcontractors — just a single team accountable from brief to sign-off.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "In-house Production",  desc: "Full control over quality at every stage."       },
            { label: "UK-wide Installation",  desc: "Our own teams, not subcontractors."              },
            { label: "Fast Turnaround",       desc: "Most orders dispatched within 5 working days."  },
            { label: "10-Year Guarantee",     desc: "Confidence in the materials we fit."            },
          ].map((i) => (
            <div key={i.label} className="border border-white/10 rounded-lg p-5">
              <div className="w-2 h-2 rounded-full bg-brand-orange mb-3" />
              <p className="font-semibold text-sm mb-1">{i.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
