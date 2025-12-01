/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch("https://edu-point31.vercel.app/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
     
    return res.json();
  } catch (error: any) {
    return console.log(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch("https://edu-point31.vercel.app/auth/jwt/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();

    const cookiesStore = await cookies();
    if (result?.success) {
      cookiesStore.set("authToken", result?.data.token);
    }
    return { ...result, success: true };
  } catch (error: any) {
    return Error(error);
  }
};

export const currentUser = async () => {
  const token = (await cookies()).get("authToken");
  return token;
};
