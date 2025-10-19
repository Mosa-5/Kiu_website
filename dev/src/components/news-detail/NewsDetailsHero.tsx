import newsHeroImage from "@/assets/image.png";
import newsItems from "@/data/newsItems";
import { useParams } from "react-router-dom";
import {
  container,
  heroImage,
  contentBox,
  contentInner,
  title,
  date,
  notFound,
} from "./NewsDetailsHero.styles";

const NewsDetailsHero = () => {
  const { id } = useParams<{ id: string }>();
  const item = newsItems.find((news) => news.id === id);

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
    </div>
  );
};

export default NewsDetailsHero;
