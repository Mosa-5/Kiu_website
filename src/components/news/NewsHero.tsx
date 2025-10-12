import HeroSection from "@/components/hero-section";
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
