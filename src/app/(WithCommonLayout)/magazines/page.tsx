import FiltteredResults from "@/components/modules/magazine/FiltteredResults";
import { baseURL } from "@/services/config/BaseURL";
import { Magazine } from "@/types/magazine";
import { Metadata } from "next";

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
console.log(response)
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
        <FiltteredResults magazines={magazines} />
      </div>
    </div>
  );
};

export default MagazinePage;
