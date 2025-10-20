import HeroSection from "@/components/ui/hero-section";
import { FrontiersHero } from "@/assets";
import { useAboutTranslations } from "./hooks/useAboutTranslations";

const AboutHero = () => {
  const { t } = useAboutTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={FrontiersHero}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default AboutHero;
