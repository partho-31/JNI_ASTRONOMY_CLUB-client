"use client"
import { Button } from "@/components/ui/button";

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
      <div className="absolute inset-0 bg-slate-950/60  z-0"></div>

      {/* Foreground Content */}
      <div className="relative mt-6 z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          <span className="text-8xl">T</span>HINK DEEP AND EXPL<span>🪐</span>RE<span className="text-cyan-500">!</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl backdrop-blur-sm mt-6 max-w-2xl">
          Uncover the mysteries of the universe with breathtaking galactic views, immersive exhibits and hands-on space exploration for all ages.
        </p>

        <div  className="mt-8">
          <Button className="bg-transparent text-white border-2 hover:text-black hover:border-0 border-cyan-500">Explore Exhibits</Button>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
