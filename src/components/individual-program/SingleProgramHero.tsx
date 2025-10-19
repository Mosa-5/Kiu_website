import HeroSection from "@/components/ui/hero-section";
import { ProgramHeroImage, MathHero } from "@/assets"; // Import both images
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const programHeroConfig: Record<string, { image: string; titleEn: string; titleKa: string }> = {
  computerScience: {
    image: ProgramHeroImage,
    titleEn: "Computer Science",
    titleKa: "კომპიუტერული მეცნიერებები"
  },
  mathematics: {
    image: MathHero, 
    titleEn: "Mathematics",
    titleKa: "მათემატიკა"
  },
};

const SingleProgramHero = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();
  
  const config = programHeroConfig[id || ""] || programHeroConfig.computerScience;
  const title = i18n.language === "ka" ? config.titleKa : config.titleEn;

  return (
    <HeroSection
      titleText={title}
      imageSrc={config.image}
      buttonLink="/programs"
      buttonLabel={i18n.language === "ka" ? "უკან პროგრამებზე" : "Back to Programs"}
    />
  );
};

export default SingleProgramHero;