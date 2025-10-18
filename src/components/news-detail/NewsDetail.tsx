import { useParams } from "react-router-dom";
import { kiuCardImg } from "@/assets";
import newsItems from "@/data/newsItems";
import {
  container,
  contentWrapper,
  imageWrapper,
  image,
  paragraph,
  clearFloat,
  notFound,
} from "./NewsDetail.styles";
import { useNewsTranslations } from "./hooks/useNewsTranslations";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = newsItems.find((news) => news.id === id);
  const { t, getTranslatedArray } = useNewsTranslations();

  if (!item) {
    return <p className={notFound()}>{t("notFound")}</p>;
  }

 
  const paragraphs = getTranslatedArray("detail.content");

  return (
    <div className={container()}>
      <div className={contentWrapper()}>
        <div className={contentWrapper()}>
          <div className={imageWrapper()}>
            <img
              src={kiuCardImg}
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
