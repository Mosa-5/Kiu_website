import HeroSection from "@/components/ui/hero-section";
import { CampusHeroImage } from "@/assets";
import { useCampusTranslations } from "../../hooks/useCampusTranslations";

const CampusHero = () => {
  const { t } = useCampusTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={CampusHeroImage}
      buttonLink="/"
      buttonLabel={t("hero.breadcrumbs.home")}
    />
  );
};

export default CampusHero;
