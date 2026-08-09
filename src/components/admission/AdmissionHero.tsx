import HeroSection from "@/components/ui/hero-section";
import {
  AdmissionHero as AdmissionHeroImage,
  AdmissionHeroSm,
} from "@/assets";
import { useTranslation } from "react-i18next";

const AdmissionHero = () => {
  const { t } = useTranslation("admission");

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={AdmissionHeroImage}
      imageSrcSm={AdmissionHeroSm}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default AdmissionHero;
