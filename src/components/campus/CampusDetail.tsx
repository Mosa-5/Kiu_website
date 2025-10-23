import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Bus, Building2, Wifi, FileText } from "lucide-react";
import { useCampusTranslations } from "@/hooks/useCampusTranslations";
import { campusContent } from "@/content/campus";
import * as styles from "./CampusDetail.styles";

export const CampusDetail = () => {
  const { t } = useCampusTranslations();
  const { buttonUrl, videoUrl, videoTitle: videoTitleAttr } = campusContent;

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
                <iframe
                  width="560"
                  height="315"
                  src={videoUrl}
                  title={videoTitleAttr}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
