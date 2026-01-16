import React from "react";
import { COOKIE_POLICY } from "./cookie-policy";

export default function Cookie() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-6 md:p-12">
      <div dangerouslySetInnerHTML={{ __html: COOKIE_POLICY }} />
    </div>
  );
}
