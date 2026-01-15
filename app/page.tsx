"use client";

import { RainboxGradientBorderButton } from "@/components/RainboxGradientBorderButton";
import { FAQ_ITEMS } from "@/constants/faq";
import Image from "next/image";
import React from "react";

const CompanyIntro = () => {
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

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 pb-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left group"
      >
        <h3 className="text-xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {question}
        </h3>
        <span className="text-2xl font-light group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-all duration-200">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-justify mt-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6 sm:border-2 rounded-2xl">
      <h2 className="text-3xl text-center sm:text-start">
        Frequently Asked Questions
      </h2>

      {FAQ_ITEMS.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4 items-center bg-gradient-to-r from-indigo-400/30 via-sky-300/30 to-emerald-300/30">
      <div className="flex flex-col w-full max-w-140 items-center gap-12">
        <CompanyIntro />
        <FAQ />
      </div>
    </main>
  );
}
