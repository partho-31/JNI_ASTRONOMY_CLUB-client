"use client";
import { Member } from "@/types/member";
import Image from "next/image";

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div
      data-aos="fade-up"
      className="group bg-linear-to-br from-slate-800 via-slate-900 to-purple-900/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 p-6"
    >
      {/* Profile Image with Overlay */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-6">
        <Image
          src={`https://res.cloudinary.com/jniac-just/${member.image}`}
          alt="Partho Kumar Mondal"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Name with Glow Effect */}
      <h2 className="text-2xl md:text-xl text-center font-bold text-white md:mb-2">
        {member.first_name} {member.last_name}
      </h2>

      {/* Designation */}
      <div className="mb-4 text-center">
        <p className="text-lg md:text-md text-cyan-300 font-medium mb-1 ">
          {member.role}
        </p>
        <p className="text-xs text-purple-300 font-medium">
          Jamal Nazrul Islam Astronomy Club(JNIAC)
        </p>
      </div>

      {/* Academic Info */}
      <div className="space-y-3 mb-2">
        <div className="flex items-start gap-2">
          <div className="text-cyan-400 ">🎓</div>
          <div>
            <p className="text-sm text-gray-300 font-medium">
              {member.qualifications}
            </p>
            <p className="text-xs text-gray-400">{member.institute}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
