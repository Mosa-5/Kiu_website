import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  card,
  cardContent,
  carousel,
  carouselButton,
  carouselContent,
  carouselItem,
  contentSection,
  date,
  hoverBar,
  image,
  imageWrapper,
  newsTitle,
} from "./NewsCarousel.styles";
import newsItems from "@/data/newsItems";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { kiuCardImg } from "@/assets";
import type { NewsItem } from "@/components/news-detail/SimilarNews";

const NewsCarousel: React.FC<{
  data?: NewsItem[];
}> = ({ data = newsItems }) => {
  return (
    <Carousel
      className={carousel()}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className={carouselContent()}>
        {data.slice(0, 5).map((item) => (
          <CarouselItem key={item.id} className={carouselItem()}>
            <Link to={`/news/${item.id}`}>
              <Card className={card()}>
                <CardContent className={cardContent()}>
                  <div className={hoverBar()} />
                  <div className={imageWrapper()}>
                    <img src={kiuCardImg} alt="newsImg" className={image()} />
                  </div>
                  <div className={contentSection()}>
                    <p className={date()}>{item.date}</p>
                    <h3 className={newsTitle()}>{item.title}</h3>
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
  );
};

export default NewsCarousel;
