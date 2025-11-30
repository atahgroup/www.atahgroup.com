"use client";

import React, { useEffect, useRef, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import PortfolioCard from "./PortfolioCard";

type Project = {
  id: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
  tags?: string[];
  link?: string;
};

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AtahGroup Website",
    summary: "A modern responsive website focused on style and accessibility.",
    date: "2025-11-20",
    image: "/assets/placeholder-1.jpg",
    tags: ["Next.js", "Tailwind", "Accessibility"],
    link: "/",
  },
  {
    id: "p3",
    title: "Nitrate Language Compiler",
    summary: "A fast, safe, and modern applications programming language.",
    date: "2024-02-15",
    image: "/assets/placeholder-1.jpg",
    tags: [
      "Rust",
      "Compiler Development",
      "Language Design",
      "LLVM",
      "Performance",
    ],
    link: "https://github.com/nitrate-lang/nitrate",
  },
  {
    id: "p2",
    title: "MyNote App",
    summary: "A free note taking service with particle effects and style.",
    date: "2025-11-29",
    image: "/assets/placeholder-1.jpg",
    tags: ["Postgres", "Google APIs", "Tailwind", "Animations"],
    link: "/portfolio/mynote",
  },
];

export default function PortfolioVerticalView({
  projects = SAMPLE_PROJECTS,
}: {
  projects?: Project[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleIds, setVisibleIds] = useState<Record<string, boolean>>({});
  // simple client-side init: default to med, then sync from localStorage asynchronously
  // particles run in high density by default (no density controls)
  // particles always active by default (no `paused` state)

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.id!;
          if (entry.isIntersecting) {
            setVisibleIds((s) => ({ ...s, [id]: true }));
          }
        });
      },
      { threshold: 0.12 }
    );

    const items = el.querySelectorAll("[data-id]");
    items.forEach((it) => observer.observe(it));

    return () => observer.disconnect();
  }, []);

  // no density persistence (particles fixed to high)

  return (
    <section className="relative min-h-screen py-16 px-6 md:px-12">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute inset-0 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Portfolio
        </h1>
        <p className="text-foreground mb-8">
          Selected projects and prototypes — interactive demo with particle
          effects. Try moving your cursor or tapping.
        </p>

        <div ref={containerRef} className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              data-id={p.id}
              className={`transition-all duration-700 ease-out transform ${
                visibleIds[p.id]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <PortfolioCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
