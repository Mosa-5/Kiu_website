import ProgramCard from "./ProgramCard";
import { useTranslation } from "react-i18next";
import { emptyState, emptyStateText, grid } from "./ProgramsGrid.styles";

interface ProgramsGridProps {
  items: typeof import("@/data/programItems").default;
}

const ProgramsGrid = ({ items }: ProgramsGridProps) => {
  const { t } = useTranslation("programs");

  if (items.length === 0) {
    return (
      <div className={emptyState()}>
        <p className={emptyStateText()}>{t("noPrograms")}</p>
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
