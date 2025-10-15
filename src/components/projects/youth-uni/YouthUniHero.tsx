import HeroSection from "@/components/ui/hero-section";
import { YouthUni } from "@/assets";

const YouthUniHero = () => {
  return (
    <HeroSection
      titleText="Youth University"
      imageSrc={YouthUni}
      buttonLink="/projects"
      buttonLabel="Projects"
    />
  );
};

export default YouthUniHero;
