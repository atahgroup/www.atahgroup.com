"use client";

import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const LoginButton = () => {
  const handleSuccess = (credentialResponse: GoogleCredentialResponse) => {
    console.log("Login Success Response:", credentialResponse);

    if (credentialResponse.credential) {
      const decoded: { name: string; email: string; picture: string } =
        jwtDecode(credentialResponse.credential);
      console.log("Decoded User Info:", decoded);

      // 3. IMPORTANT: Send the credentialResponse.credential (the ID Token)
      //    to your Next.js API route or backend server for verification
      //    and to establish a session (e.g., using cookies).
      //
      // Example: fetch('/api/auth/google', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token: credentialResponse.credential })
      // });
    }
  };

  const handleError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        theme="outline"
        size="large"
      />
    </div>
  );
};
