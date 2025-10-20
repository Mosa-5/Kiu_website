import { Button } from "@/components/ui/button";
import CarouselWithPagination from "./CampusCarousel";
import {
  container,
  headerSection,
  title,
  subtitle,
  contentWrapper,
  textSection,
  textContent,
  readMoreButton,
  smallSvg,
} from "./Campus.styles";
import { useNavigate } from "react-router-dom";
import { useHomeTranslations } from "../hooks/useHomeTranslation";

const Campus = () => {
  const nav = useNavigate();
  const { t, getTranslatedArray } = useHomeTranslations();

  const paragraphs = getTranslatedArray("campus.paragraphs");

  const navigate = () => nav("campus");

  return (
    <div className={container()}>
      <div className={headerSection()}>
        <h1 className={title()}>{t("campus.title")}</h1>
        <span className={subtitle()}>
          <svg
            className={smallSvg()}
            width="16"
            height="3"
            viewBox="0 0 16 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="1.61768"
              x2="16"
              y2="1.61768"
              stroke="#3C70AF"
              strokeWidth="2"
            />
          </svg>
          {t("campus.subtitle")}
        </span>
      </div>

      <div className={contentWrapper()}>
        <div className={textSection()}>
          <div className={textContent()}>
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <Button onClick={navigate} className={readMoreButton()}>
            {t("campus.button")}
          </Button>
        </div>
        <CarouselWithPagination />
      </div>
    </div>
  );
};

export default Campus;
