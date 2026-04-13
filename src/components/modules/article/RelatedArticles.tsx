"use client";

import { useGetArticleQuery } from "@/redux/features/article/articleApi";
import { Article } from "@/types/article";
import { useMemo } from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

const RelatedArticles = ({
  magazineId,
  articleId,
}: {
  magazineId: string;
  articleId: string | undefined;
}) => {
  const { data } = useGetArticleQuery([]);

  const filtered = useMemo(() => {
    if (!data) return [];

    return data.filter(
      (article: Article) =>
        article.magazine === magazineId && article.id != articleId,
    );
  }, [data, magazineId, articleId]);

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filtered.map((article: Article) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          <ArticleCard article={article} />
        </Link>
      ))}
    </div>
      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-gray-300 mb-2">
            No related articles found
          </h3>
        </div>
      )}
    </div>
  );
};

export default RelatedArticles;
