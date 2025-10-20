import { Link, useParams } from "react-router-dom";
import {
  card,
  overlay,
  description,
  baseContent,
  title,
} from "./ProgramCard.styles";

interface ProgramCardProps {
  id: number | string;
  name: {
    en: string;
    ka: string;
  };
  description: {
    en: string;
    ka: string;
  };
  image: string;
}

const ProgramCard = ({
  id,
  name,
  description: cardDescription,
  image,
}: ProgramCardProps) => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  return (
    <Link to={`/${currentLang}/programs/${id}`}>
      <div className={card()} style={{ backgroundImage: `url(${image})` }}>
        <div className={overlay()}>
          <p className={description()}>
            {currentLang === "ka" ? cardDescription.ka : cardDescription.en}
          </p>
        </div>

        <div className={baseContent()}>
          <h3 className={title()}>
            {currentLang === "ka" ? name.ka : name.en}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;