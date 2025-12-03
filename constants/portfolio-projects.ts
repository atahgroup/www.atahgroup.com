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
];
