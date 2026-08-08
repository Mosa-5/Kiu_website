import React from "react";
import {
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  paragraph,
  richTextLink,
  programList,
  listItemText,
  callImage,
  projectBlock,
} from "../StudentsDetail.styles";
import { CostsIcon } from "@/assets/icons/icons";
import { StudentProjectsCollage } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const GrantProgramSection: React.FC = () => {
  const { t, getTranslatedArray } = useStudentsTranslations();

  const getArrayTranslation = (key: string): string[] => {
    return getTranslatedArray(key);
  };

  const getProjectsArray = (): Array<{
    name: string;
    objective: string;
    team: string;
  }> => {
    return t("grantProgram.financedProjects.projects", {
      returnObjects: true,
    }) as Array<{ name: string; objective: string; team: string }>;
  };

  return (
    <section id="grant-program" className={section()}>
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{CostsIcon}</span>
        <h1 className={sectionTitle()}>{t("grantProgram.title")}</h1>
      </div>

      <div className={sectionContent()}>
        <h2 className={sectionTitle({ size: "medium" })}>
          {t("grantProgram.currentCompetition")}
        </h2>

        <p className={paragraph()}>{t("grantProgram.description")}</p>

        <p className={paragraph()}>{t("grantProgram.submissionInfo")}</p>

        <p className={paragraph()}>
          {t("grantProgram.deadline")}{" "}
          <span className="text-red-600 font-semibold">
            December 7, 2024
          </span>
          .
        </p>

        <p className={paragraph()}>{t("grantProgram.fundingCategories")}</p>

        <h3 className={`${sectionTitle({ size: "medium" })} mt-8 sm:max-3xl:mt-6`}>
          {t("grantProgram.categories.studentLife.title")}
        </h3>
        <p className={paragraph()}>
          {t("grantProgram.categories.studentLife.description")}
        </p>

        <h3 className={`${sectionTitle({ size: "medium" })} mt-8 sm:max-3xl:mt-6`}>
          {t("grantProgram.categories.educational.title")}
        </h3>
        <p className={paragraph()}>
          {t("grantProgram.categories.educational.description")}
        </p>

        <h3 className={`${sectionTitle({ size: "medium" })} mt-8 sm:max-3xl:mt-6`}>
          {t("grantProgram.categories.startup.title")}
        </h3>
        <p className={paragraph()}>
          {t("grantProgram.categories.startup.description")}
        </p>

        <h3 className={`${sectionTitle({ size: "medium" })} mt-8 sm:max-3xl:mt-6`}>
          {t("grantProgram.criteria.title")}
        </h3>
        <ul className={programList()}>
          {getArrayTranslation("grantProgram.criteria.items").map(
            (item: string, index: number) => (
              <li key={index} className={listItemText()}>
                {item}
              </li>
            )
          )}
        </ul>

        <h3 className={`${sectionTitle({ size: "medium" })} mt-8 sm:max-3xl:mt-6`}>
          {t("grantProgram.submissionRequirements.title")}
        </h3>
        <ul className={programList()}>
          {getArrayTranslation("grantProgram.submissionRequirements.items").map(
            (item: string, index: number) => (
              <li key={index} className={listItemText()}>
                {item}
                {index === 3 && ( // Only for the email item
                  <>
                    {" "}
                    <a
                      href={`mailto:${t("grantProgram.emails.sgp")}`}
                      className={richTextLink()}
                    >
                      {t("grantProgram.emails.sgp")}
                    </a>
                  </>
                )}
              </li>
            )
          )}
        </ul>

        <h3 className={`${sectionTitle({ size: "medium" })} mt-8 sm:max-3xl:mt-6`}>
          {t("grantProgram.financialSupport.title")}
        </h3>
        <p className={paragraph()}>
          {t("grantProgram.financialSupport.description")}
        </p>

        <p className={paragraph()}>
          {t("grantProgram.financialSupport.contact")}{" "}
          <a
            href={`mailto:${t("grantProgram.emails.sgp")}`}
            className={richTextLink()}
          >
            {t("grantProgram.emails.sgp")}
          </a>
        </p>

        <h2 className={`${sectionTitle({ size: "medium" })} mt-10 sm:max-3xl:mt-8`}>
          {t("grantProgram.financedProjects.title")}
        </h2>

        {getProjectsArray().map((project, index) => (
          <div key={index} className={projectBlock()}>
            <h3 className={sectionTitle({ size: "medium" })}>
              {project.name}
            </h3>
            <p className={paragraph()}>
              <strong>Objective:</strong> {project.objective}
            </p>
            <p className={paragraph()}>
              <strong>The Core Team Of Students Working On The Project:</strong>{" "}
              {project.team}
            </p>
          </div>
        ))}

        <img
          src={StudentProjectsCollage}
          alt="Student Projects Financed by KIU"
          className={`${callImage({ bordered: true })} mt-8 sm:max-3xl:mt-6`}
        />
      </div>
    </section>
  );
};

export default GrantProgramSection;
