"use client";

import { useState } from "react";
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
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
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
    </>
  );
}
