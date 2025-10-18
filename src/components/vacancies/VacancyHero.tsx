import HeroSection from "@/components/ui/hero-section";
import { VacanciesHero } from "@/assets";
import { useVacancyTranslations } from "./hooks/useVacancyTranslations";

const VacancyHero = () => {
  const { t } = useVacancyTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={VacanciesHero}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default VacancyHero;