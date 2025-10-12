import HeroSection from "@/components/hero-section";
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
