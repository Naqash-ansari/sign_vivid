"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: "UK", label: "Nationwide Delivery" },
];

export default function HeroStats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const frame = requestAnimationFrame(() => setStarted(true));
      return () => cancelAnimationFrame(frame);
    }

    const root = rootRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-xl"
          style={{ animationDelay: `${index * 110}ms` }}
        >
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange-100/60 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
          <p className="relative text-3xl font-black text-brand-orange">
            {typeof stat.value === "number" ? (
              <CountUp end={stat.value} suffix={stat.suffix} started={started} />
            ) : (
              <span className={started ? "hero-letter-pop" : ""}>{stat.value}</span>
            )}
          </p>
          <p className="relative mt-1 text-sm text-brand-mid">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function CountUp({
  end,
  suffix,
  started,
}: {
  end: number;
  suffix?: string;
  started: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) {
      return;
    }

    const duration = 1300;
    const startTime = performance.now();
    let frame = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [end, started]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
