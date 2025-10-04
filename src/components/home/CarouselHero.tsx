import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextForHero,
  CarouselPreviousForHero,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroimg from "@/assets/masters_degree-slider.png";
import {
  container,
  carousel,
  carouselContent,
  carouselItem,
  carouselImage,
  dotContainer,
  carouselDot,
} from "./CarouselHero.styles";

const CarouselHero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));

    let interval: ReturnType<typeof setInterval> | null = null;
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;

    const startAuto = () => {
      if (!interval) {
        interval = setInterval(() => {
          api.scrollNext();
        }, 3000);
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
        // Only restart if page is visible
        if (!document.hidden) startAuto();
      }, 5000); // pause 5s after manual click
    };

    // Start initially
    startAuto();

    // Stop completely when tab hidden; restart cleanly when visible
    const handleVisibility = () => {
      if (document.hidden) {
        stopAuto(); // cancel timer, no catch-up
      } else {
        startAuto(); // start fresh
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Pause briefly after manual interaction
    api.on("scroll", () => restartAfterDelay());

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
        opts={{ loop: true, duration: 50 }}
        className={carousel()}
      >
        <CarouselContent className={carouselContent()}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className={carouselItem()} key={index}>
              <Link to="/home">
                <img className={carouselImage()} src={heroimg} alt="hero img" />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousForHero />
        <CarouselNextForHero />
      </Carousel>
      <div className={dotContainer()}>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={carouselDot({ active: current === index + 1 })}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
