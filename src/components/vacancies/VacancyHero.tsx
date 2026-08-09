import HeroSection from "@/components/ui/hero-section";
import { VacanciesHero, VacanciesHeroSm } from "@/assets";
import { useVacancyTranslations } from "../../hooks/hooksVacancies/useVacancyTranslations";

const VacancyHero = () => {
  const { t } = useVacancyTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={VacanciesHero}
      imageSrcSm={VacanciesHeroSm}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default VacancyHero;