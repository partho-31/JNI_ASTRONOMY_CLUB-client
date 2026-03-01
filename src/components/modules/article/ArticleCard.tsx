import { Article } from "@/types/article";
import Image from "next/image";

const ArticleCard = ({article} : { article : Article}) => {
    const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
    return (
       <div className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="relative h-48 overflow-hidden">
                 <Image
                    src={`https://res.cloudinary.com/jniac-just/${article.cover_img}`}
                    fill
                    alt="cover"
                    className="object-cover"
                    /> 
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />

              <div className="absolute top-4 right-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.magazine_title}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  📅 {formatDate(article.created_at)}
                </div>
                <span>⏱️ {article.read_time}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                {article.title}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {article.discription}
              </p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full overflow-hidden flex items-center justify-center text-white text-sm font-bold">
                    <Image
                    src={`https://res.cloudinary.com/jniac-just/${article.author.image}`}
                    fill
                    alt="cover"
                    className="object-cover"
                    /> 
                  </div>
                  <span className="text-gray-400 text-sm">{article.author.first_name} {article.author.last_name} </span>
                </div>
               <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200">
                  Continue Reading →
                </button>
              </div>
            </div>
          </div>
    );
};

export default ArticleCard;