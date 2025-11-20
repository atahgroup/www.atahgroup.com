"use client";

import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";

export const LoginButton = () => {
  const handleSuccess = (credentialResponse: GoogleCredentialResponse) => {
    console.log("Login Success Response:", credentialResponse);

    if (credentialResponse.credential) {
      const decoded: { email: string } = jwtDecode(
        credentialResponse.credential
      );
      console.log("Decoded User Email:", decoded.email);

      fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: credentialResponse.credential }),
      })
        .then(async (response) => {
          if (!response || !response.ok) {
            console.log("Server response:", response);
            console.error("Failed to verify token with server");
            toast.error("Authentication failed. Please try again.");
            return;
          }

          console.log("User authenticated successfully");
          toast.success(`Welcome, ${decoded.email}! You have been logged in.`);
        })
        .catch((error) => {
          console.error("Network or Fetch Error:", error);
          toast.error(
            "An error occurred during authentication. Please try again."
          );
        });
    }
  };

  const handleError = () => {
    console.error("Google Login Failed");
    alert("Google Login Failed. Please try again.");
  };

  return (
    <>
      <div>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          theme="outline"
          size="large"
        />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
