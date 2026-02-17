import Card from "@/components/modules/member/Card";
import { baseURL } from "@/services/config/BaseURL";
import { Member } from "@/types/member";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "JNIAC JUST | Our Team",
}

export default async function  Page() {
  
  const response3 = await fetch(
      `${baseURL}/api/members/`,
      {
        cache: "no-cache",
      }
    );
  
   
    const members: Member[] = await response3.json();

  return (
    <div className="min-h-screen py-30 bg-slate-900 px-4">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Our{" "}
            <span className="font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-slate-400 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
          Passionate astronomers and researchers dedicated to exploring the
          cosmos and sharing our discoveries with the world.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-700/50">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
            <input
              type="text"
              placeholder="Search member by name, designation..."
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {members?.map((member, index) => (
          <Card key={index} user={member} />
        ))}
      </div>
    </div>
  );
}
