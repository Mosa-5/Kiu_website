"use client";
import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextForHero,
  CarouselPreviousForHero,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import heroimg from "@/assets/masters_degree-slider-03 2.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CarouselHero = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
    <div className="w-full h-[707px] relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 50 }}
        className="w-full h-full"
      >
        <CarouselContent className="w-full h-full -ml-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="w-full h-full pl-0" key={index}>
              <Link to="/home">
                <img
                  className="h-[707px] w-full"
                  src={heroimg}
                  alt="hero img"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousForHero />
        <CarouselNextForHero />
      </Carousel>
      <div className="flex justify-center items-center gap-2 z-2 absolute left-1/2 -translate-x-1/2 bottom-1/30">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              `h-3 w-3 rounded-full border-2 cursor-pointer duration-200 ${
                current === index + 1 ? "" : "hover:bg-white"
              }`,
              {
                "bg-[#3C70AF] border-[#3C70AF]": current === index + 1,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
