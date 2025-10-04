import NewsHero from "@/components/news/NewsHero";
import SectionSwitcher from "@/components/news/SectionSwitcher";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHero />
      <SectionSwitcher />
    </div>
  );
};

export default News;
