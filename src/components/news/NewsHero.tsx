import HeroSection from "@/components/ui/hero-section";
import { newsHeroImage } from "@/assets";
import { useNewsTranslations } from "@/hooks/useNewsTranslations";

const NewsHero = () => {
  const { t } = useNewsTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={newsHeroImage}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default NewsHero;
