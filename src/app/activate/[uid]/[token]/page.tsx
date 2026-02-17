"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, CheckCircle } from "lucide-react";
// import { baseURL } from "@/services/config/BaseURL";

export default function ActivatePage() {
  const { uid, token } = useParams() as { uid: string; token: string };
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const activateUser = async () => {
      try {
        const res = await fetch(
          "https://jni-astronomy-club.vercel.app/auth/users/activation/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid: uid , token:  token  }),
          },
        );
        if (res.ok) {
          setSuccess(true);
        }
        console.log(res)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    console.log(uid, token);

    activateUser();
  }, [uid, token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <div className="bg-slate-800/90 rounded-2xl shadow-xl p-8 text-center w-full max-w-md backdrop-blur border border-slate-700">
        {loading && (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="animate-spin h-10 w-10 text-indigo-400" />
            <p className="text-sm text-slate-300">Activating your account...</p>
          </div>
        )}

        {!loading && success && (
          <div className="flex flex-col items-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-400" />
            <h2 className="text-2xl font-bold">Account Activated!</h2>
            <p className="text-slate-300">
              You can now log in to your account.
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-red-400 text-lg font-semibold">
              Activation Failed
            </p>
            <p className="text-slate-300 text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
