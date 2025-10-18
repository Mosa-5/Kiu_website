import ProgramCard from "./ProgramCard";
import { emptyState, emptyStateText, grid } from "./ProgramsGrid.styles";

interface NewsGridProps {
  items: typeof import("@/data/programItems").default;
}

const ProgramsGrid = ({ items }: NewsGridProps) => {
  if (items.length === 0) {
    return (
      <div className={emptyState()}>
        <p className={emptyStateText()}>No programs available</p>
      </div>
    );
  }

  return (
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
  );
};

export default ProgramsGrid;
