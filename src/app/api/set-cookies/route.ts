import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) return new Response(JSON.stringify({ error: "No token" }), { status: 400 });

  (await cookies()).set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 5,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}