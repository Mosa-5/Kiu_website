import React from "react";
import { CostsIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingContainer,
  title,
  icon,
  academicYear,
  sectionTitle,
  pointsList,
  admissionNote,
  admissionLink,
} from "./TuitionCosts.styles";

interface Props {
  programData: ProgramData;
}

const TuitionCostsSection: React.FC<Props> = ({ programData }) => {
  const data = programData.tuitionAndCosts;

  return (
    <section id="tuition-costs" className={section()}>
      <div className={headingContainer()}>
        <h2 className={title()}>{data.title}</h2>
        <span className={icon()}>{CostsIcon}</span>
      </div>

      <h3 className={academicYear()}>{data.academicYear}</h3>
      <h4 className={sectionTitle()}>{data.sectionTitle}</h4>

      <ul className={pointsList()}>
        {data.points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>

      <p className={admissionNote()}>
        {data.admissionNote.text}
        <a href={data.admissionNote.linkUrl} className={admissionLink()}>
          {data.admissionNote.linkText}
        </a>
      </p>
    </section>
  );
};

export default TuitionCostsSection;
