import HeroSection from "@/components/ui/hero-section";
import { ResearchHeroImage } from "@/assets";
import { useResearchTranslations } from "@/hooks/useResearchTranslations";

const ResearchHero = () => {
  const { t } = useResearchTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={ResearchHeroImage}
      buttonLink="/"
      buttonLabel={t("hero.home")}
    />
  );
};

export default ResearchHero;
