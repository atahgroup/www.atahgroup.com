"use client";

import React from "react";

function handleGoogleSSO() {
  // Implement Google SSO logic here
  console.log("Google SSO initiated");
}

export const GoogleSSO = () => {
  return (
    <button
      className="px-6 py-1.5 rounded-full bg-red-400 dark:bg-red-700 cursor-pointer text-white font-medium hover:underline hover:underline-offset-4"
      onClick={handleGoogleSSO}
    >
      Login
    </button>
  );
};
