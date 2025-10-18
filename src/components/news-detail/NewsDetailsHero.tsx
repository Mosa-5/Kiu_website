import newsHeroImage from "@/assets/image.png";
import { getNewsItems } from "@/data/newsItems";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { useNewsTranslations } from "./hooks/useNewsTranslations";
import {
  container,
  heroImage,
  contentBox,
  contentInner,
  title,
  date,
  backButton,
  notFound,
} from "./NewsDetailsHero.styles";

const NewsDetailsHero = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();
  const currentLang = lang || "en";

  // Get news items based on currentLang
  const newsItems = getNewsItems(currentLang); 
  const item = newsItems.find((news) => news.id === id);

  const { t } = useNewsTranslations();

  if (!item) {
    return <p className={notFound()}>News not found</p>;
  }

  return (
    <div className={container()}>
      <img src={newsHeroImage} alt="News Hero" className={heroImage()} />
      <div className={contentBox()}>
        <div className={contentInner()}>
          <h1 className={title()}>{item.title}</h1>
          <p className={date()}>{item.date}</p>
        </div>
      </div>

      <Link to={`/${currentLang}/news`}>
        <Button className={backButton()}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.125 23.4584L9.66667 15L18.125 6.54169"
              stroke="#3C70AF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t("backButton")}
        </Button>
      </Link>
    </div>
  );
};

export default NewsDetailsHero;
