import { Button } from "@/components/ui/button";
import CarouselWithPagination from "./CampusCarousel";
import {
  container,
  headerSection,
  title,
  subtitle,
  contentWrapper,
  textSection,
  textContent,
  readMoreButton,
} from "./Campus.styles";

const Campus = () => {
  return (
    <div className={container()}>
      <div className={headerSection()}>
        <h1 className={title()}>Our Campus</h1>
        <span className={subtitle()}>
          <svg
            width="16"
            height="3"
            viewBox="0 0 16 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="1.61768"
              x2="16"
              y2="1.61768"
              stroke="#3C70AF"
              strokeWidth="2"
            />
          </svg>
          A vibrant social life is part of the Experience
        </span>
      </div>
      <div className={contentWrapper()}>
        <div className={textSection()}>
          <div className={textContent()}>
            <p>
              The Kutaisi International University (KIU) campus is located in
              the green and environmentally clean area of Kutaisi, Georgia's
              third-largest city. Spread across 160 hectares of beautiful land
              surrounded by forest and a river, the campus offers a peaceful and
              inspiring setting for study and innovation. It is easily
              accessible, only 25 km from Kutaisi International Airport and
              about three hours from Tbilisi.
            </p>
            <p>
              KIU is Georgia's only university providing fully furnished
              on-campus housing for both students and academic staff. The campus
              features state-of-the-art laboratories, co-working spaces,
              libraries, cafeterias, and digital learning systems — all designed
              to create a modern, technology-driven educational environment that
              supports growth, creativity, and collaboration.
            </p>
          </div>
          <Button className={readMoreButton()}>Read More</Button>
        </div>
        <CarouselWithPagination />
      </div>
    </div>
  );
};

export default Campus;
