import Link from "next/link";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-32">
      <div
        className="absolute -right-20 top-0 h-full w-[420px] bg-brand-grey"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="hero-copy">
          <p className="hero-kicker mb-4 text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Design - Print - Sign
          </p>
          <h1 className="mb-6 text-5xl font-black leading-tight text-brand-dark md:text-6xl">
            <span className="hero-word-line">Signs That</span>
            <br />
            <span className="hero-word-line">
              <span className="text-brand-orange">Speak</span> for
            </span>
            <br />
            <span className="hero-word-line">Your Brand</span>
          </h1>
          <p className="hero-summary mb-8 max-w-md text-lg leading-relaxed text-brand-mid">
            From concept to installation, we craft high-impact signage that gets your business noticed -- professionally made across the UK.
          </p>
          <div className="hero-actions flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded bg-brand-orange px-7 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#work"
              className="rounded border border-brand-dark px-7 py-3 font-semibold text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
