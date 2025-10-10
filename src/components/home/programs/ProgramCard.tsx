import {
  card,
  overlay,
  description,
  baseContent,
  title,
} from "./ProgramCard.styles";

interface ProgramCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProgramCard = ({
  name,
  description: cardDescription,
  image,
}: ProgramCardProps) => {
  return (
    <div className={card()} style={{ backgroundImage: `url(${image})` }}>
      <div className={overlay()}>
        <p className={description()}>{cardDescription}</p>
      </div>

      <div className={baseContent()}>
        <h3 className={title()}>{name}</h3>
      </div>
    </div>
  );
};

export default ProgramCard;
