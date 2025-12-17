"use client";

import React from "react";
import HeroIllustration from "../../components/HeroIllustration";
import HeroActions from "../../components/HeroActions";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-5xl">
        <div
          aria-hidden
          className="absolute -inset-8 rounded-3xl blur-3xl transform-gpu"
        >
          <div className="absolute inset-0 rounded-3xl hidden dark:block bg-gradient-to-r from-indigo-400/30 via-sky-300/30 to-emerald-300/30" />
        </div>

        <section className="relative rounded-3xl bg-gradient-to-br from-indigo-400/80 via-sky-300/80 to-emerald-300/80 shadow-2xl p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="order-first md:order-last w-full md:w-80 lg:w-96 h-44 md:h-56 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-200/60 dark:from-white/70 to-transparent border border-white/10">
              <HeroIllustration className="w-3/4 h-3/4" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                Hi, I&apos;m Wesley Jones. I build software products and fun
                machines.
              </h1>

              <p className="mt-4 text-lg text-white max-w-2xl">
                I&apos;m a software engineer with a passion for low-level
                programming. Welcome to my corner of the internet where I share
                my projects, ideas, and experiences.
              </p>

              <HeroActions />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
