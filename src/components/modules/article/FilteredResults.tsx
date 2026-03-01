"use client"

import { Article } from "@/types/article";
import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const FilteredResults = ({ articles }: { articles: Article[] }) => {
  const [searchByKeyword, setSearchByKeyword] = useState<string>("");
  const [ordering, setOrdering] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) =>
        searchByKeyword
          ? article.title
              .toLowerCase()
              .includes(searchByKeyword.toLowerCase()) ||
            article.discription
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
          case "avg_rating":
            return Number(a.avg_rating) - Number(b.avg_rating);
          default:
            return 0;
        }
      });
  }, [articles, searchByKeyword, ordering]);

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
              value={searchByKeyword}
              onChange={(e) => setSearchByKeyword(e.target.value)}
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
              className="appearance-none bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option> Default </option>
              <option value={"avg_rating"}>Most Popular</option>

              <option value={"-created_at"}>Newest First</option>
              <option value={"created_at"}>Oldest First</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>


      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔭</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No articles found
          </h3>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default FilteredResults;
