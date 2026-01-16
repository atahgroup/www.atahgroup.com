"use client";

import { RainboxGradientBorderButton } from "@/components/RainboxGradientBorderButton";
import Image from "next/image";
import React from "react";

export const CompanyIntro = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6 sm:border-2 rounded-2xl">
      <h1 className="text-4xl text-center sm:text-start">Atah Group</h1>
      <p className="text-justify sm:text-start">
        We are a vending services provider serving businesses, locations &
        facilities in the Indianapolis, Indiana area.
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-3 items-center text-center">
          <Image
            src="/assets/toolbox.webp"
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
            src="/assets/vending.webp"
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
            src="/assets/commission.webp"
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
      <RainboxGradientBorderButton
        onClick={() => alert("Not implemented yet!")}
      >
        <b>GET A MACHINE</b>
      </RainboxGradientBorderButton>
    </div>
  );
};
