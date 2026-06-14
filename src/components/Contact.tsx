import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-grey px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">
          Free Quote
        </p>
        <h2 className="text-4xl font-black text-brand-dark">Ready to price your signage?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-mid">
          Answer a few quick questions and we will prepare a free preview and offer for your project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="rounded bg-brand-orange px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Start Quote
          </Link>
          <a
            href="mailto:hello@signvivid.co.uk"
            className="rounded border border-brand-dark px-7 py-3 font-semibold text-brand-dark transition hover:border-brand-orange hover:text-brand-orange"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
