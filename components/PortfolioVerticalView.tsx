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
  const [density, setDensity] = useState<"low" | "med" | "high">("med");
  const [paused, setPaused] = useState(false);

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
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleCanvas density={density} paused={paused} />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="hidden md:flex absolute top-6 right-6 z-40 pointer-events-auto">
        <div className="flex items-center gap-3 bg-background px-3 py-2 rounded-full shadow-sm backdrop-blur-sm border border-foreground/30">
          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-1 rounded-md text-sm ${
                density === "low"
                  ? "bg-indigo-600 text-white"
                  : "text-foreground"
              }`}
              onClick={() => setDensity("low")}
            >
              Low
            </button>
            <button
              className={`px-2 py-1 rounded-md text-sm ${
                density === "med"
                  ? "bg-indigo-600 text-white"
                  : "text-foreground"
              }`}
              onClick={() => setDensity("med")}
            >
              Med
            </button>
            <button
              className={`px-2 py-1 rounded-md text-sm ${
                density === "high"
                  ? "bg-indigo-600 text-white"
                  : "text-foreground"
              }`}
              onClick={() => setDensity("high")}
            >
              High
            </button>
          </div>
          <button
            onClick={() => setPaused((s) => !s)}
            className={`ml-2 px-2 py-1 rounded-md text-sm ${
              paused ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
          >
            {paused ? "Resume" : "Pause"}
          </button>
          {/* control panel hidden on mobile; mobile still shows ambient particles on load */}
        </div>
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
