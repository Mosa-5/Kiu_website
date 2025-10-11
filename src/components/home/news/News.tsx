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
  container,
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

const NewsSection = () => {
  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <div className={headerSection()}>
          <h1 className={title()}>News</h1>
          <Button className={seeAllButton()} variant={"secondary"}>
            See All
          </Button>
        </div>
        <Carousel
          className={carousel()}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className={carouselContent()}>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className={carouselItem()}>
                <Card className={card()}>
                  <CardContent className={cardContent()}>
                    <div className={hoverBar()} />
                    <div className={imageWrapper()}>
                      <img src={kiuCardImg} alt="newsImg" className={image()} />
                    </div>
                    <div className={contentSection()}>
                      <p className={date()}>Sep 15, 2025</p>
                      <h3 className={newsTitle()}>
                        Academic Registration for Fall 2025-2026 Now Open
                      </h3>
                    </div>
                  </CardContent>
                </Card>
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

export default NewsSection;
