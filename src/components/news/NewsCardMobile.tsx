import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { card, image, cardContent, date, title } from "./NewsCardMobile.styles";

interface NewsCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCardMobile = ({
  id,
  date: newsDate,
  title: newsTitle,
  imageUrl,
}: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`}>
      <Card className={card()}>
        <div className="" />

        <img src={imageUrl} alt={newsTitle} className={image()} />

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
