import HeroSection from "@/components/ui/hero-section";
import { AdmisssionHero } from "@/assets";
import { useTranslation } from "react-i18next";

const AdmissionHero = () => {
  const { t } = useTranslation("admission");

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={AdmisssionHero}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default AdmissionHero;
