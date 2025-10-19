import HeroSection from "@/components/ui/hero-section";
import { ProjectsHeroImage } from "@/assets";

const SingleProjectHero = () => {
  return (
    <HeroSection
      titleText="Projects"
      imageSrc={ProjectsHeroImage}
      buttonLink="/"
      buttonLabel="Home Page"
    />
  );
};

export default SingleProjectHero;
