"use client";

import AuthContext from "@/context/AuthContext";
import {
  userProfile,
} from "@/services/authServices";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useRouter} from "next/navigation";
import { useContext } from "react";
import { toast } from "sonner";

export default function GoogleLoginButton() {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      try {
        const res = await fetch("http://127.0.0.1:8000/auth/google/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: tokenResponse.access_token,
          }),
        });

        const backendToken = await res.json();

        const response = await fetch("/api/set-cookies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: backendToken.access }),
        });

        const result = await response.json();

        if (result.success) {
          toast.success("Login successful! Please wait a second");
          const response = await userProfile();
          router.push("/");
          setUser(response);
        }
      } catch (error) {
        console.error("Login failed", error);
      }
    },
    onError: () => {
      toast.warning("Google login failed");
    },
  });

  return (
    <button
  onClick={() => login()}
>

  <span className="text-sm font-medium text-white">
    Continue with Google
  </span>
</button>
  );
}
