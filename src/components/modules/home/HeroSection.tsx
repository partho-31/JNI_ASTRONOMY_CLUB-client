const HeroSection = () => {
  return ( 
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background GIF */}
      <div
        className="absolute inset-0  bg-cover bg-center bg-no-repeat blur-[3px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/jniac-just/image/upload/v1763143757/bg_s7kdrx.gif')",
        }}
      ></div>

      {/* Background Overly  */}
      <div className="absolute inset-0 bg-indigo-950/30 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to the Cosmos
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl">
          Explore the mysteries of the universe with celestial animations and
          deep space visuals.
        </p>

        <div className="mt-8">
          <a className="btn bg-linear-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/30 text-white hover:bg-cyan-500/30 hover:border-cyan-300/50 hover:scale-105 transition-all duration-300">
            Explore Universe
            <span className="ml-2 text-cyan-300">✦</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
