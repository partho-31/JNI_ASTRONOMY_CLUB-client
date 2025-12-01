
const MagazineCard = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-2xl font-semibold mb-8">📚 Featured Magazines</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/10 rounded-xl p-4"
          >
            <div className="w-full h-48 bg-white/10 rounded-lg"></div>
            <h4 className="mt-4 font-semibold">Magazine Title</h4>
            <p className="text-gray-400 text-sm">Issue #2025</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MagazineCard;
