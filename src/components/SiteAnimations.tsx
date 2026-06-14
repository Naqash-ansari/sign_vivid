"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelectors = [
  "main > section",
  "main > div > section",
  "main article",
  "main aside",
  "main .grid > a",
  "main .grid > div",
  "main form",
].join(",");

const interactiveSelectors = [
  "a[class*='rounded']",
  "button[class*='rounded']",
  "main .group[class*='shadow']",
  "main .group[class*='border']",
].join(",");

export default function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.toggle("motion-ready", !reduceMotion);

    if (reduceMotion) {
      return;
    }

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const interactiveItems = Array.from(document.querySelectorAll<HTMLElement>(interactiveSelectors));

    revealItems.forEach((item, index) => {
      if (!item.dataset.animate) {
        item.dataset.animate = "reveal";
      }

      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    interactiveItems.forEach((item) => {
      item.dataset.motion = "lift";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
