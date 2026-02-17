import ArticleCard from "@/components/modules/home/ArticleCard";
import EventCard from "@/components/modules/home/EventCard";
import HeroSection from "@/components/modules/home/HeroSection";
import MagazineCard from "@/components/modules/home/MagazineCard";
import MemberCard from "@/components/modules/home/MemberCard";
import WhoWeAre from "@/components/modules/home/WhoWeAre";
import { baseURL } from "@/services/config/BaseURL";
import { Article } from "@/types/article";
import { Magazine } from "@/types/magazine";
import { Member } from "@/types/member";
import Link from "next/link";

const HomePage = async () => {
  const response = await fetch(
    `${baseURL}/api/magazines`,
    {
      cache: "no-cache",
    }
  );

  const response2 = await fetch(
    `${baseURL}/api/articles/`,
    {
      cache: "no-cache",
    }
  );

  const response3 = await fetch(
    `${baseURL}/api/members/`,
    {
      cache: "no-cache",
    }
  );

 
  const members: Member[] = await response3.json();
  const articles: Article[] = await response2.json();
  const magazines: Magazine[] = await response.json();

  return (
    <div className="bg-slate-950 ">
      <HeroSection />
      <WhoWeAre />
      <EventCard />
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h3 className="text-3xl  font-semibold mb-8">📚 Top Magazines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {magazines.slice(0, 4).map((magazine) => (
            <Link href={`/magazines/${magazine.id}`} key={magazine.id}>
              {" "}
              <MagazineCard magazine={magazine} />
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-5 md:py-16">
        
        <h3 className="text-3xl font-semibold mb-8">📝 Latest Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {articles.slice(0, 4).map((article) => (
            <Link href={`/magazines/${article.id}`} key={article.id}>
              {" "}
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-8">✨ Our Stellar Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <Link href={`/member`} key={member.id}>
              <MemberCard member={member} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
