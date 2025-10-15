import { Link } from "react-router-dom";
import {
  card,
  overlay,
  description,
  baseContent,
  title,
} from "./ProgramCard.styles";

interface ProgramCardProps {
  id: number | string;
  name: string;
  description: string;
  image: string;
}

const ProgramCard = ({
  id,
  name,
  description: cardDescription,
  image,
}: ProgramCardProps) => {
  return (
    <Link to={`/programs/${id}`}>
      <div className={card()} style={{ backgroundImage: `url(${image})` }}>
        <div className={overlay()}>
          <p className={description()}>{cardDescription}</p>
        </div>

        <div className={baseContent()}>
          <h3 className={title()}>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
