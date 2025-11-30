import React from "react";
import { PRIVACY_POLICY_HTML } from "./privacy-policy";

export default function Privacy() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-6 md:p-12">
      <div dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_HTML }} />
    </div>
  );
}
