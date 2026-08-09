import HeroSection from "@/components/ui/hero-section";
import { ProjectsHeroImage, ProjectsHeroImageSm } from "@/assets";
import { useProjectsTranslations } from "../../hooks/useProjectsTranslations";

const SingleProjectHero = () => {
  const { t } = useProjectsTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={ProjectsHeroImage}
      imageSrcSm={ProjectsHeroImageSm}
      buttonLink="/"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default SingleProjectHero;