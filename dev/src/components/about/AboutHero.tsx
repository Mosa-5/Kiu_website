import HeroSection from "@/components/ui/hero-section";
import { FrontiersHero } from "@/assets";

const AboutHero = () => {
  return (
    <HeroSection
      titleText="About us"
      imageSrc={FrontiersHero}
      buttonLink="/"
      buttonLabel="Home"
    />
  );
};

export default AboutHero;
