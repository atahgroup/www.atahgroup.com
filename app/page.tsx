import { CompanyIntro } from "@/components/CompanyIntro";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="relative w-full">
        <Image
          src="/assets/example-house-image.webp"
          alt="Example house image"
          width={5619}
          height={3161}
          className="object-cover w-auto min-h-100 brightness-80 mx-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-green-900/80 rounded-lg p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Atah Group
          </h1>
          <p className="text-lg md:text-2xl">
            Your trusted partner in property management and real estate
            solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-140 items-center gap-12">
        <CompanyIntro />
        <FAQ />
      </div>
    </main>
  );
}
