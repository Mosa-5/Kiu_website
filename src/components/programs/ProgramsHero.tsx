import HeroSection from "@/components/hero-section";
import { ProgramsHeroImage } from "@/assets";

const ProgramHero = () => {
  return (
    <HeroSection
      titleText="Programs"
      imageSrc={ProgramsHeroImage}
      buttonLink="/"
      buttonLabel="Home Page"
    />
  );
};

export default ProgramHero;
