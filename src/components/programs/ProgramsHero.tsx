import HeroSection from "@/components/ui/hero-section";
import { ProgramsHeroImage, ProgramsHeroImageSm } from "@/assets";
import { useTranslation } from "react-i18next";

const ProgramHero = () => {
  const { t } = useTranslation("programs");

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={ProgramsHeroImage}
      imageSrcSm={ProgramsHeroImageSm}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default ProgramHero;