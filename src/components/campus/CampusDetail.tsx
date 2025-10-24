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
  iframeInner,
  featureIcon,
  animateFadeIn,
  buttonClass,
  buttonIcon,
  dormitoryIcon,
} from "./CampusDetail.styles";

export const CampusDetail = () => {
  const { t } = useCampusTranslations();
  const { buttonUrl, videoUrl, videoTitle: videoTitleAttr } = campusContent;

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
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title={videoTitleAttr}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className={iframeInner()}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
