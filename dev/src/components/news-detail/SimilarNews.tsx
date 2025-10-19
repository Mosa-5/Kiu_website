import React from "react";
import newsItems from "@/data/newsItems";
import { useParams } from "react-router-dom";
import { container, innerWrapper, heading } from "./SimilarNews.styles";
import NewsCarousel from "../home/news/NewsCarousel";

export type NewsItem = {
  id: string;
  date: string;
  title: string;
};

const getRandomNews = (data: NewsItem[], count: number): NewsItem[] => {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, count);
};

const SimilarNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const filteredNews = newsItems.filter((item) => item.id !== id);
  const randomNews = getRandomNews(filteredNews, 10);

  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <h2 className={heading()}>Similar News</h2>
        <NewsCarousel data={randomNews} />
      </div>
    </div>
  );
};

export default SimilarNews;
