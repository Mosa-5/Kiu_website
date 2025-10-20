import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import {
  cardContainer,
  imageWrapper,
  image,
  cardContentWrapper,
  cardDate,
  cardTitle,
  cardDivider,
  cardDescription,
  cardHoverEffect,
} from "./NewsCard.styles";

interface NewsCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCard = ({
  id,
  date,
  title,
  description,
  imageUrl,
}: NewsCardProps) => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  return (
    <Link to={`/${currentLang}/news/${id}`}>
      <Card className={cardContainer()}>
        <div className={cardHoverEffect()} />
        <div className={imageWrapper()}>
          <img src={imageUrl} alt={title} className={image()} />
        </div>
        <CardContent className={cardContentWrapper()}>
          <p className={cardDate()}>{date}</p>
          <h3 className={cardTitle()}>{title}</h3>
          <div className={cardDivider()} />
          <p className={cardDescription()}>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
