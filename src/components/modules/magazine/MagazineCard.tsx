import { Magazine } from "@/types/magazine";
import { Calendar } from "lucide-react";
import Image from "next/image";

const MagazineCard = ({ magazine }: { magazine: Magazine }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  
  return (
    <div className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Magazine Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
        <Image
          src={`https://res.cloudinary.com/jniac-just/${magazine.cover_img}`}
          alt="cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Magazine Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formatDate(magazine.created_at)}
          </div>
          <span className="flex items-center gap-1">
            ⏱️ {magazine.read_time}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-cyan-400 transition-colors duration-200">
          {magazine.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {magazine.discription}
        </p>

        <button className="w-full bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95">
          Read Article
        </button>
      </div>
    </div>
  );
};

export default MagazineCard;
