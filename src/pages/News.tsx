import NewsHero from "@/components/news/NewsHero";
import SectionSwitcher from "@/components/news/SectionSwitcher";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHero />
      <div className="px-4 sm:px-[100px]">
        <SectionSwitcher />
      </div>
    </div>
  );
};

export default News;
