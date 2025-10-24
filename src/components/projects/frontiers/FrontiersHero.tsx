import HeroSection from "@/components/ui/hero-section";
import { FrontiersHero } from "@/assets";
import { useFrontiersTranslations } from "../../../hooks/useFrontiersTranslations";

const AdvancingFrontiersHero = () => {
  const { t } = useFrontiersTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={FrontiersHero}
      buttonLink="/projects"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default AdvancingFrontiersHero;