import HeroSection from "@/components/ui/hero-section";
import { ProgramsHeroImage } from "@/assets";
import { useTranslation } from "react-i18next";

const ProgramHero = () => {
  const { t } = useTranslation("programs");

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={ProgramsHeroImage}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default ProgramHero;