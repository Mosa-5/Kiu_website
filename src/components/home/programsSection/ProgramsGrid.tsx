import ProgramCard from "./ProgramCard";
import { container, grid } from "./ProgramsGrid.styles";

interface NewsGridProps {
  items: typeof import("@/data/programItems").default;
}

const ProgramsGrid = ({ items }: NewsGridProps) => {
  return (
    <div className={container()}>
      <div className={grid()}>
        {items.map((item) => (
          <ProgramCard
            id={item.id}
            key={item.id}
            description={item.description}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramsGrid;
