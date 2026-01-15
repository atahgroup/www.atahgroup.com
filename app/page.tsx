import SuperButton from "@/components/SuperButton";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4 items-center">
      <div className="flex flex-col w-full max-w-5xl items-center">
        {/* Colorful blurred background */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-3xl blur-3xl transform-gpu"
        >
          <div className="absolute inset-0 rounded-3xl hidden dark:block bg-gradient-to-r from-indigo-400/30 via-sky-300/30 to-emerald-300/30" />
        </div>

        <div className="relative flex flex-col gap-6 max-w-140 p-6 sm:border-2 rounded-2xl">
          <h1 className="text-4xl text-center sm:text-start">
            Indianapolis Vending Solutions
          </h1>
          <p className="text-justify sm:text-start">
            We are a vending services provider serving businesses, locations &
            facilities in the Indianapolis, Indiana area.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 items-center text-center">
              <Image
                src={
                  "https://indianapolis.vendingexchange.com/assets/img/state-img.png"
                }
                alt="Toolbox Outline Icon"
                width={72}
                height={72}
              />
              <a className="text-sm sm:text-base">
                Machines Provided At{" "}
                <b>
                  <u>Zero Cost To You</u>
                </b>
              </a>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <Image
                src={
                  "https://indianapolis.vendingexchange.com/assets/img/vending2-img.png"
                }
                alt="Toolbox Outline Icon"
                width={72}
                height={72}
              />
              <a className="text-sm sm:text-base">
                Competitively Priced Snacks & Beverages
              </a>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <Image
                src={
                  "https://indianapolis.vendingexchange.com/assets/img/service-img.png"
                }
                alt="Toolbox Outline Icon"
                width={72}
                height={72}
              />
              <a className="text-sm sm:text-base">
                <b>
                  <u>Commissions Available</u>
                </b>{" "}
                to Qualified Locations
              </a>
            </div>
          </div>
          <button className="relative group overflow-hidden rounded-full p-[3px] focus:outline-none">
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff8800_15%,#ffff00_30%,#00ff00_45%,#00ffff_60%,#0000ff_75%,#8800ff_90%,#ff0000_100%)] blur-md"></div>

            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff8800_15%,#ffff00_30%,#00ff00_45%,#00ffff_60%,#0000ff_75%,#8800ff_90%,#ff0000_100%)]"></div>

            <div className="relative z-10 flex items-center justify-center bg-white px-8 py-3 rounded-full text-black transition-all group-hover:bg-white/80 group-hover:underline underline-offset-4 cursor-pointer">
              <span className="font-bold tracking-wide">GET A MACHINE</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
