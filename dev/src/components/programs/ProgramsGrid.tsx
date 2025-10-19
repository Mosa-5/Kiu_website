import ProgramCard from "./ProgramCard";
import { container, grid } from "./ProgramsGrid.styles";

interface NewsGridProps {
  items: typeof import("@/data/programItems").default;
}

const ProgramsGrid = ({ items }: NewsGridProps) => {
  if (items.length === 0) {
    return (
      <div className={container()}>
        <div className="flex items-center justify-center py-12">
          <p className="text-xl text-gray-600 font-medium">
            No programs available
          </p>
        </div>
      </div>
    );
  }

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
