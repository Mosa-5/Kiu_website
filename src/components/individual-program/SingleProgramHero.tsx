import HeroSection from "@/components/ui/hero-section";
import {
  ProgramHeroImage,
  ProgramHeroImageSm,
  MathHero,
  MathAndApplHero,
  MnscHero,
  DesignHero,
  PsychHero,
  LawHero,
  MedHero,
  IntHero,
  EmbadHero,
  FinanceHero,
} from "@/assets"; // Import both images
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const programHeroConfig: Record<
  string,
  { image: string; imageSm?: string; titleEn: string; titleKa: string }
> = {
  computerScience: {
    image: ProgramHeroImage,
    imageSm: ProgramHeroImageSm,
    titleEn: "Computer Science",
    titleKa: "კომპიუტერული მეცნიერებები",
  },
  mathematics: {
    image: MathHero,
    titleEn: "Mathematics",
    titleKa: "მათემატიკა",
  },
  mathsAndApplications: {
    image: MathAndApplHero,
    titleEn: "Mathematics & Applications",
    titleKa: "მათემატიკა და აპლიკაციები",
  },
  management: {
    image: MnscHero,
    titleEn: "Management",
    titleKa: "მენეჯმენტი",
  },
  design: {
    image: MathHero,
    titleEn: "Design",
    titleKa: "დიზაინი",
  },
  DesignHero: {
    image: DesignHero,
    titleEn: "Mathematics",
    titleKa: "მათემატიკა",
  },
  psychology: {
    image: PsychHero,
    titleEn: "Psychology",
    titleKa: "ფსიქოლოგია",
  },
  law: {
    image: LawHero,
    titleEn: "Law",
    titleKa: "იურისპრუდენცია",
  },
  medicine: {
    image: MedHero,
    titleEn: "Medicine",
    titleKa: "მედიცინა",
  },
  intellectualProperty: {
    image: IntHero,
    titleEn: "Intellectual Property, Innovations and Entrepreneurship",
    titleKa: "ინტელექტუალური საკუთრება, ინოვაციები და მეწარმეობა",
  },
  embeddedComputing: {
    image: EmbadHero,
    titleEn: "Embedded Computing System",
    titleKa: "ჩაშენებული კომპიუტერული სისტემები",
  },
  financeAndInformationManagement: {
    image: FinanceHero,
    titleEn: "Finance and Information Management",
    titleKa: "ფინანსები და ინფორმაციის მენეჯმენტი, მაგისტრი",
  },
};

const SingleProgramHero = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();

  const config =
    programHeroConfig[id || ""] || programHeroConfig.computerScience;
  const title = i18n.language === "ka" ? config.titleKa : config.titleEn;

  return (
    <HeroSection
      titleText={title}
      imageSrc={config.image}
      imageSrcSm={config.imageSm}
      buttonLink="/programs"
      buttonLabel={
        i18n.language === "ka" ? "უკან პროგრამებზე" : "Back to Programs"
      }
    />
  );
};

export default SingleProgramHero;
