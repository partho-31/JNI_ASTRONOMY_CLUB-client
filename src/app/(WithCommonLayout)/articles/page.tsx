import FilteredResults from "@/components/modules/article/FilteredResults";
import { baseURL } from "@/services/config/BaseURL";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JNIAC JUST | Articles",
};

const ArticlesPage = async () => {
  const response = await fetch(
    `${baseURL}/api/articles/`,
    {
      cache: "no-cache",
    }
  );
  

  const articles: Article[] = await response.json();

  return (
    <div className="min-h-screen py-20 bg-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Stellar Articles
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive deep into cosmic discoveries, space exploration, and
            astronomical phenomena
          </p>
        </div>

        {/* Search and Filter Section */}
        <FilteredResults articles={articles} />

        {/* Load More Button
        <div className="text-center mt-12">
          <button className="bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10">
            Load More Articles
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ArticlesPage;
