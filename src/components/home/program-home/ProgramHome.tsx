import {
  bechalor,
  masters,
  doctoral,
  singleCycle,
  bechalorKa,
  mastersKa,
  doctoralKa,
  singleCycleKa,
} from "@/assets";
import { useNavigate, useParams } from "react-router-dom";
import {
  containerVariants,
  wrapperVariants,
  headerSectionVariants,
  titleVariants,
  gridVariants,
  programImageVariants,
} from "./ProgramHome.styles";
import { useHomeTranslations } from "../../../hooks/useHomeTranslation";

const ProgramHome = () => {
  const navigate = useNavigate();
  const { t } = useHomeTranslations();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const programs = [
    {
      img: bechalor,
      imgka: bechalorKa,
      label: "Bachelor's",
      category: "Bachelor",
    },
    {
      img: singleCycle,
      imgka: singleCycleKa,
      label: "Single-Cycle",
      category: "Single-Cycle",
    },
    { img: masters, imgka: mastersKa, label: "Master's", category: "Master" },
    {
      img: doctoral,
      imgka: doctoralKa,
      label: "Doctoral",
      category: "Doctoral",
    },
  ];

  const handleProgramClick = (category: string) => {
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
              src={currentLang === "ka" ? program.imgka : program.img}
              alt={program.label}
              className={programImageVariants()}
              width={828}
              height={321}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramHome;
