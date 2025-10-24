import React from "react";
import {
  section,
  sectionHeader,
  sectionTitle,
  icon,
  paragraph,
  richTextLink,
  programList,
  programListItem,
} from "../StudentsDetail.styles";
import { AboutIcon } from "@/assets/icons/icons";
import { StudentProjectsCollage } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const GrantProgramSection: React.FC = () => {
  const { t, getTranslatedArray } = useStudentsTranslations();

  const getArrayTranslation = (key: string): string[] => {
    return getTranslatedArray(key);
  };

  const getProjectsArray = (): Array<{name: string, objective: string, team: string}> => {
    return t("grantProgram.financedProjects.projects", { returnObjects: true }) as Array<{name: string, objective: string, team: string}>;
  };

  return (
    <section id="grant-program" className={section({ isFirst: true })}>
      <div className={sectionHeader()}>
        <h1 className={sectionTitle()}>{t("grantProgram.title")}</h1>
        <span className={icon()}>{AboutIcon}</span>
      </div>

      <h2 className={sectionTitle({ size: "medium" })}>{t("grantProgram.currentCompetition")}</h2>

      <p className={paragraph()}>
        {t("grantProgram.description")}
      </p>

      <p className={paragraph()}>
        {t("grantProgram.submissionInfo")}
      </p>

      <p className={paragraph()}>
        {t("grantProgram.deadline")} <span style={{ color: '#dc2626', fontWeight: '600' }}>December 7, 2024</span>.
      </p>

      <p className={paragraph()}>
        {t("grantProgram.fundingCategories")}
      </p>

      <h3 className={sectionTitle({ size: "medium" })} style={{ marginTop: '1.5rem' }}>
        {t("grantProgram.categories.studentLife.title")}
      </h3>
      <p className={paragraph()}>
        {t("grantProgram.categories.studentLife.description")}
      </p>

      <h3 className={sectionTitle({ size: "medium" })} style={{ marginTop: '1.5rem' }}>
        {t("grantProgram.categories.educational.title")}
      </h3>
      <p className={paragraph()}>
        {t("grantProgram.categories.educational.description")}
      </p>

      <h3 className={sectionTitle({ size: "medium" })} style={{ marginTop: '1.5rem' }}>
        {t("grantProgram.categories.startup.title")}
      </h3>
      <p className={paragraph()}>
        {t("grantProgram.categories.startup.description")}
      </p>

      <h3 className={sectionTitle({ size: "medium" })} style={{ marginTop: '1.5rem' }}>
        {t("grantProgram.criteria.title")}
      </h3>
      <ul className={programList()}>
        {getArrayTranslation("grantProgram.criteria.items").map((item: string, index: number) => (
          <li key={index} className={programListItem()}>{item}</li>
        ))}
      </ul>

      <h3 className={sectionTitle({ size: "medium" })} style={{ marginTop: '1.5rem' }}>
        {t("grantProgram.submissionRequirements.title")}
      </h3>
      <ul className={programList()}>
        {getArrayTranslation("grantProgram.submissionRequirements.items").map((item: string, index: number) => (
          <li key={index} className={programListItem()}>
            {item}
            {index === 3 && ( // Only for the email item
              <>
                {" "}
                <a href={`mailto:${t("grantProgram.emails.sgp")}`} className={richTextLink()}>
                  {t("grantProgram.emails.sgp")}
                </a>
              </>
            )}
          </li>
        ))}
      </ul>

      <h3 className={sectionTitle({ size: "medium" })} style={{ marginTop: '1.5rem' }}>
        {t("grantProgram.financialSupport.title")}
      </h3>
      <p className={paragraph()}>
        {t("grantProgram.financialSupport.description")}
      </p>

      <p className={paragraph()}>
        {t("grantProgram.financialSupport.contact")}{" "}
        <a href={`mailto:${t("grantProgram.emails.sgp")}`} className={richTextLink()}>
          {t("grantProgram.emails.sgp")}
        </a>
      </p>

      <h2 className={sectionTitle({ size: "medium" })} style={{ marginTop: '2rem' }}>
        {t("grantProgram.financedProjects.title")}
      </h2>

      {getProjectsArray().map((project, index) => (
        <div key={index} style={{ marginTop: '1.5rem' }}>
          <h3 className={sectionTitle({ size: "medium" })}>{project.name}</h3>
          <p className={paragraph()}>
            <strong>Objective:</strong> {project.objective}
          </p>
          <p className={paragraph()}>
            <strong>The Core Team Of Students Working On The Project:</strong> {project.team}
          </p>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3 className={sectionTitle({ size: "medium" })} style={{ marginBottom: '1rem' }}>
          {t("grantProgram.collageTitle")}
        </h3>
        <img
          src={StudentProjectsCollage}
          alt="Student Projects Financed by KIU"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </div>
    </section>
  );
};

export default GrantProgramSection;