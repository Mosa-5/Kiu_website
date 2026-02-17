import NewsHero from "@/components/news/NewsHero";
import SectionSwitcher from "@/components/news/SectionSwitcher";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const News = () => {
  return (
    <PageWrapper hero={<NewsHero />} className="bg-background">
      <div className="max-w-[1680px] sm:max-3xl:max-w-[1400px] mx-auto px-4 sm:px-10">
        <SectionSwitcher />
      </div>
    </PageWrapper>
  );
};

export default News;
