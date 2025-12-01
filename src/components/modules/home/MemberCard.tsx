
const MemberCard = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-2xl font-semibold mb-8">✨ Our Stellar Team</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/10 p-4 rounded-xl backdrop-blur-md text-center"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-white/20"></div>
            <h4 className="mt-4 font-semibold text-lg">Member Name</h4>
            <p className="text-gray-400 text-sm">Role in Club</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberCard;
