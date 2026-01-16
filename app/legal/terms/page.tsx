import React from "react";
import { TERMS_POLICY } from "./terms-policy";

export default function Terms() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-6 md:p-12">
      <div dangerouslySetInnerHTML={{ __html: TERMS_POLICY }} />
    </div>
  );
}
