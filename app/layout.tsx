// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - allow side-effect global CSS import in Next.js
import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieConsentComponent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atah Group",
  description:
    "Atah Group is committed to providing affordable multi-family housing solutions. Explore our available listings and experience the Atah difference today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
    console.error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set.");
    return (
      <div>
        Google Login is not configured properly because the environment variable{" "}
        <code>NEXT_PUBLIC_GOOGLE_CLIENT_ID</code> is missing.
      </div>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NavBar />
        {children}
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
        <CookieConsentComponent />
      </body>
    </html>
  );
}
