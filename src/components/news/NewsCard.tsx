import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
  id: number;
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
  return (
    <Link to={`/news/${id}`}>
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
        {/* <div className="flex justify-between w-full px-3 mb-2">
          <svg
            width="12"
            height="21"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2412 15.8573L0.458809 15.8573L0.458809 12.4123L12.5187 12.4123L12.5187 0.352378H15.9637L15.9637 14.1348C15.9636 14.5916 15.7821 15.0297 15.4591 15.3527C15.1361 15.6757 14.698 15.8572 14.2412 15.8573Z"
              fill="#3C70AF"
            />
          </svg>
          <svg
            width="12"
            height="21"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2412 15.8573L0.458809 15.8573L0.458809 12.4123L12.5187 12.4123L12.5187 0.352378H15.9637L15.9637 14.1348C15.9636 14.5916 15.7821 15.0297 15.4591 15.3527C15.1361 15.6757 14.698 15.8572 14.2412 15.8573Z"
              fill="#3C70AF"
            />
          </svg>
        </div> */}
      </Card>
    </Link>
  );
};

export default NewsCard;
