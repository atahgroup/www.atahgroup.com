import { HOMEPAGE_SKILLS } from "@/constants/homepage-skills";
import React from "react";

export default function SkillTagPills() {
  return (
    <div className="mt-6 flex flex-wrap gap-2 text-sm">
      {HOMEPAGE_SKILLS.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 rounded-full bg-white/40 text-black"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
