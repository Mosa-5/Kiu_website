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
  videoContainer,
  thumbnailWrapper,
  playOverlay,
  playButton,
  playButtonPolygon,
  playButtonCircle,
  videoTitle,
  thumbnailImage,
  loadingContainer,
  loadingSpinner,
  videoIframe,
  counter,
} from "./Gallery.styles";
import { useHomeTranslations } from "../../../hooks/useHomeTranslation";

const Gallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const { t } = useHomeTranslations();

  const [playingVideo, setPlayingVideo] = React.useState<number | null>(null);

  // Gallery items - mix of images and YouTube videos
  const galleryItems = [
    {
      type: "youtube",
      videoId: "EXxwB2r2meU",
      title: "KIU Campus Tour - KIU კამპუსის ვიდეო ტური",
    },
    {
      type: "youtube",
      videoId: "MWywbw1BEFQ",
      title: "KIU - ადგილი, სადაც ცოდნა ქმნის მომავალს",
    },

    {
      type: "youtube",
      videoId: "1Mv96goZMwM",
      title: "მათემატიკოსთა საერთაშორისო კონფერენცია KIU-ში",
    },

    {
      type: "youtube",
      videoId: "Qq2TK2pN8FU",
      title: "GITA-ს 2025 წლის საზაფხულო სკოლის საზემო დახურვა",
    },
    {
      type: "youtube",
      videoId: "rGuBadwmdqo",
      title: "KIU-ს, საქპატენტისა და WIPO-ს ერთობლივი სამაგისტრო პროგრამა",
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setPlayingVideo(null); // Stop video when sliding
    });
  }, [api]);

  const handleVideoClick = (index: number) => {
    if (index === current) {
      // If clicking the active video, play it
      setPlayingVideo(index);
    } else {
      // If clicking a non-active video, scroll to it first
      api?.scrollTo(index);
    }
  };

  return (
    <div className={container()}>
      <div className={innerWrapper()}>
        <div className={headerSection()}>
          <h1 className={title()}>{t("home.videogallery")}</h1>
        </div>
        <Carousel setApi={setApi} className={carousel()} opts={{ loop: true }}>
          <CarouselContent className={carouselContent()}>
            {galleryItems.map((item, index) => {
              const isActive = index === current;

              return (
                <CarouselItem key={index} className={carouselItem()}>
                  <Card
                    className={cn(card(), {
                      "sm:scale-[1.15]": isActive,
                      "sm:scale-[0.8]": !isActive,
                    })}
                  >
                    <CardContent className={cardContent()}>
                      <div className={videoContainer()}>
                        {playingVideo !== index ? (
                          // Thumbnail view
                          <div
                            className={thumbnailWrapper()}
                            onClick={() => handleVideoClick(index)}
                          >
                            <img
                              className={image()}
                              src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                              alt={item.title}
                            />
                            {/* Play button overlay */}
                            <div className={playOverlay()}>
                              <svg
                                className={playButton()}
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 213.7 213.7"
                              >
                                <polygon
                                  className={playButtonPolygon()}
                                  strokeWidth="7"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  points="73.5,62.5 148.5,105.8 73.5,149.1"
                                />
                                <circle
                                  className={playButtonCircle()}
                                  strokeWidth="7"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  cx="106.8"
                                  cy="106.8"
                                  r="103.3"
                                />
                              </svg>
                              {item.title && (
                                <p className={videoTitle()}>{item.title}</p>
                              )}
                            </div>
                          </div>
                        ) : (
                          // Video player
                          <>
                            <img
                              className={cn(image(), thumbnailImage())}
                              src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                              alt={item.title}
                            />
                            {/* Loading spinner */}
                            <div className={loadingContainer()}>
                              <div className={loadingSpinner()} />
                            </div>
                            {/* Video player */}
                            <iframe
                              className={cn(image(), videoIframe())}
                              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className={counter()}>{(current % 5) + 1}/5</div>
          <CarouselPrevious
            className={prevButton()}
            aria-label="Previous video"
            title="Previous video"
          />
          <CarouselNext
            className={nextButton()}
            aria-label="Next video"
            title="Next video"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
