"use client";

import React from "react";
import HeroIllustration from "../components/HeroIllustration";
import HeroActions from "../components/HeroActions";
import TagPills from "../components/TagPills";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-5xl">
        {/* Decorative blurred gradient behind the glass panel.
            - show a vivid colorful gradient in light mode
            - keep the softer/muted gradient in dark mode (preserves current look)
        */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-3xl blur-3xl transform-gpu"
        >
          <div className="absolute inset-0 rounded-3xl dark:hidden bg-gradient-to-r from-pink-400/60 via-amber-300/40 to-cyan-300/50" />
          <div className="absolute inset-0 rounded-3xl hidden dark:block bg-gradient-to-r from-indigo-400/20 via-sky-300/10 to-emerald-300/10" />
        </div>

        <section className="relative rounded-3xl bg-transparent dark:bg-black/30 backdrop-blur-md backdrop-saturate-150 shadow-2xl p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Illustration appears first on small screens, last on md+ */}
            <div className="order-first md:order-last w-full md:w-80 lg:w-96 h-44 md:h-56 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-200/60 dark:from-white/70 to-transparent border border-white/10">
              <HeroIllustration className="w-3/4 h-3/4" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-500 to-cyan-500 dark:text-white">
                Software developer & UI-minded engineer
              </h1>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
                I build thoughtful, performant web experiences — focusing on
                clear UX, accessible components, and pragmatic engineering using
                React, Next.js and TypeScript.
              </p>

              <HeroActions />

              <TagPills />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
