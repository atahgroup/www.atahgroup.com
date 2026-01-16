import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-foreground/20 bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 select-none">
              <Image
                src="/assets/logo.png"
                alt="Atah Group"
                width={40}
                height={40}
              />
              <span className="font-bold text-lg text-foreground">
                Atah Group
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-foreground/80 text-justify md:text-left">
              Long live humanity
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start">
            <div className="flex flex-col">
              <h4 className="font-semibold text-foreground text-center md:text-left">
                Company
              </h4>
              <nav className="mt-2 flex flex-col text-sm text-foreground/90 items-center md:items-start">
                <Link
                  href="/"
                  className="py-1 hover:underline text-center md:text-left"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="py-1 hover:underline text-center md:text-left"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-foreground text-center md:text-left">
                Legal
              </h4>
              <nav className="mt-2 flex flex-col text-sm text-foreground/90 items-center md:items-start">
                <Link
                  href="/legal/privacy"
                  className="py-1 hover:underline text-center md:text-left"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/cookie"
                  className="py-1 hover:underline text-center md:text-left"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-foreground/10 pt-4 text-sm text-foreground/70 flex flex-col items-center md:flex-row md:justify-between gap-2 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} Atah Group — All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
