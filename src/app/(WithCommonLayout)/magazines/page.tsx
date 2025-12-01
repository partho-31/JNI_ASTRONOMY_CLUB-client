import { Star, Calendar } from 'lucide-react';

interface Magazine {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  imageUrl: string;
}

const MagazinePage = () => {
 
  const magazines: Magazine[] = [
    {
      id: '1',
      title: 'The James Webb Telescope: Unveiling Cosmic Mysteries',
      description: 'Exploring the latest discoveries from NASA\'s revolutionary space telescope and what they mean for our understanding of the universe.',
      date: '2024-01-15',
      category: 'telescopes',
      readTime: '8 min',
      featured: true,
      imageUrl: '/api/placeholder/400/250?text=JWST'
    },
    {
      id: '2',
      title: 'Black Holes: The Universe\'s Most Mysterious Objects',
      description: 'Dive into the fascinating physics of black holes and recent breakthroughs in observing these cosmic phenomena.',
      date: '2024-01-10',
      category: 'cosmology',
      readTime: '12 min',
      featured: true,
      imageUrl: '/api/placeholder/400/250?text=Black+Hole'
    },
    {
      id: '3',
      title: 'Mars Colonization: The Next Frontier',
      description: 'Examining the challenges and possibilities of establishing human settlements on the Red Planet.',
      date: '2024-01-08',
      category: 'space-exploration',
      readTime: '10 min',
      featured: false,
      imageUrl: '/api/placeholder/400/250?text=Mars'
    },
    {
      id: '4',
      title: 'Astrophotography Guide: Capturing the Night Sky',
      description: 'Essential tips and equipment for beginners looking to photograph celestial objects.',
      date: '2024-01-05',
      category: 'photography',
      readTime: '6 min',
      featured: false,
      imageUrl: '/api/placeholder/400/250?text=Night+Sky'
    },
    {
      id: '5',
      title: 'The Search for Exoplanets',
      description: 'How astronomers are discovering planets beyond our solar system and what makes them habitable.',
      date: '2024-01-03',
      category: 'exoplanets',
      readTime: '9 min',
      featured: true,
      imageUrl: '/api/placeholder/400/250?text=Exoplanet'
    },
    {
      id: '6',
      title: 'Understanding Dark Matter',
      description: 'Unraveling one of the greatest mysteries in modern astrophysics.',
      date: '2024-01-01',
      category: 'cosmology',
      readTime: '11 min',
      featured: false,
      imageUrl: '/api/placeholder/400/250?text=Dark+Matter'
    }
  ];

  

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 bg-slate-950 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cosmic Chronicles
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the wonders of the universe through our collection of astronomy magazines and articles
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
                placeholder="Search magazines by title, description..."
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Title A-Z</option>
                <option>Most Recent</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ⬆️⬇️
              </div>
            </div>

            {/* Create New Magazine Button */}
            <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
              Create New Magazine
            </button>
          </div>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazines.map(magazine => (
            <div
              key={magazine.id}
              className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Magazine Image */}
              <div className="relative h-48 overflow-hidden">
                
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                
                {/* Featured Badge */}
                {magazine.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-amber-500/90 text-amber-50 px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {magazine.category.replace('-', ' ')}
                </div>
              </div>

              {/* Magazine Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(magazine.date)}
                  </div>
                  <span className="flex items-center gap-1">
                    ⏱️ {magazine.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {magazine.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {magazine.description}
                </p>

                <button className="w-full bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {magazines.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔭</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No magazines found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MagazinePage;