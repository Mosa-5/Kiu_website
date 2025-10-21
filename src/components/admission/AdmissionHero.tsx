import HeroSection from "@/components/ui/hero-section";
import { AdmisssionHero } from "@/assets";

const AdmissionHero = () => {
  return (
    <HeroSection
      titleText="Admission"
      imageSrc={AdmisssionHero}
      buttonLink="/"
      buttonLabel="Home"
    />
  );
};

export default AdmissionHero;
