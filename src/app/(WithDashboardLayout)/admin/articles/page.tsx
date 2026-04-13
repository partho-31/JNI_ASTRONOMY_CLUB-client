"use client";

import { Spinner } from "@/components/ui/spinner";
import TrashOrSpinner from "@/components/ui/trashOrSpinner";
import {
  useDeleteArticleMutation,
  useGetArticleQuery,
} from "@/redux/features/article/articleApi";
import { Article } from "@/types/article";
import Image from "next/image";
import { useMemo, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  // Using hook from Redux
  const { data, isLoading } = useGetArticleQuery(undefined);
  const [deleteArticle] = useDeleteArticleMutation();

  // Filter Section
  const [searchByKeyword, setSearchByKeyword] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredArticles = useMemo(() => {
    return data?.filter((article: Article) => {
      const searchQuery = searchByKeyword
        ? article.title.toLowerCase().includes(searchByKeyword.toLowerCase()) ||
          article.discription
            .toLowerCase()
            .includes(searchByKeyword.toLowerCase())
        : true;

      const filterQuery =
        statusFilter === "all" || article.status === statusFilter;
      return searchQuery && filterQuery;
    });
  }, [data, searchByKeyword, statusFilter]);

  const pendingCount = data?.filter(
    (a: Article) => a.status === "Pending" || a.status === "pending",
  ).length;

  const publishedCount = data?.filter(
    (a: Article) => a.status === "Published" || a.status === "published",
  ).length;

  // Delete Section
  const handleArticleDeletion = async (id: string) => {
    const res = await deleteArticle(id);
    if (res.error) {
      toast.error("Something went wrong!");
    } else {
      toast.success("Magazine has been deleted");
    }
  };

  return (
    <div className="w-full py-10 md:py-0">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-6">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Articles Management
            </h1>
            <p className="text-gray-400">
              Manage all articles and their status
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <div className="relative">
              <input
                value={searchByKeyword}
                onChange={(e) => setSearchByKeyword(e.target.value)}
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
          <div className="text-2xl font-bold text-white">
            {data ? data.length : "0"}
          </div>
          <div className="text-gray-400 text-sm">Total Articles</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-cyan-400">
            {publishedCount ? publishedCount : "0"}
          </div>
          <div className="text-gray-400 text-sm">Published</div>
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
          <div className="text-2xl font-bold text-purple-400">
            {pendingCount ? pendingCount : "0"}
          </div>
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
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-700 border border-slate-600 rounded-lg py-2 px-2 md:px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value={"all"}>All Articles</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Published"}>Published</option>
          </select>
        </div>
        <div className="text-gray-400 text-sm">
          Showing {filteredArticles?.length} Articles
        </div>
      </div>

      {/* Loader  */}
      {isLoading && (
        <div className="flex justify-center mt-5">
          <Spinner />
        </div>
      )}

      {/* Card Section  */}
      <div className="grid grid-cols-1 p-6">
        {filteredArticles?.map((article: Article) => (
          <div
            key={article.id}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 md:px-8
               flex flex-col md:flex-row md:items-center md:justify-between 
               gap-4 hover:bg-slate-750 transition"
          >
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image
                  height={40}
                  width={40}
                  src={`https://res.cloudinary.com/jniac-just/${article.cover_img}`}
                  alt={"Profile Image"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-white font-semibold">{article.title}</p>
                <p className="text-gray-400 text-sm">
                  {article.magazine_title}
                </p>
              </div>
            </div>

            {/* Bottom row for small screen / Middle for large */}
            <div className="flex w-full md:w-auto justify-between items-center gap-3">
              {/* Role dropdown */}
              <div className="flex items-center gap-1">
                <span className="text-gray-300 text-sm">Status:</span>
                <select
                  value={article.status}
                  className="bg-slate-700 border border-slate-600 text-white text-sm 
                     rounded-lg px-1 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option>Pending</option>
                  <option>Published</option>
                </select>
              </div>

              {/* Delete Button */}
                <TrashOrSpinner  operation={() => handleArticleDeletion(article.id)}  />

            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {(filteredArticles?.length === 0 || data?.length == 0)  && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔭</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No article found
          </h3>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
