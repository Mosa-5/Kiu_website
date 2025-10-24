import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  MapPin,
  Bus,
  Building2,
  Wifi,
  FileText,
} from "lucide-react";
import { useCampusTranslations } from "@/hooks/useCampusTranslations";
import { campusContent } from "@/content/campus";
import * as React from "react";
import {
  sectionDescription,
  container,
  contentWrapper,
  paragraph,
  grid,
  featureCard,
  featureIconWrapper,
  featureTitle,
  featureDescription,
  sectionVideo,
  videoSectionWrapper,
  dormitoryWrapper,
  dormitoryHeader,
  dormitoryIconWrapper,
  dormitoryTitle,
  dormitoryDescription,
  iframeWrapper,
  featureIcon,
  animateFadeIn,
  buttonClass,
  buttonIcon,
  dormitoryIcon,
  playButton,
  playButtonPolygon,
  playButtonCircle,
  playOverlay,
  thumbnailImage,
  loadingContainer,
  loadingSpinner,
  videoIframe,
} from "./CampusDetail.styles";

export const CampusDetail = () => {
  const { t } = useCampusTranslations();
  const { buttonUrl, videoUrl, videoTitle: videoTitleAttr } = campusContent;
  const [showVideo, setShowVideo] = React.useState(false);

  // Extract video ID from URL
  const getVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/,
      /youtube\.com\/embed\/([^?/]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  // Convert regular YouTube URL to nocookie embed URL
  const getPrivacyEnhancedUrl = (url: string) => {
    const videoId = getVideoId(url);
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    return url.replace("youtube.com", "youtube-nocookie.com");
  };

  const videoId = getVideoId(videoUrl);

  const features = [
    { icon: MapPin, key: "location" },
    { icon: Bus, key: "accessibility" },
    { icon: Building2, key: "facilities" },
    { icon: Wifi, key: "technology" },
  ];

  return (
    <>
      {/* Campus Description Section */}
      <section className={sectionDescription()}>
        <div className={container()}>
          <div className={contentWrapper()}>
            <div className={animateFadeIn()}>
              <p className={paragraph()}>{t("description.mainText")}</p>

              <div className={grid()}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className={featureCard()}>
                      <div className={featureIconWrapper()}>
                        <Icon className={featureIcon()} />
                      </div>
                      <div>
                        <h3 className={featureTitle()}>
                          {t(`description.features.${feature.key}.title`)}
                        </h3>
                        <p className={featureDescription()}>
                          {t(`description.features.${feature.key}.description`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video + Dormitory Section */}
      <section className={sectionVideo()}>
        <div className={container()}>
          <div className={videoSectionWrapper()}>
            {/* Dormitory Section */}
            <div className={dormitoryWrapper()}>
              <div className={dormitoryHeader()}>
                <div className={dormitoryIconWrapper()}>
                  <FileText className={dormitoryIcon()} />
                </div>
                <h2 className={dormitoryTitle()}>{t("dormitory.title")}</h2>
              </div>
              <p className={dormitoryDescription()}>
                {t("dormitory.description")}
              </p>
              <Button size="lg" className={buttonClass()} asChild>
                <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                  {t("dormitory.buttonText")}
                  <ExternalLink className={buttonIcon()} />
                </a>
              </Button>
            </div>

            {/* Video Tour Section */}
            <div className={iframeWrapper()}>
              {!showVideo && videoId ? (
                <div
                  onClick={() => setShowVideo(true)}
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    aspectRatio: "16/9",
                    width: "100%",
                    background: "#000",
                  }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={videoTitleAttr}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
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
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={videoTitleAttr}
                    referrerPolicy="no-referrer"
                    className={thumbnailImage()}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className={loadingContainer()}>
                    <div className={loadingSpinner()} />
                  </div>
                  <iframe
                    width="560"
                    height="315"
                    src={getPrivacyEnhancedUrl(videoUrl)}
                    title={videoTitleAttr}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={videoIframe()}
                  ></iframe>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
