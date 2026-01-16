"use client";

import { FAQ_ITEMS } from "@/constants/faq";
import React from "react";

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

export const FAQ = () => {
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
