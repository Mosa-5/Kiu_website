import { Button } from "@/components/ui/button";
import {
  innerWrapper,
  headerSection,
  title,
  seeAllButtonDesktop,
  seeAllButtonMobile,
} from "./News.styles";
import { Link } from "react-router-dom";
import { useHomeTranslations } from "../../../hooks/useHomeTranslation";
import NewsCarousel from "./NewsCarousel";

const NewsSection = () => {
  const { t } = useHomeTranslations();

  return (
    <div className={innerWrapper()}>
      <div className={headerSection()}>
        <h1 className={title()}>{t("home.news")}</h1>
        <Link to="/news" aria-label="See all news Dekstop">
          <Button
            className={seeAllButtonDesktop()}
            variant={"secondary"}
            aria-label="See more Desktop"
            title="See more Desktop"
          >
            {t("home.seeall")}
          </Button>
        </Link>
      </div>
      <NewsCarousel />
      <Link to="/news" aria-label="See all news Mobile">
        <Button
          className={seeAllButtonMobile()}
          variant={"secondary"}
          aria-label="See more Mobile"
          title="Se more Mobile"
        >
          {t("home.seeall")}
        </Button>
      </Link>
    </div>
  );
};

export default NewsSection;
