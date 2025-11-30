import React from "react";

export default function TagPills() {
  return (
    <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-50/70 via-amber-50/60 to-cyan-50/70 text-pink-800 dark:bg-black/30">
        Design systems
      </span>
      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-50/70 via-cyan-50/60 to-indigo-50/70 text-amber-800 dark:bg-black/30">
        Frontend architecture
      </span>
      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-50/70 via-indigo-50/60 to-pink-50/70 text-cyan-800 dark:bg-black/30">
        Performance
      </span>
      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50/70 via-pink-50/60 to-amber-50/70 text-indigo-800 dark:bg-black/30">
        Accessibility
      </span>
    </div>
  );
}
