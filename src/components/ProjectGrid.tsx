"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type ProjectCard = {
  title: string;
  category: string;
  location: string;
  image: string;
  summary: string;
};

type ProjectGridProps = {
  projects: ProjectCard[];
  initialCount?: number;
};

export default function ProjectGrid({
  projects,
  initialCount = 6,
}: ProjectGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";

    if (!lightbox) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
          >
            <div
              className="relative aspect-[16/10] overflow-hidden bg-brand-dark cursor-zoom-in"
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} image full screen`}
              onClick={() =>
                setLightbox({ src: project.image, alt: `${project.title} signage project by Sign Vivid` })
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setLightbox({ src: project.image, alt: `${project.title} signage project by Sign Vivid` });
                }
              }}
            >
              <Image
                src={project.image}
                alt={`${project.title} signage project by Sign Vivid`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 360px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 opacity-80 transition group-hover:opacity-95" />
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark shadow-sm">
                {project.category}
              </div>
              <div className="absolute bottom-4 right-4 translate-y-1 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-lg font-bold text-white shadow-lg">
                  +
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-brand-dark">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-orange">
                    {project.location}
                  </p>
                </div>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
              </div>
              <p className="text-sm leading-6 text-gray-600">
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      {hasMoreProjects ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount(projects.length)}
            className="rounded bg-brand-dark px-8 py-4 font-semibold text-white transition hover:bg-brand-orange"
          >
            More Projects
          </button>
        </div>
      ) : null}

      {mounted && lightbox
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={lightbox.alt}
              onClick={() => setLightbox(null)}
            >
              <div
                className="relative"
                style={{ width: "min(92vw, 1200px)", height: "82vh" }}
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close full screen image"
                className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                ✕
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
