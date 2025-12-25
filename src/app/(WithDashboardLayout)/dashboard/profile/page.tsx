"use client";
import { Member } from "@/types/member";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [member, setMember] = useState<Member>({
    id: "2",
    first_name: "Nusrat",
    last_name: "Jahan",
    email: "nusrat.jahan@example.com",
    address: "Dhaka, Bangladesh",
    phone_number: "+8801700000002",
    role: "General Secretary",
    institute: "University of Dhaka",
    profession: "Research Assistant",
    bio: "Actively involved in organizing seminars, webinars, and scientific publications.",
    qualifications: "MSc in Physics",
    experience: "3 years of experience in academic research and event coordination.",
    image: "https://res.cloudinary.com/jniac-just/image/upload/v1762962069/default_for_users_hpwnzn.jpg"
  });

  const [isEditing, setIsEditing] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border border-slate-700">
            <Image
              height={100}
              width={100}
              src={member.image}
              alt={member.first_name}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mt-4">{member.first_name} {member.last_name}</h1>
          <p className="text-indigo-300">{member.role} — Astronomy Club</p>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="mt-4 bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-xl shadow-md transition-all"
          >
            {isEditing ? "Cancel Editing" : "Edit Profile"}
          </button>
        </div>

        {/* Profile Content */}
        <div className="mt-10 bg-slate-800/60 p-8 rounded-3xl border border-slate-700 shadow-xl">
          {/* VIEW MODE */}
          {!isEditing ? (
            <>
              <h2 className="text-xl font-semibold text-indigo-300">Bio</h2>
              <p className="text-slate-300 mt-1">{member.bio}</p>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-indigo-300">
                  Profession & Institute
                </h2>
                <p className="mt-1">{member.profession}</p>
                <p className="text-slate-400 text-sm">{member.institute}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-indigo-300">
                  Experience
                </h2>
                <p className="mt-1 text-slate-300">{member.experience}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-indigo-300">
                  Qualifications
                </h2>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  {member.qualifications
                    .split("\n")
                    .map((q: string, i: number) => (
                      <li key={i}>{q}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-indigo-300">
                  Contact Info
                </h2>
                <p className="mt-1 text-slate-300">
                  <span className="text-indigo-300">Email:</span> {member.email}
                </p>
                <p className="text-slate-300">
                  <span className="text-indigo-300">Phone:</span>{" "}
                  {member.phone_number}
                </p>
                <p className="text-slate-300">
                  <span className="text-indigo-300">Address:</span>{" "}
                  {member.address}
                </p>
              </div>
            </>
          ) : (
            /* EDIT MODE */
            <>
              <h2 className="text-xl font-semibold text-indigo-300 mb-4">
                Update Profile
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TEXT INPUT FIELDS */}
                {[
                  "name",
                  "email",
                  "address",
                  "phone_number",
                  "role",
                  "institute",
                  "profession",
                  "experience",
                ].map((field) => (
                  <div key={field}>
                    <label className="text-sm text-slate-300 capitalize">
                      {field.replace("_", " ")}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={(member as any)[field]}
                      onChange={handleChange}
                      className="mt-1 w-full bg-slate-700 text-white rounded-xl p-3 outline-none border border-slate-600 focus:border-indigo-500"
                    />
                  </div>
                ))}

                {/* IMAGE UPLOAD FIELD */}
                <div className="col-span-1 md:col-span-2">
                  <label className="text-sm text-slate-300">
                    Profile Image
                  </label>

                  <div className="flex items-center gap-4 mt-2">
                    {/* Preview */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-600 shadow">
                      <Image
                        height={100}
                        width={100}
                        src={member.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setMember({
                            ...member,
                            image: reader.result as string,
                          });
                        };
                        reader.readAsDataURL(file);
                      }}
                      className="block mt-1 w-full  bg-slate-700 text-white rounded-xl p-3 outline-none border border-slate-600 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* BIO */}
              <div className="mt-6">
                <label className="text-sm text-slate-300">Bio</label>
                <textarea
                  name="bio"
                  value={member.bio}
                  onChange={handleChange}
                  className="mt-1 w-full min-h-[120px] bg-slate-700 text-white rounded-xl p-3 outline-none border border-slate-600 focus:border-indigo-500"
                />
              </div>

              {/* QUALIFICATIONS */}
              <div className="mt-6">
                <label className="text-sm text-slate-300">Qualifications</label>
                <textarea
                  name="qualifications"
                  value={member.qualifications}
                  onChange={handleChange}
                  className="mt-1 w-full min-h-[120px] bg-slate-700 text-white rounded-xl p-3 outline-none border border-slate-600 focus:border-indigo-500"
                />
              </div>
              <button className="mt-4 w-full mx-auto bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-xl shadow-md transition-all">
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
