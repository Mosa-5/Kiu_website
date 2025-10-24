import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Bus, Building2, Wifi, FileText } from "lucide-react";
import { useCampusTranslations } from "@/hooks/useCampusTranslations";
import { campusContent } from "@/content/campus";
import * as styles from "./CampusDetail.styles";
import * as React from "react";

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
    return url.replace('youtube.com', 'youtube-nocookie.com');
  };

  const videoId = getVideoId(videoUrl);

  const features = [
    { icon: MapPin, key: "location" },
    { icon: Bus, key: "accessibility" },
    { icon: Building2, key: "facilities" },
    { icon: Wifi, key: "technology" }
  ];

  return (
    <>
      {/* Campus Description Section */}
      <section className={styles.sectionDescription()}>
        <div className={styles.container()}>
          <div className={styles.contentWrapper()}>
            <div className="animate-fade-in">
              <p className={styles.paragraph()}>
                {t("description.mainText")}
              </p>

              <div className={styles.grid()}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className={styles.featureCard()}>
                      <div className={styles.featureIconWrapper()}>
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className={styles.featureTitle()}>
                          {t(`description.features.${feature.key}.title`)}
                        </h3>
                        <p className={styles.featureDescription()}>
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
      <section className={styles.sectionVideo()}>
        <div className={styles.container()}>
          <div className={styles.videoSectionWrapper()}>

            {/* Dormitory Section */}
            <div className={styles.dormitoryWrapper()}>
              <div className={styles.dormitoryHeader()}>
                <div className={styles.dormitoryIconWrapper()}>
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className={styles.dormitoryTitle()}>
                  {t("dormitory.title")}
                </h2>
              </div>

              <p className={styles.dormitoryDescription()}>
                {t("dormitory.description")}
              </p>

              <Button size="lg" className="group" asChild>
                <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                  {t("dormitory.buttonText")}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Video Tour Section */}
            <div className={styles.videoWrapper()}>
              <h2 className={styles.videoTitle()}>
                {t("videoTour.title")}
              </h2>
              <p className={styles.videoSubtitle()}>
                {t("videoTour.subtitle")}
              </p>

              <div className={styles.iframeWrapper()}>
                {!showVideo && videoId ? (
                  <div 
                    onClick={() => setShowVideo(true)}
                    className="relative cursor-pointer group"
                    style={{
                      aspectRatio: '16/9',
                      width: '100%',
                      background: '#000',
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={videoTitleAttr}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium drop-shadow-lg">
                        {t("videoTour.clickToPlay") || "Click to play video"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="560"
                    height="315"
                    src={getPrivacyEnhancedUrl(videoUrl)}
                    title={videoTitleAttr}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};