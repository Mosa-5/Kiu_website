import { YouthUniCard } from "@/assets";
import {
  container,
  contentWrapper,
  imageWrapper,
  image,
  paragraph,
  clearFloat,
  title,
} from "./YouthUniDetail.styles";
import { useYouthUniTranslations } from "./hooks/useYouthUniTranslations";

const YouthUniDetail = () => {
  const { t, getTranslatedArray } = useYouthUniTranslations();
  const paragraphs = getTranslatedArray("detail.paragraphs");

  return (
    <div className={container()}>
      <div className={contentWrapper()}>
        <div className={contentWrapper()}>
          <div className={imageWrapper()}>
            <img
              src={YouthUniCard}
              alt="Event ceremony with participants"
              className={image()}
            />
          </div>
          <div>
            <h1 className={title()}>{t("detail.title")}</h1>
            {paragraphs.map((text, index) => (
              <p key={index} className={paragraph()}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className={clearFloat()}></div>
      </div>
    </div>
  );
};

export default YouthUniDetail;
