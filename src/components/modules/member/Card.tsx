import { Member } from "@/types/member";
import Image from "next/image";

const Card = ({user} : {user : Member}) => {
  
  return (
    <div className="max-w-sm mx-auto bg-slate-900/90 text-white rounded-3xl shadow-xl p-6 backdrop-blur border border-slate-700">
      {/* Image */}
      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={`https://res.cloudinary.com/jniac-just/${user?.image}`}
          alt={user?.first_name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name + Role */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold tracking-wide">{user.first_name} {user.last_name}</h2>
        <p className="text-indigo-300 text-sm">
          {user?.role} — Astronomy Club
        </p>
      </div>

      {/* Profession & Institute */}
      <div className="mt-3 space-y-1 text-center">
        <p className="text-lg font-semibold">{user.profession}</p>
        <p className="text-slate-400 text-sm">{user.institute}</p>
      </div>

      {/* Bio */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-indigo-300">Bio</h3>
        <p className="text-slate-300 text-sm mt-1">{user.bio}</p>
      </div>

      {/* Experience */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-indigo-300">Experience</h3>
        <p className="text-slate-300 text-sm mt-1">{user.experience}</p>
      </div>

      {/* Qualifications */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-indigo-300">
          Qualifications
        </h3>
        <ul className="text-slate-300 text-sm mt-1 list-disc list-inside space-y-1">
          {user.qualifications.split("\n").map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-5 border-t border-slate-700 pt-3 text-sm space-y-1">
        <p>
          <span className="text-indigo-300">Email:</span> {user.email}
        </p>
        <p>
          <span className="text-indigo-300">Phone:</span> {user.phone_number}
        </p>
        <p>
          <span className="text-indigo-300">Address:</span> {user.address}
        </p>
      </div>
    </div>
  );
};

export default Card;
