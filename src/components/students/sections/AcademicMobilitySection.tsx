import React from "react";
import { AboutIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeader,
  sectionTitle,
  icon,
  paragraph,
  richTextLink,
  programList,
  programListItem,
  programLink,
  clearFloat,
} from "../StudentsDetail.styles";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const AcademicMobilitySection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="mobility" className={section()}>
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{t("mobility.title")}</h2>
        <span className={icon()}>{AboutIcon}</span>
      </div>

      {/* External Mobility */}
      <h3
        className={sectionTitle({ size: "medium" })}
        style={{ marginBottom: "15px" }}
      >
        {t("mobility.external.title")}
      </h3>
      <p className={paragraph()}>{t("mobility.external.p1")}</p>
      <p className={paragraph()}>{t("mobility.external.p2")}</p>
      <p className={paragraph()}>
        {t("mobility.external.p3")}{" "}
        <a
          href="https://students.emis.ge"
          target="_blank"
          className={richTextLink()}
        >
          {t("mobility.external.p3_link")}
        </a>
        .
      </p>
      <p className={paragraph()}>
        {t("mobility.external.p4")}{" "}
        <a
          href="https://www.emis.ge"
          target="_blank"
          className={richTextLink()}
        >
          {t("mobility.external.p4_link")}
        </a>
        .
      </p>

      {/* Internal Mobility */}
      <h3
        className={sectionTitle({ size: "medium" })}
        style={{ marginBottom: "15px" }}
      >
        {t("mobility.internal.title")}
      </h3>
      <p className={paragraph()}>{t("mobility.internal.p1")}</p>
      <p className={paragraph()}>
        {t("mobility.internal.p2")}{" "}
        <a href="#" className={richTextLink()}>
          {t("mobility.internal.p2_link")}
        </a>
        .
      </p>
      <p className={paragraph()}>{t("mobility.internal.p3")}</p>

      {/* Program List */}
      <ul className={programList()}>
        <li className={programListItem()}>
          <a href="mailto:math@kiu.edu.ge" className={programLink()}>
            {t("mobility.programs.math.name")}
          </a>
          <br />
          {t("mobility.programs.math.phone")}
        </li>
        <li className={programListItem()}>
          <a href="mailto:cs@kiu.edu.ge" className={programLink()}>
            {t("mobility.programs.cs.name")}
          </a>
          <br />
          {t("mobility.programs.cs.phone")}
        </li>
        <li className={programListItem()}>
          <a href="mailto:mgmt@kiu.edu.ge" className={programLink()}>
            {t("mobility.programs.management.name")}
          </a>
          <br />
          {t("mobility.programs.management.phone")}
        </li>
      </ul>

      {/* Contact */}
      <p className={`${clearFloat()} ${paragraph()}`}>
        {t("mobility.contact.text")}{" "}
        <a href="mailto:sss@kiu.edu.ge" className={richTextLink()}>
          {t("mobility.contact.email")}
        </a>{" "}
        | {t("mobility.contact.phone")}
      </p>
    </section>
  );
};

export default AcademicMobilitySection;
