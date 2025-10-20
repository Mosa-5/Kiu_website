import HeroSection from "@/components/ui/hero-section";
import { FrontiersHero } from "@/assets";

const AdmissionHero = () => {
  return (
    <HeroSection
      titleText="Admission"
      imageSrc={FrontiersHero}
      buttonLink="/"
      buttonLabel="Home"
    />
  );
};

export default AdmissionHero;
