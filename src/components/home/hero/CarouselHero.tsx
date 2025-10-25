import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextForHero,
  CarouselPreviousForHero,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import {
  heroimg1,
  heroimg2,
  heroimg3,
  heroimg4,
  heroimg5,
  heroimg1Ka,
  heroimg2Ka,
  heroimg3Ka,
  heroimg4Ka,
  heroimg5Ka,
} from "@/assets";

import {
  container,
  carousel,
  carouselContent,
  carouselItem,
  carouselImage,
  dotContainer,
  carouselDot,
} from "./CarouselHero.styles";
import { useParams } from "react-router-dom";
import "./CarouselHero.css";

const heroImagesEn = [heroimg1, heroimg2, heroimg3, heroimg4, heroimg5];
const heroImagesKa = [
  heroimg1Ka,
  heroimg2Ka,
  heroimg3Ka,
  heroimg4Ka,
  heroimg5Ka,
];

const CarouselHero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const heroImages = currentLang === "ka" ? heroImagesKa : heroImagesEn;

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    let interval: ReturnType<typeof setInterval> | null = null;
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;
    let isAutoScrolling = false;

    const startAuto = () => {
      if (!interval) {
        interval = setInterval(() => {
          isAutoScrolling = true;
          api.scrollNext();
          setTimeout(() => {
            isAutoScrolling = false;
          }, 100);
        }, 4000);
      }
    };

    const stopAuto = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const restartAfterDelay = () => {
      stopAuto();
      if (pauseTimeout) clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        if (!document.hidden) startAuto();
      }, 5000);
    };

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      if (!isAutoScrolling) {
        restartAfterDelay();
      }
    };

    api.on("select", handleSelect);
    startAuto();

    const handleVisibility = () => {
      if (document.hidden) {
        stopAuto();
      } else {
        startAuto();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopAuto();
      if (pauseTimeout) clearTimeout(pauseTimeout);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [api]);

  return (
    <div className={container()}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 25 }}
        className={`${carousel()} carousel-hero-animate`}
      >
        <CarouselContent className={carouselContent()}>
          {heroImages.map((img, index) => (
            <CarouselItem className={carouselItem()} key={index}>
              <img
                className={carouselImage()}
                src={img}
                alt={`hero img ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousForHero />
        <CarouselNextForHero />
      </Carousel>
      <div className={`${dotContainer()} carousel-dots-animate`}>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={carouselDot({ active: current === index + 1 })}
            aria-label="Carousel switch"
            title="Carousel switch"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
