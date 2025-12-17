export type Project = {
  id: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
  tags?: string[];
  link?: string;
};

export const PROJECTS_LIST: Project[] = [
  {
    id: "p1",
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
    title: "Crypto Snail",
    summary: "Public-domain cryptography library for educational purposes.",
    date: "2024-01-27",
    image: "/assets/placeholder-1.jpg",
    tags: [
      "C",
      "Assembly",
      "Cryptography",
      "Performance",
      "Optimization",
      "Algorithms",
    ],
    link: "https://github.com/Kracken256/crypto-snail",
  },
];
