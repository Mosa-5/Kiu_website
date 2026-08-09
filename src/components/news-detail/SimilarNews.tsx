import React from "react";
import { useParams } from "react-router-dom";
import { container, innerWrapper, heading } from "./SimilarNews.styles";
import { useNewsTranslations } from "../../hooks/useNewsTranslations";
import NewsCarousel from "../home/news/NewsCarousel";
import { useNewsItems } from "@/hooks/useNewsItems";

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  image?: string;
  imageSm?: string;
};

const getRandomNews = (data: NewsItem[], count: number): NewsItem[] => {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, count);
};

const SimilarNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useNewsTranslations();
  const newsItems = useNewsItems();
  const filteredNews = newsItems.filter((item) => item.id !== id);
  const randomNews = getRandomNews(filteredNews, 10);

  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <h2 className={heading()}>{t("similarNews")}</h2>
        <NewsCarousel data={randomNews} />
      </div>
    </div>
  );
};

export default SimilarNews;
