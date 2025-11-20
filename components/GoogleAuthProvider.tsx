"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

export function GoogleClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  if (!clientId) {
    console.error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set.");
    return <div>Google Login not configured.</div>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
}
