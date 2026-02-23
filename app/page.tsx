"use client";

import { FAQ_ITEMS } from "@/constants/faq";
import { LISTING_ITEMS, ListingItem } from "@/constants/listing";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/assets/example-house-image.webp"
        alt="Example house image"
        width={5619}
        height={3161}
        className="object-cover w-auto min-h-100 brightness-95 mx-auto"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black/70 rounded-lg p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Atah Group</h1>
        <p className="text-lg md:text-2xl">
          Committed to Affordable Multi-Family
        </p>
      </div>
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-10 lg:px-0 max-w-5xl">
        <Image
          src="/assets/family-renting-apartment.jpg"
          alt="Family renting apartment image"
          width={612}
          height={408}
          className="object-cover h-60 w-full ml-auto rounded-lg rounded-bl-none rounded-br-none md:rounded-bl-lg md:rounded-tr-none md:rounded-br-none"
        />
        <div className="col-span-2 p-6 border border-foreground/30 rounded-lg rounded-tl-none rounded-tr-none md:rounded-tr-lg md:rounded-tl-none md:rounded-bl-none">
          <h2 className="text-2xl font-bold mb-4">
            Experience the Atah Difference
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet elit ipsum consectetur ullamco magna esse
            veniam do ut et sint ut cupidatat sunt aliquip. Est tempor ea quis
            ea sunt quis officia eu incididunt minim eu voluptate in Lorem culpa
            qui duis non minim non reprehenderit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

const ListingItemView = (props: ListingItem) => {
  return (
    <div className="flex flex-col gap-2 border border-foreground/30 rounded-lg p-4 w-full lg:w-[400px]">
      <Image
        src={props.imageUrl}
        alt={`Image of listing at ${props.address.street}`}
        width={400}
        height={300}
        className="object-cover rounded-lg w-full h-48"
      />
      <h3 className="text-2xl font-semibold">
        Village Apartments Of {props.address.city}
      </h3>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{props.address.street}</h3>
        <p>
          {`${props.bedrooms} bed / ${props.bathrooms} bath / ${props.squareFeet} sqft`}
        </p>
        <div className="flex items-center gap-2">
          <p className="font-bold">{`$${props.monthlyRent}/month rent`}</p>
          <p className="text-sm text-foreground/70">{`$${props.securityDeposit} security deposit`}</p>
        </div>
        {props.petsAllowed ? (
          <p className="text-green-600 font-semibold">Pets Allowed</p>
        ) : (
          <p className="text-red-600 font-semibold">No Pets</p>
        )}
        <p>{`Minimum required total gross income: $${props.monthlyRent * props.requiredIncomeMultiplier}/month`}</p>
      </div>
    </div>
  );
};

const AvailableListing = () => {
  return (
    <div className="max-w-5xl px-10 lg:px-0">
      <div className="max-w-5xl w-full flex flex-col gap-6">
        <h2 className="text-3xl text-center sm:text-start">
          Available Listings
        </h2>

        <div className="w-full flex flex-wrap gap-10 justify-center sm:justify-start max-h-[600px] overflow-y-auto">
          {LISTING_ITEMS.map((item, index) => (
            <ListingItemView key={index} {...item} />
          ))}
        </div>
      </div>
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
    <div className="flex flex-col gap-2 border-b border-gray-500 pb-4 last:border-b-0">
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
    <div className="max-w-5xl px-10 lg:px-0">
      <div className="max-w-5xl px-0 sm:px-10 w-full flex flex-col gap-6 p-6 sm:border-1 border-foreground/30 rounded-lg">
        <h2 className="text-3xl text-center sm:text-start">
          Frequently Asked Questions
        </h2>

        {FAQ_ITEMS.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 pb-10">
      <Banner />
      <CompanyInfo />
      <AvailableListing />
      <FAQ />
    </main>
  );
}
