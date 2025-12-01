const ArticlesPage = () => {
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
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ⬆️⬇️
              </div>
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
          {/* Article 4 */}
          <div className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-4xl">🌙</div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />

              <div className="absolute top-4 right-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                Deep Space
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  📅 January 2, 2024
                </div>
                <span>⏱️ 12 min</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                Dark Energy: The Force Expanding Our Universe
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                Unraveling the mystery of dark energy, the unknown force causing
                the accelerated expansion of the universe, and ongoing research
                to understand its nature.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    DP
                  </div>
                  <span className="text-gray-400 text-sm">Dr. David Park</span>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200">
                  Continue Reading →
                </button>
              </div>
            </div>
          </div>
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
