import { Button } from "@/components/ui/button";
import {
  innerWrapper,
  headerSection,
  title,
  seeAllButtonDesktop,
  seeAllButtonMobile,
} from "./News.styles";
import { Link } from "react-router-dom";
import NewsCarousel from "./NewsCarousel";

const NewsSection = () => {
  return (
    <div className={innerWrapper()}>
      <div className={headerSection()}>
        <h1 className={title()}>News</h1>
        <Link to="/news">
          <Button className={seeAllButtonDesktop()} variant={"secondary"}>
            See All
          </Button>
        </Link>
      </div>
      <NewsCarousel />
      <Link to="/news">
        <Button className={seeAllButtonMobile()} variant={"secondary"}>
          See All
        </Button>
      </Link>
    </div>
  );
};

export default NewsSection;
