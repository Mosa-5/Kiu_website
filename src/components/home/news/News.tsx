import { Button } from "@/components/ui/button";
import {
  innerWrapper,
  headerSection,
  title,
  seeAllButtonDesktop,
  seeAllButtonMobile,
} from "./News.styles";
import { Link, useNavigate } from "react-router-dom";
import { useHomeTranslations } from "../../../hooks/useHomeTranslation";
import NewsCarousel from "./NewsCarousel";

const NewsSection = () => {
  const nav = useNavigate();
  const { t } = useHomeTranslations();
  const navigate = () => nav("news");

  return (
    <div className={innerWrapper()}>
      <div className={headerSection()}>
        <h1 className={title()}>{t("home.news")}</h1>
        <Button
          className={seeAllButtonDesktop()}
          variant={"secondary"}
          aria-label="See more Desktop"
          title="See more Desktop"
          onClick={navigate}
        >
          {t("home.seeall")}
        </Button>
      </div>
      <NewsCarousel />
      <Button
        className={seeAllButtonMobile()}
        variant={"secondary"}
        aria-label="See more Mobile"
        title="Se more Mobile"
        onClick={navigate}
      >
        {t("home.seeall")}
      </Button>
    </div>
  );
};

export default NewsSection;
