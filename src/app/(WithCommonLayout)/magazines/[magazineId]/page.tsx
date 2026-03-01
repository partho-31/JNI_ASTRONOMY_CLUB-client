import { baseURL } from "@/services/config/BaseURL";
import { Magazine } from "@/types/magazine";
import { PenSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ magazineId: string }>;
}) {
  const { magazineId } = await params;
  const magazine = await fetch(`${baseURL}/api/magazines/${magazineId}`).then(
    (res) => res.json(),
  );

  return {
    title: magazine.title,
  };
}

const SingleMagazinePage = async ({
  params,
}: {
  params: Promise<{ magazineId: string }>;
}) => {
  const { magazineId } = await params;

  const response = await fetch(`${baseURL}/api/magazines/${magazineId}`);
  const magazine: Magazine = await response.json();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}

  return (
    <div className="min-h-screen pt-20 px-6 bg-slate-950 text-white">
      {/* Magazine Header */}
      <div className="relative bg-slate-950 backdrop-blur-lg border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cover Image */}
            <div className="lg:w-1/3">
              <div className="bg-linear-to-br relative  overflow-hidden from-cyan-500/20 to-purple-500/20 rounded-2xl border border-slate-700/50 p-8 aspect-3/4 flex items-center justify-center">
                <div className="text-8xl ">
                  <Image
                    src={`https://res.cloudinary.com/jniac-just/${magazine.cover_img}`}
                    alt="cover"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Magazine Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {magazine.title}
              </h1>

              <p className="text-cyan-300 text-xl mb-6">{magazine.sub_title}</p>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {magazine.summary}
              </p>

              {/* Key Outcomes */}
              <div className="mb-6">
                <h3 className="text-cyan-400 text-lg font-semibold mb-3">
                  Key Outcomes:
                </h3>
                <ul className="text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {magazine?.outcomes?.split(".").map((line, index) => (
                    <li className="flex items-center gap-2" key={index}>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                  📥 Download Magazine
                </button>
                <button className="bg-slate-700/50 border border-slate-600 hover:border-cyan-500/50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-2">
                  📖 Read Online
                </button>
                <div>
              <Link href={`${magazineId}/edit`}><button className="flex items-center gap-2 bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                <PenSquare size={20} /> Edit
              </button> </Link>
            </div>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-700/50 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div>
                    <div className="text-white">Dr. Alex Sterling</div>
                    <div>Astrophysicist</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  📅 Published: {formatDate(magazine.created_at)}
                </div>
                <div className="flex items-center gap-2">
                  ⏱️ 8 Articles • {magazine.read_time} total
                </div>
                <div className="flex items-center gap-2">👁️ 1.2k Views</div>
              </div>
            </div>
          </div>
        <div>
          <p className="text-gray-300 text-lg my-6 leading-relaxed">
            {magazine.discription}
          </p>
        </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Articles in this Magazine
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">8 articles</span>
            {/* Create New Magazine Button */}
            <Link href={`${magazineId}/create-article`}>
              {" "}
              <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                Create New Article
              </button>
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 6 */}
          <div className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="relative h-40 overflow-hidden">
              <div className="w-full h-full bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-3xl">🕰️</div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
              <div className="absolute top-3 right-3 bg-cyan-600/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                14 min
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-200">
                Timeline of Cosmic Evolution
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                Reconstructing the history of the universe from the first
                galaxies to present day.
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span>📖 3.2k reads</span>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMagazinePage;
