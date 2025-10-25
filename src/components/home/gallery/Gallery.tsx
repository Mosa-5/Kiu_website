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
  const [loadedThumbnails, setLoadedThumbnails] = React.useState<Set<number>>(
    new Set()
  );

  // Gallery items - YouTube videos
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
      setPlayingVideo(null);
    });
  }, [api]);

  // Preload thumbnails only when they come into view
  React.useEffect(() => {
    const currentIndex = current;
    const indicesToLoad = [
      currentIndex,
      (currentIndex - 1 + galleryItems.length) % galleryItems.length,
      (currentIndex + 1) % galleryItems.length,
    ];

    indicesToLoad.forEach((index) => {
      if (!loadedThumbnails.has(index)) {
        setLoadedThumbnails((prev) => new Set(prev).add(index));
      }
    });
  }, [current, galleryItems.length, loadedThumbnails]);

  const handleVideoClick = (index: number) => {
    if (index === current) {
      setPlayingVideo(index);
    } else {
      api?.scrollTo(index);
    }
  };

  // Generate thumbnail URL with no-referrer policy
  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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
              const shouldLoadThumbnail = loadedThumbnails.has(index);

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
                          <div
                            className={thumbnailWrapper()}
                            onClick={() => handleVideoClick(index)}
                          >
                            {shouldLoadThumbnail ? (
                              <img
                                className={image()}
                                src={getThumbnailUrl(item.videoId)}
                                alt={item.title}
                                referrerPolicy="no-referrer"
                                crossOrigin="anonymous"
                                loading="lazy"
                              />
                            ) : (
                              <div
                                className={cn(
                                  image(),
                                  "bg-gray-900 flex items-center justify-center"
                                )}
                              >
                                <div className="text-white text-sm">
                                  Loading...
                                </div>
                              </div>
                            )}
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
                          <>
                            <img
                              className={cn(image(), thumbnailImage())}
                              src={getThumbnailUrl(item.videoId)}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              crossOrigin="anonymous"
                            />
                            <div className={loadingContainer()}>
                              <div className={loadingSpinner()} />
                            </div>
                            <iframe
                              className={cn(image(), videoIframe())}
                              src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
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
