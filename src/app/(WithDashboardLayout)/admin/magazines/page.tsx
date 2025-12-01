import { Trash2 } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full py-10 md:py-0">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-6">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Magazines Management</h1>
            <p className="text-gray-400">
              Manage all magazines and their status
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="bg-slate-700  border border-slate-600 rounded-lg py-2 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
              />
              <div className="absolute left-3 top-2 text-gray-400">🔍</div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-white">1,247</div>
          <div className="text-gray-400 text-sm">Total Magazines</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-cyan-400">23</div>
          <div className="text-gray-400 text-sm">Published</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-purple-400">45</div>
          <div className="text-gray-400 text-sm">Pending</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-green-400">1,179</div>
          <div className="text-gray-400 text-sm">Editors</div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="px-6 pb-4 flex items-center gap-5 justify-between">
        <div className="flex items-center gap-4">
          <select className="bg-slate-700 border border-slate-600 rounded-lg py-2 px-2 md:px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option>All Magazines</option>
            <option>Pending</option>
            <option>Published</option>
          </select>
        </div>
        <div className="text-gray-400 text-sm">Showing 20 of 50 magazines</div>
      </div>

      <div className="grid grid-cols-1 p-6">
        <div
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 md:px-8
               flex flex-col md:flex-row md:items-center md:justify-between 
               gap-4 hover:bg-slate-750 transition"
        >
          {/* Top: Avatar + Name + Email */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
            <Image
              src="/avatar.png"
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div>
              <p className="text-white font-semibold">Astro Star</p>
              <p className="text-gray-400 text-sm">12 articles</p>
            </div>
          </div>

          {/* Bottom row for small screen / Middle for large */}
          <div className="flex w-full md:w-auto justify-between items-center gap-3">
            {/* Role dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-gray-300 text-sm">Status:</span>
              <select
                className="bg-slate-700 border border-slate-600 text-white text-sm 
                     rounded-lg px-1 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option>Pending</option>
                <option>Published</option>
              </select>
            </div>

            {/* Delete Button */}
            <button className="p-2 rounded-lg bg-red-600 hover:bg-red-500 transition">
              <Trash2 size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
