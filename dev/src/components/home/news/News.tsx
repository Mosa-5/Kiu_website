import { Button } from "@/components/ui/button";
import {
  innerWrapper,
  headerSection,
  title,
  seeAllButton,
} from "./News.styles";
import { Link } from "react-router-dom";
import NewsCarousel from "./NewsCarousel";

const NewsSection = () => {
  return (
    <div className={innerWrapper()}>
      <div className={headerSection()}>
        <h1 className={title()}>News</h1>
        <Link to="/news">
          <Button className={seeAllButton()} variant={"secondary"}>
            See All
          </Button>
        </Link>
      </div>
      <NewsCarousel />
    </div>
  );
};

export default NewsSection;
