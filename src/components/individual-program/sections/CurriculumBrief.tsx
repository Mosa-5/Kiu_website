import React from "react";
import { CuriculumIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingBadge,
  mainHeading,
  iconWrapper,
  introParagraph,
  grid,
  subsectionTitle,
  subsectionTitleSmall,
  list,
  listLarge,
  studyPlanLink,
} from "./CurriculumBrief.styles";

interface Props {
  programData: ProgramData;
}

const CurriculumBriefSection: React.FC<Props> = ({ programData }) => {
  const data = programData.curriculumBrief;

  return (
    <section id="curriculum-brief" className={section()}>
      <div className={headingBadge()}>
        <h2 className={mainHeading()}>{data.title}</h2>
        <span className={iconWrapper()}>{CuriculumIcon}</span>
      </div>

      <p className={introParagraph()}>{data.intro}</p>

      <div className={grid()}>
        <div>
          <h3 className={subsectionTitle()}>{data.concentrations.title}</h3>
          <ul className={list()}>
            {data.concentrations.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={subsectionTitleSmall()}>
            {data.degreeRequirements.title}
          </h3>
          <ul className={listLarge()}>
            {data.degreeRequirements.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={subsectionTitleSmall()}>
            {data.specialization.title}
          </h3>
          <ul className={listLarge()}>
            {data.specialization.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <a href={data.studyPlanLink.url} className={studyPlanLink()}>
        {data.studyPlanLink.text}
      </a>
    </section>
  );
};

export default CurriculumBriefSection;
