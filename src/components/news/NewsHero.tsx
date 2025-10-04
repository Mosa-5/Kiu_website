import { Button } from "@/components/ui/button";
import { newsHeroImage } from "@/assets";
import { Link } from "react-router-dom";
import {
  heroContainer,
  heroImage,
  contentWrapper,
  title,
  homeButton,
} from "./NewsHero.styles";

const NewsHero = () => {
  return (
    <div className={heroContainer()}>
      <img src={newsHeroImage} alt="News Hero" className={heroImage()} />
      <div className={contentWrapper()}>
        <h1 className={title()}>News</h1>
        <Link to="/">
          <Button className={homeButton()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 5L9 12L16 19"
                stroke="#E7E7E6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsHero;
