import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { card, image, cardContent, date, title } from "./NewsCardMobile.styles";

interface NewsCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const NewsCardMobile = ({
  id,
  date: newsDate,
  title: newsTitle,
  image: imageMain,
}: NewsCardProps) => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  return (
    <Link
      to={`/${currentLang}/news/${id}`}
      aria-label={`Read more about ${title}`}
    >
      <Card className={card()}>
        <div className="" />

        <img src={imageMain} alt={newsTitle} className={image()} />

        <CardContent className={cardContent()}>
          <p className={date()}>{newsDate}</p>
          <h3 className={title()}>{newsTitle}</h3>
          <div className="" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCardMobile;
