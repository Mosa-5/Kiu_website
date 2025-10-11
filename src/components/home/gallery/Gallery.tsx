"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import galleryimg from "@/assets/galleryiimg.jpg";
import {
  container,
  innerWrapper,
  headerSection,
  title,
  carousel,
  carouselContent,
  carouselItem,
  card,
  cardContent,
  image,
  prevButton,
  nextButton,
} from "./Gallery.styles";

const Gallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <div className={headerSection()}>
          <h1 className={title()}>Video Gallery</h1>
        </div>
        <Carousel setApi={setApi} className={carousel()} opts={{ loop: true }}>
          <CarouselContent className={carouselContent()}>
            {Array.from({ length: 5 }).map((_, index) => {
              const isActive = index === current;

              return (
                <CarouselItem key={index} className={carouselItem()}>
                  <Card
                    className={cn(card(), {
                      "scale-[1.15]": isActive,
                      "scale-[0.8]": !isActive,
                    })}
                  >
                    <CardContent className={cardContent()}>
                      <img
                        className={image()}
                        src={galleryimg}
                        alt={`Gallery image ${index + 1}`}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className={prevButton()} />
          <CarouselNext className={nextButton()} />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
