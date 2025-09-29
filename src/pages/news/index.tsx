import NewsHero from "@/components/news/news-hero";
import SectionSwitcher from "@/components/news/section-switcher";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHero />
      <SectionSwitcher />
    </div>
  );
};

export default News;