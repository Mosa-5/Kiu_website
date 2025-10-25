import NewsHero from "@/components/news/NewsHero";
import SectionSwitcher from "@/components/news/SectionSwitcher";
import PageWrapper from "./PageWrapper";

const News = () => {
  return (
    <PageWrapper hero={<NewsHero />} className="bg-background">
      <div className="px-4 sm:px-[100px]">
        <SectionSwitcher />
      </div>
    </PageWrapper>
  );
};

export default News;
