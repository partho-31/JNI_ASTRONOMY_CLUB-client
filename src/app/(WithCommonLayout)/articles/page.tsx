import ArticleCard from "@/components/modules/article/ArticleCard";
import { baseURL } from "@/services/config/BaseURL";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";

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
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-700/50">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
                <option>Reading Time</option>
              </select>
              {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ⬆️⬇️
              </div> */}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium shadow-lg shadow-cyan-600/25">
                All Topics
              </button>
              <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg font-medium hover:bg-slate-600/50">
                Solar System
              </button>
              <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg font-medium hover:bg-slate-600/50">
                Deep Space
              </button>
              <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg font-medium hover:bg-slate-600/50">
                Space Tech
              </button>
              <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg font-medium hover:bg-slate-600/50">
                Astrophysics
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
