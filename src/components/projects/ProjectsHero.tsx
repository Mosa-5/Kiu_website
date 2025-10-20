import HeroSection from "@/components/ui/hero-section";
import { ProjectsHeroImage } from "@/assets";
import { useProjectsTranslations } from "../../hooks/useProjectsTranslations";

const SingleProjectHero = () => {
  const { t } = useProjectsTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={ProjectsHeroImage}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default SingleProjectHero;