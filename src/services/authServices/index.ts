"use server";

import { baseURL } from "../config/BaseURL";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";

export const registerUser = async (userData: FieldValues) => {
  const res = await fetch(`${baseURL}/auth/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return res.json();
};

export const loginUser = async (userData: FieldValues) => {
  const res = await fetch(`${baseURL}/auth/jwt/create/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const result = await res.json();

  if (!res.ok || !result?.access) {
    return { success: false, ...result };
  }

  // SERVER-SIDE COOKIE
  (await cookies()).set("authToken", result.access, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 5,
  });

  return { success: true };
};

export const userProfile = async () => {
  const token = (await cookies()).get("authToken")?.value;
  if (!token) return null;

  const res = await fetch(`${baseURL}/auth/users/me/`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  if (!res.ok) return null;
  const userInfo = await res.json();

  return { ...userInfo, success: true };
};

export const logoutUser = async () => {
  (await cookies()).delete("authToken");
  return { success: true };
};

export const getAccessToken = async () => {
  const token = (await cookies()).get("authToken")?.value
  return token;
}
