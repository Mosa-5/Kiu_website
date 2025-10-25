import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import {
  heroContainer,
  heroImage,
  contentWrapper,
  title,
  homeButton,
} from "./HeroSection.styles";
import "./HeroSection.css"; // Add this import

interface HeroSectionProps {
  titleText: string;
  imageSrc: string;
  buttonLink?: string;
  buttonLabel?: string;
  buttonIcon?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleText,
  imageSrc,
  buttonLink = "/",
  buttonLabel = "Home Page",
  buttonIcon,
}) => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const nav = useNavigate();
  const navigate = () => nav(`/${currentLang}${buttonLink}`);

  return (
    <div className={heroContainer()}>
      <img
        src={imageSrc}
        alt={titleText}
        className={`${heroImage()} hero-image-animate`}
      />

      <div className={contentWrapper()}>
        <h1 className={`${title()} hero-title-animate`}>{titleText}</h1>
        <div className="hero-button-animate">
          <Button
            className={homeButton()}
            onClick={navigate}
            aria-label={`Back to ${buttonLabel}`}
          >
            {buttonIcon ?? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 5L9 12L16 19"
                  stroke="#E7E7E6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
