
const ArticleCard = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-2xl font-semibold mb-8">📝 Latest Articles</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/10 rounded-xl p-4"
          >
            <div className="w-full h-36 bg-white/10 rounded-lg"></div>
            <h4 className="mt-4 font-semibold">Article Title</h4>
            <p className="text-gray-400 text-sm">
              Short excerpt of the article goes here...
            </p>
            <button className="text-blue-300 mt-2 text-sm">Read More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleCard;
