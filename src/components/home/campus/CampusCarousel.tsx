import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import {
  container,
  carousel,
  carouselContent,
  carouselItem,
  carouselImage,
  dotContainer,
  dot,
} from "./CampusCarousel.styles";

import {
  campus1,
  campus2,
  campus3,
  campus4,
  campus1Sm,
  campus2Sm,
  campus3Sm,
  campus4Sm,
} from "@/assets";

const campusimages = [
  { full: campus2, sm: campus2Sm },
  { full: campus1, sm: campus1Sm },
  { full: campus3, sm: campus3Sm },
  { full: campus4, sm: campus4Sm },
];

const CampusCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(campusimages.length);
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
          {campusimages.map((img, index) => (
            <CarouselItem className={carouselItem()} key={index}>
              <picture>
                <source media="(max-width: 639px)" srcSet={img.sm} />
                <img
                  className={carouselImage()}
                  src={img.full}
                  alt={`campus img ${index + 1}`}
                />
              </picture>
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
            aria-label={`Go to campus image ${index + 1} of ${count}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusCarousel;
