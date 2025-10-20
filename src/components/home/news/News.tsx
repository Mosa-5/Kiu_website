import { Button } from "@/components/ui/button";
import {
  innerWrapper,
  headerSection,
  title,
  seeAllButtonDesktop,
  seeAllButtonMobile,
} from "./News.styles";
import { Link } from "react-router-dom";
import { useHomeTranslations } from "../hooks/useHomeTranslation";
import NewsCarousel from "./NewsCarousel";

const NewsSection = () => {
  const { t } = useHomeTranslations();

  return (
    <div className={innerWrapper()}>
      <div className={headerSection()}>
        <h1 className={title()}>{t("home.news")}</h1>
        <Link to="/news">
          <Button className={seeAllButtonDesktop()} variant={"secondary"}>
            {t("home.seeall")}
          </Button>
        </Link>
      </div>
      <NewsCarousel />
      <Link to="/news">
        <Button className={seeAllButtonMobile()} variant={"secondary"}>
          {t("home.seeall")}
        </Button>
      </Link>
    </div>
  );
};

export default NewsSection;
