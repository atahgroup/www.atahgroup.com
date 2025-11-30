export type Project = {
  id: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
  tags?: string[];
  link?: string;
};

export const SAMPLE_PROJECTS: Project[] = [
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
