import NewsDetail from "@/components/news-detail/NewsDetail";
import NewsDetailsHero from "@/components/news-detail/NewsDetailsHero";
import SimilarNews from "@/components/news-detail/SimilarNews";
import PageWrapper from "./PageWrapper";

const SingleNews = () => {
  return (
    <PageWrapper hero={<NewsDetailsHero />}>
      <div className="px-4 space-y-8">
        <NewsDetail />
        <SimilarNews />
      </div>
    </PageWrapper>
  );
};

export default SingleNews;
