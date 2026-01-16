import { CompanyIntro } from "@/components/CompanyIntro";
import { FAQ } from "@/components/FAQ";

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
