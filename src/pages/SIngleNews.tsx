import NewsDetail from "@/components/news-detail/NewsDetail";
import NewsDetailsHero from "@/components/news-detail/NewsDetailsHero";
import SimilarNews from "@/components/news-detail/SimilarNews";

const SingleNews = () => {
  return (
    <div className="min-h-screen">
      <NewsDetailsHero />
      <div className="px-4">
        <NewsDetail />
        <SimilarNews />
      </div>
    </div>
  );
};

export default SingleNews;
