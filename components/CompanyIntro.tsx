"use client";

import { RainboxGradientBorderButton } from "@/components/RainboxGradientBorderButton";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const CompanyIntro = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6 sm:border-2 rounded-2xl">
      <h1 className="text-4xl text-center sm:text-start">Lorem Ipsum</h1>
      <p className="text-justify sm:text-start">
        Lorem ipsum dolor sit amet elit ipsum consectetur ullamco magna esse
        veniam do ut et sint ut cupidatat sunt aliquip.
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
            Est tempor ea quis ea sunt quis.
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
            Est tempor ea quis ea sunt quis.
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
            Est tempor ea quis ea sunt quis.
          </a>
        </div>
      </div>
      <div>
        <Link href="/contact">
          <RainboxGradientBorderButton>
            <b>CONTACT US</b>
          </RainboxGradientBorderButton>
        </Link>
      </div>
    </div>
  );
};
