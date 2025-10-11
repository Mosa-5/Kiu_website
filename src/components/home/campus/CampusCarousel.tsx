import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { newsHeroImage } from "@/assets";
import {
  container,
  carousel,
  carouselContent,
  carouselItem,
  carouselImage,
  dotContainer,
  dot,
} from "./CampusCarousel.styles";

export default function CarouselWithPagination() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={container()}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 35,
          dragFree: false,
          skipSnaps: false,
        }}
        setApi={setApi}
        className={carousel()}
      >
        <CarouselContent className={carouselContent()}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className={carouselItem()} key={index}>
              <img
                className={carouselImage()}
                src={newsHeroImage}
                alt="hero img"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={dotContainer()}>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={dot({ active: current === index + 1 })}
          />
        ))}
      </div>
    </div>
  );
}
