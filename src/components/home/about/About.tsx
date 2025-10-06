import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { aboutB, aboutU, aboutR } from "@/assets";
import {
  container,
  imageSection,
  imageWrapper,
  mainImage,
  topImage,
  bottomImage,
  mainTitle,
  subtitle,
  textContent,
  campusLink,
  readMoreButton,
} from "./About.styles";

const About = () => {
  const nav = useNavigate();

  const navigate = () => {
    return nav("about-us");
  };

  return (
    <div className={container()}>
      <div className={imageSection()}>
        <div className={imageWrapper()}>
          <img className={mainImage()} src={aboutR} alt="" />
          <img className={topImage()} src={aboutU} alt="" />
          <img className={bottomImage()} src={aboutB} alt="" />
        </div>
      </div>
      <div>
        <h2 className={mainTitle()}>Place where Knowledge creates future!</h2>
        <h3 className={subtitle()}>Hic Scientia futūrum creat!</h3>
        <div className={textContent()}>
          <p>
            <Link to="/campus" className={campusLink()}>
              Kutaisi International University Campus
            </Link>{" "}
            is located in the city of Kutaisi. Kutaisi International University
            (KIU) has opened its doors to the first cohort of students in 2020.
            The goal of the university is to gradually become an international
            hub of education, science and technology in the region. As a result,
            Georgia will take the lead on international educational and
            scientific arena.
          </p>

          <p>
            KIU is currently offering undergraduate degree English language
            programs. KIU plans to add vocational, graduate, and post-graduate
            degree programs in the future. The aim of the university is to
            prepare highly qualified workforce and human capital that will
            promote economic growth and development of Georgia and the entire
            region.
          </p>
        </div>
        <Button
          variant={"default"}
          className={readMoreButton()}
          onClick={navigate}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default About;
