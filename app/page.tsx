import { CompanyIntro } from "@/components/CompanyIntro";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8">
      <div className="relative w-full">
        <Image
          src="/assets/example-house-image.webp"
          alt="Example house image"
          width={5619}
          height={3161}
          className="object-cover w-auto min-h-100 brightness-80 mx-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black/70 rounded-lg p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Atah Group
          </h1>
          <p className="text-lg md:text-2xl">
            Your trusted partner in property management and real estate
            solutions.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-10 max-w-5xl">
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
              Lorem ipsum dolor sit amet elit ipsum consectetur ullamco magna
              esse veniam do ut et sint ut cupidatat sunt aliquip. Est tempor ea
              quis ea sunt quis officia eu incididunt minim eu voluptate in
              Lorem culpa qui duis non minim non reprehenderit amet.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-140 items-center gap-12">
        <CompanyIntro />
        <FAQ />
      </div>
    </main>
  );
}
