const AboutSection = () => {
  return (
    <div  className="py-30 bg-slate-950  overflow-hidden">
      <div className="container mx-auto px-6 relative ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know About <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Exploring the cosmos, one star at a time. Welcome to the heart of astronomical discovery at our university.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-cyan-400 text-xl">✦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Who We Are</h3>
                <p className="text-slate-300">
                  The Jamal Nazrul Islam Astronomy Club (JNIAC) is a vibrant community of space enthusiasts, 
                  students and researchers dedicated to exploring the wonders of our universe.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-blue-400 text-xl">☄️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-slate-300">
                  To inspire curiosity about the cosmos through observation, research, and education, 
                  making astronomy accessible to everyone in our university community.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-purple-400 text-xl">🔭</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What We Do</h3>
                <p className="text-slate-300">
                  Regular stargazing sessions, workshops, guest lectures, research projects, 
                  and participation in national astronomy events and competitions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-slate-400 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24</div>
                <div className="text-slate-400 text-sm">Events/Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5</div>
                <div className="text-slate-400 text-sm">Research Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Graphic */}
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <div className="aspect-square rounded-lg bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center relative overflow-hidden">

                <div className="text-center text-slate-400">
                  <div className="text-6xl mb-4">🌌</div>
                  <p className="text-lg">Club Photo / Observatory</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;