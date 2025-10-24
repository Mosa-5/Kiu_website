import HeroSection from "@/components/ui/hero-section";
import { StudentsHeroImage } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const StudentsHero = () => {
  const { t } = useStudentsTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={StudentsHeroImage}
      buttonLink="/"
      buttonLabel={t("hero.home")}
    />
  );
};

export default StudentsHero;
