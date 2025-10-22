import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { aboutB, aboutU, aboutR, aboutMobile } from "@/assets";
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
  mainMobile,
} from "./About.styles";
import { useHomeTranslations } from "../../../hooks/useHomeTranslation";

const About = () => {
  const nav = useNavigate();
  const { t, getTranslatedArray } = useHomeTranslations();

  const paragraphs = getTranslatedArray("about.paragraphs");

  const navigate = () => nav("about-us");

  return (
    <div className={container()}>
      <div className={imageSection()}>
        <div className={imageWrapper()}>
          <img className={mainImage()} src={aboutR} alt="" />
          <img className={topImage()} src={aboutU} alt="" />
          <img className={bottomImage()} src={aboutB} alt="" />
        </div>
        <img className={mainMobile()} src={aboutMobile} alt="" />
      </div>

      <div>
        <h2 className={mainTitle()}>{t("about.mainTitle")}</h2>
        <h3 className={subtitle()}>{t("about.subtitle")}</h3>

        <div className={textContent()}>
          <p>
            <Link
              to="campus"
              className={campusLink()}
              aria-label="Campus"
              title="Campus"
            >
              {t("about.link")}
            </Link>{" "}
            {paragraphs[0]}
          </p>
          <p>{paragraphs[1]}</p>
        </div>

        <Button
          variant="default"
          className={readMoreButton()}
          onClick={navigate}
          aria-label="Read more"
          title="Read more"
        >
          {t("about.button")}
        </Button>
      </div>
    </div>
  );
};

export default About;
