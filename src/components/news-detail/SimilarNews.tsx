import React from "react";
import newsItems from "@/data/newsItems";
import kiuimage from "@/assets/KIU.jpg";
import { useParams } from "react-router-dom";
import {
  container,
  innerWrapper,
  heading,
  grid,
  card,
  hoverBar,
  imageWrapper,
  image,
  cardContent,
  date,
  title,
} from "./SimilarNews.styles";

type NewsItem = {
  id: number;
  date: string;
  title: string;
};

function getRandomNews(data: NewsItem[], count: number): NewsItem[] {
  return [...data].sort(() => 0.5 - Math.random()).slice(0, count);
}

const SimilarNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);

  const filteredNews = newsItems.filter((item) => item.id !== currentId);
  const randomNews = getRandomNews(filteredNews, 3);

  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <h2 className={heading()}>Similar News</h2>
        <div className={grid()}>
          {randomNews.map((item) => (
            <div key={item.id} className={card()}>
              <div className={hoverBar()} />
              <div className={imageWrapper()}>
                <img src={kiuimage} alt={item.title} className={image()} />
              </div>
              <div className={cardContent()}>
                <p className={date()}>{item.date}</p>
                <h3 className={title()}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarNews;
