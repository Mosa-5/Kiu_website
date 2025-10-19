import HeroSection from "@/components/ui/hero-section";
import { VacanciesHero } from "@/assets";

const VacancyHero = () => {
  return (
    <HeroSection
      titleText="Vacancies"
      imageSrc={VacanciesHero}
      buttonLink="/"
      buttonLabel="Home"
    />
  );
};

export default VacancyHero;
