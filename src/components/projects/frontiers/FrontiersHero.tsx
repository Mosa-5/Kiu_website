import HeroSection from "@/components/hero-section";
import { FrontiersHero } from "@/assets";

const AdvancingFrontiersHero = () => {
  return (
    <HeroSection
      titleText="Advancing the Frontiers"
      imageSrc={FrontiersHero}
      buttonLink="/projects"
      buttonLabel="Projects"
    />
  );
};

export default AdvancingFrontiersHero;
