import HeroSection from "@/components/ui/hero-section";
import { StudentsHeroImage, StudentsHeroImageSm } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const StudentsHero = () => {
  const { t } = useStudentsTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={StudentsHeroImage}
      imageSrcSm={StudentsHeroImageSm}
      buttonLink="/"
      buttonLabel={t("hero.home")}
    />
  );
};

export default StudentsHero;
