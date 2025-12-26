import MagazineCard from "@/components/modules/magazine/MagazineCard";
import { baseURL } from "@/services/config/BaseURL";
import { Magazine } from "@/types/magazine";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JNAIC JUST | Magazines",
  description: "Next",
};

const MagazinePage = async () => {
  const response = await fetch(
    `${baseURL}/api/magazines`,
    {
      cache: "no-cache",
    }
  );

  const magazines: Magazine[] = await response.json();

  return (
    <div className="min-h-screen py-20 bg-slate-950 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cosmic Chronicles
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the wonders of the universe through our collection of
            astronomy magazines and articles
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
                placeholder="Search magazines by title, description..."
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Title A-Z</option>
                <option>Most Recent</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ⬆️⬇️
              </div>
            </div>

            {/* Create New Magazine Button */}
            <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
              Create New Magazine
            </button>
          </div>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazines.map((magazine) => (
            <Link href={`/magazines/${magazine.id}`} key={magazine.id}>
              {" "}
              <MagazineCard magazine={magazine} />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {magazines.length === 0 && (
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
    </div>
  );
};

export default MagazinePage;
