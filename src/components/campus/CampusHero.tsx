import HeroSection from "@/components/ui/hero-section";
import { CampusHeroImage, CampusHeroImageSm } from "@/assets";
import { useCampusTranslations } from "../../hooks/useCampusTranslations";

const CampusHero = () => {
  const { t } = useCampusTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={CampusHeroImage}
      imageSrcSm={CampusHeroImageSm}
      buttonLink="/"
      buttonLabel={t("hero.breadcrumbs.home")}
    />
  );
};

export default CampusHero;
