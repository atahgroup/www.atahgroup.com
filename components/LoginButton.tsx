"use client";

export const LoginButton = () => {
  /*

fn run_google_sso(ctx: &egui::Context) {
    const CLIENT_ID: &str =
        "784057978591-sfb8ve6ba6k0u4jqkub4indov3m8lktv.apps.googleusercontent.com";
    const SCOPE: &str = "email";

    let google_auth_url = OpenUrl::same_tab(format!(
        "https://accounts.google.com/o/oauth2/v2/auth?client_id={}&redirect_uri={}&response_type=code&scope={}",
        CLIENT_ID,
        format!("{}/auth/google/callback", BACKEND_PREFIX),
        SCOPE
    ));

    ctx.open_url(google_auth_url);
}

*/

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
      className="px-6 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 hover:underline hover:underline-offset-4 "
    >
      Login
    </button>
  );
};
