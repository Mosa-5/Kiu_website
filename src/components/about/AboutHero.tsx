import HeroSection from "@/components/ui/hero-section";
import { FrontiersHero, FrontiersHeroSm } from "@/assets";
import { useAboutTranslations } from "../../hooks/useAboutTranslations";

const AboutHero = () => {
  const { t } = useAboutTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={FrontiersHero}
      imageSrcSm={FrontiersHeroSm}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default AboutHero;
