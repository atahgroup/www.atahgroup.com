"use client";

import CookieConsent from "react-cookie-consent";

export const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      cookieName="atahgroup_cookie_consent"
      style={{ background: "#08303dff" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
