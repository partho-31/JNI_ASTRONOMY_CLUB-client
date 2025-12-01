
const Card = () => {
    return (
        <div className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-4xl">🌌</div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-amber-500/90 text-amber-50 px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ Featured
              </div>

              <div className="absolute top-4 right-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                Category
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  📅 January 15, 2024
                </div>
                <span>⏱️ 8 min</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                The James Webb Telescope: Unveiling Cosmic Mysteries
              </h3>

              <p className="text-gray-300 mb-4">
                Exploring the latest discoveries from NASAs revolutionary space telescope and what they mean for our understanding of the universe.
              </p>

              <button className="w-full bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200">
                Read More
              </button>
            </div>
          </div>
    );
};

export default Card;