import React from "react";
import newsItems from "@/data/newsItems";
import { kiuCardImg } from "@/assets";
import { useParams, Link } from "react-router-dom";
import {
  container,
  innerWrapper,
  heading,
  carousel,
  carouselContent,
  carouselItem,
  card,
  cardContent,
  hoverBar,
  imageWrapper,
  image,
  contentSection,
  date,
  carouselButton,
  title,
} from "./SimilarNews.styles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

type NewsItem = {
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
        <Carousel
          className={carousel()}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className={carouselContent()}>
            {randomNews.map((item) => (
              <CarouselItem key={item.id} className={carouselItem()}>
                <Link to={`/news/${item.id}`}>
                  <Card className={card()}>
                    <CardContent className={cardContent()}>
                      <div className={hoverBar()} />
                      <div className={imageWrapper()}>
                        <img
                          src={kiuCardImg}
                          alt="newsImg"
                          className={image()}
                        />
                      </div>
                      <div className={contentSection()}>
                        <p className={date()}>{item.date}</p>
                        <h3 className={title()}>{item.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={carouselButton()} />
          <CarouselNext className={carouselButton()} />
        </Carousel>
      </div>
    </div>
  );
};

export default SimilarNews;
