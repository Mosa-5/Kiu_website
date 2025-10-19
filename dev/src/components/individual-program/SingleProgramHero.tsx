import HeroSection from "@/components/ui/hero-section";
import { ProgramHeroImage } from "@/assets";

const SingleProgramHero = () => {
  return (
    <HeroSection
      titleText="About Program"
      imageSrc={ProgramHeroImage}
      buttonLink="/programs"
      buttonLabel="Back to Programs"
    />
  );
};

export default SingleProgramHero;
