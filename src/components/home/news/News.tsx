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
import { Link, useParams } from "react-router-dom";
import { useHomeTranslations } from "../hooks/useHomeTranslation";
import { useNewsItems } from "@/hooks/useNewsItems";

const NewsSection = () => {
  const { t } = useHomeTranslations();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const newsItems = useNewsItems();
  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <div className={headerSection()}>
          <h1 className={title()}>{t("home.news")}</h1>
          <Link to={`/${currentLang}/news`}>
            <Button className={seeAllButton()} variant={"secondary"}>
              {t("home.seeall")}
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
                <Link to={`/${currentLang}/news/${item.id}`}>
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
    </div>
  );
};

export default NewsSection;
