import HeroSection from "@/components/ui/hero-section";
import { newsHeroImage } from "@/assets";

const NewsHero = () => {
  return (
    <HeroSection
      titleText="News"
      imageSrc={newsHeroImage}
      buttonLink="/"
      buttonLabel="Home Page"
    />
  );
};

export default NewsHero;
