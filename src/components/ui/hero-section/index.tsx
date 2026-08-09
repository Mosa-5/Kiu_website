import { useEffect, useRef, useState } from "react";
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
  imageSrcSm?: string;
  buttonLink?: string;
  buttonLabel?: string;
  buttonIcon?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleText,
  imageSrc,
  imageSrcSm,
  buttonLink = "/",
  buttonLabel = "Home Page",
  buttonIcon,
}) => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const nav = useNavigate();
  const navigate = () => nav(`/${currentLang}${buttonLink}`);

  // The fade-in animation is CSS and fires the instant the <img> mounts --
  // if the image itself hasn't loaded yet (e.g. a fresh client-side nav to
  // a page whose hero wasn't preloaded in time), the animation finishes
  // against an empty slot and the image pops in late. Gate the animation
  // class on actual load so it always starts in sync with the image being
  // ready, whether that's instant (cached) or delayed (cold fetch).
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    // Reset for the new image, then immediately re-check in case it was
    // already preloaded/cached (the load event won't fire again for those).
    setImgLoaded(imgRef.current?.complete ?? false);
  }, [imageSrc]);

  return (
    <div className={heroContainer()}>
      <picture>
        {imageSrcSm && (
          <source media="(max-width: 639px)" srcSet={imageSrcSm} />
        )}
        <img
          ref={imgRef}
          src={imageSrc}
          alt={titleText}
          className={`${heroImage()} ${imgLoaded ? "hero-image-animate" : "opacity-0"}`}
          fetchPriority="high"
          onLoad={() => setImgLoaded(true)}
        />
      </picture>

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
