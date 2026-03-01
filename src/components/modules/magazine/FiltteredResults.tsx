"use client";

import { Magazine } from "@/types/magazine";
import MagazineCard from "./MagazineCard";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import AuthContext from "@/context/AuthContext";

const FiltteredResults = ({ magazines }: { magazines: Magazine[] }) => {
  const [searchByKeyword, setSearchByKeyword] = useState<string>("");
  const [ordering, setOrdering] = useState<string>("");
  const { user } = useContext(AuthContext);
  const filteredMagazines = useMemo(() => {
    return magazines
      .filter((magazine) =>
        searchByKeyword
          ? magazine.title
              .toLowerCase()
              .includes(searchByKeyword.toLowerCase()) ||
            magazine.discription
              .toLowerCase()
              .includes(searchByKeyword.toLowerCase())
          : true,
      )
      .sort((a, b) => {
        switch (ordering) {
          case "created_at":
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );
          case "-created_at":
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          default:
            return 0;
        }
      });
  }, [magazines, searchByKeyword, ordering]);

  return (
    <div>
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-700/50">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
            <input
              type="text"
              value={searchByKeyword}
              onChange={(e) => setSearchByKeyword(e.target.value)}
              placeholder="Search magazines by title, description..."
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
              className="appearance-none bg-slate-900 border border-slate-600 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer"
            >
              <option> Default </option>
              <option value={"-created_at"}>Newest First</option>
              <option value={"created_at"}>Oldest First</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>

          {/* Create New Magazine Button */}
          {user?.is_staff && (
            <Link href={"magazines/create"}>
              {" "}
              <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                Create New Magazine
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Magazine Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMagazines.map((magazine) => (
          <Link href={`/magazines/${magazine.id}`} key={magazine.id}>
            {" "}
            <MagazineCard magazine={magazine} />
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredMagazines.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔭</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No magazines found
          </h3>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default FiltteredResults;
