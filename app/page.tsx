"use client";

import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/portfolio";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8"></main>
  );
}
