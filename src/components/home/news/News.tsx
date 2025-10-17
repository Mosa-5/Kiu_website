import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { kiuCardImg } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  innerWrapper,
  headerSection,
  title,
  seeAllButton,
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
  newsTitle,
  carouselButton,
} from "./News.styles";
import { Link } from "react-router-dom";
import newsItems from "@/data/newsItems";

const NewsSection = () => {
  return (
    <div className={innerWrapper()}>
      <div className={headerSection()}>
        <h1 className={title()}>News</h1>
        <Link to="/news">
          <Button className={seeAllButton()} variant={"secondary"}>
            See All
          </Button>
        </Link>
      </div>
      <Carousel
        className={carousel()}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className={carouselContent()}>
          {newsItems.slice(0, 5).map((item) => (
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
    </div>
  );
};

export default NewsSection;
