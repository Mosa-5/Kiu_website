import { Link, useParams } from "react-router-dom";
import newsItems from "@/data/newsItems";
import {
  container,
  contentWrapper,
  imageWrapper,
  image,
  paragraph,
  clearFloat,
  notFound,
  backButton,
} from "./NewsDetail.styles";
import { useNewsTranslations } from "../../hooks/useNewsTranslations";
import { Button } from "../ui/button";

const NewsDetail = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();
  const currentLang = lang || "en";

  const item = newsItems.find((news) => news.id === id);
  const { t, getTranslatedArray } = useNewsTranslations();

  if (!item) {
    return <p className={notFound()}>{t("notFound")}</p>;
  }

  const paragraphs = getTranslatedArray("detail.content");

  return (
    <div className={container()}>
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
      <div className={contentWrapper()}>
        <div className={contentWrapper()}>
          <div className={imageWrapper()}>
            <img
              src={item.image}
              alt="Event ceremony with participants"
              className={image()}
            />
          </div>
          {paragraphs.map((text, index) => (
            <p key={index} className={paragraph()}>
              {text}
            </p>
          ))}
        </div>

        <div className={clearFloat()}></div>
      </div>
    </div>
  );
};

export default NewsDetail;
