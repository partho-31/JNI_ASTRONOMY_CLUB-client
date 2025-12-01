import ArticleCard from "@/components/modules/home/ArticleCard";
import HeroSection from "@/components/modules/home/HeroSection";
import MagazineCard from "@/components/modules/home/MagazineCard";
import MemberCard from "@/components/modules/home/MemberCard";

export default function HomePage() {
  return (
    < div className="bg-slate-950 ">
      <HeroSection />
      <MemberCard />
      <MagazineCard />
      <ArticleCard />
    </div>
  );
}
