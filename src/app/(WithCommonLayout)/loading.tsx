import { IoMdRocket } from "react-icons/io";


const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        {/* Rocket Icon */}
        <div className="relative">
          <IoMdRocket className="w-14 h-14 text-white animate-bounce" />

          
        </div>

        {/* Text */}
        <p className="text-sm tracking-widest text-slate-300">
          Preparing for launch...
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes flame {
          0%,100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(1.4); opacity: 0.7; }
        }
        .animate-flame {
          animation: flame 0.6s ease-in-out infinite;
        }
      `}</style>
      
    </div>
  );
};

export default loading;
