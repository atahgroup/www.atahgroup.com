import React from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
  tags?: string[];
  link?: string;
};

export default function PortfolioCard({ project }: { project: Project }) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    // dispatch a small firework at the click position so other components can listen
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    window.dispatchEvent(new CustomEvent("firework", { detail: { x, y } }));
  }

  return (
    <article
      onClick={handleClick}
      className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border transition-transform transform hover:-translate-y-2 hover:scale-[1.01] border-gray-200/40 dark:border-white/5"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-48 h-44 md:h-auto flex-shrink-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-pink-500 to-yellow-400 flex items-center justify-center text-foreground font-semibold">
              {project.title}
            </div>
          )}
        </div>

        <div className="p-4 md:p-6 flex-1">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-foreground">{project.summary}</p>

          <div className="mt-4 flex items-center justify-between text-xs text-foreground">
            <span className="mr-2 text-foreground">
              Created: {project.date}
            </span>
            <div className="flex flex-wrap md:max-w-70 gap-2 justify-end">
              {(project.tags || []).map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full text-foreground bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <a
              href={project.link ?? "#"}
              className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm shadow-sm transition-opacity opacity-95 hover:opacity-100"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
