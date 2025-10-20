import { bechalor, masters, doctoral, singleCycle } from "@/assets";
import { useNavigate, useParams } from "react-router-dom";
import {
  containerVariants,
  wrapperVariants,
  headerSectionVariants,
  titleVariants,
  gridVariants,
  programImageVariants,
} from "./ProgramHome.styles";
import { useHomeTranslations } from "../hooks/useHomeTranslation";


const ProgramHome = () => {
  const navigate = useNavigate();
  const { t } = useHomeTranslations();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const programs = [
    { img: bechalor, label: "Bachelor's", category: "Bachelor" },
    { img: singleCycle, label: "Single-Cycle", category: "Single-Cycle" },
    { img: masters, label: "Master's", category: "Master" },
    { img: doctoral, label: "Doctoral", category: "Doctoral" },
  ];

  const handleProgramClick = (category: string) => {
    // Navigate to programs page with tab parameter
    navigate(`/${currentLang}/programs?tab=${encodeURIComponent(category)}`);
  };

  return (
    <div className={containerVariants()}>
      <div className={wrapperVariants()}>
        <div className={headerSectionVariants()}>
          <h2 className={titleVariants()}>{t("home.programs")}</h2>
        </div>

        <div className={gridVariants()}>
          {programs.map((program) => (
            <img
              key={program.category}
              onClick={() => handleProgramClick(program.category)}
              src={program.img}
              alt={program.label}
              className={programImageVariants()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramHome;
