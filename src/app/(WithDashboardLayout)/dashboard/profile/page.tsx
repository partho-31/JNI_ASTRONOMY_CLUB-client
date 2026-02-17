"use client";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border border-slate-700">
            <Image
              height={100}
              width={100}
              src={`https://res.cloudinary.com/jniac-just/${user?.image}`}
              alt={"Profile Image"}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {user?.first_name} {user?.last_name}
          </h1>
          <p className="text-indigo-300">{user?.role} — Astronomy Club</p>

          <Link href={"/dashboard/profile/edit"}>
            {" "}
            <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-xl shadow-md transition-all">
              Edit Profile
            </button>
          </Link>
        </div>

        {/* Profile Content */}
        <div className="mt-10 bg-slate-800/60 p-8 rounded-3xl border border-slate-700 shadow-xl">
          <h2 className="text-xl font-semibold text-indigo-300">Bio</h2>
          <p className="text-slate-300 mt-1">{user?.bio}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-indigo-300">
              Profession & Institute
            </h2>
            <p className="mt-1">{user?.profession}</p>
            <p className="text-slate-400 text-sm">{user?.institute}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-indigo-300">
              Experience
            </h2>
            <p className="mt-1 text-slate-300">{user?.experience}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-indigo-300">
              Qualifications
            </h2>
            <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
              {user?.qualifications?.split(",").map((q: string, i: number) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-indigo-300">
              Contact Info
            </h2>
            <p className="mt-1 text-slate-300">
              <span className="text-indigo-300">Email:</span> {user?.email}
            </p>
            <p className="text-slate-300">
              <span className="text-indigo-300">Phone:</span>{" "}
              {user?.phone_number}
            </p>
            <p className="text-slate-300">
              <span className="text-indigo-300">Address:</span> {user?.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
