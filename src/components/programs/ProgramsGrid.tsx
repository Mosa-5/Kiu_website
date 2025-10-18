import ProgramCard from "./ProgramCard";
import { container, grid } from "./ProgramsGrid.styles";
import { useTranslation } from "react-i18next";

interface ProgramsGridProps {
  items: typeof import("@/data/programItems").default;
}

const ProgramsGrid = ({ items }: ProgramsGridProps) => {
  const { t } = useTranslation("programs");

  if (items.length === 0) {
    return (
      <div className={container()}>
        <div className="flex items-center justify-center py-12">
          <p className="text-xl text-gray-600 font-medium">
            {t("noPrograms")}
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