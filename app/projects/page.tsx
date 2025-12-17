"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Project, PROJECTS_LIST } from "@/constants/projects";

export default function Projects() {
  const projects: Project[] = PROJECTS_LIST;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleIds, setVisibleIds] = useState<Record<string, boolean>>({});

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

  return (
    <section className="relative min-h-screen py-16 px-6 md:px-12">
      {/* Decorative canvas moved to global layout for site-wide coverage */}

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Projects
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
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
