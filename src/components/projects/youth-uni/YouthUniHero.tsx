import HeroSection from "@/components/ui/hero-section";
import { YouthUni } from "@/assets";
import { useYouthUniTranslations } from "./hooks/useYouthUniTranslations";

const YouthUniHero = () => {
  const { t } = useYouthUniTranslations();

  return (
    <HeroSection
      titleText={t("hero.title")}
      imageSrc={YouthUni}
      buttonLink="/projects"
      buttonLabel={t("hero.buttonLabel")}
    />
  );
};

export default YouthUniHero;