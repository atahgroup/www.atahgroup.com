export const LoginButton = () => {
  const login = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
    const scope = "email";

    const redirect_uri = "https://api.atahgroup.com/auth/google";
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

    window.location.href = url;
  };

  return (
    <button
      onClick={() => login()}
      className="px-6 py-2 border border-red-700 text-red-700 rounded-md hover:underline underline-offset-4 transition duration-200"
    >
      Admin Login
    </button>
  );
};
