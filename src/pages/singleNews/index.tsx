
import NewsDetail from "@/components/newsDetail/newsDetail";
import NewsDetailsHero from "@/components/newsDetail/newsDetailsHero";
import SimilarNews from "@/components/newsDetail/SimilarNews";

const SingleNews = () => {
  return (
    <div className="min-h-screen">
      <NewsDetailsHero />
      <NewsDetail />
      <SimilarNews/>
    </div>
  );
};

export default SingleNews;