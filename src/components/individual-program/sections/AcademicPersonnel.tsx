import React from "react";
import { PersonnelIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingBadge,
  mainHeading,
  iconWrapper,
  subsectionWrapper,
  subsectionTitle,
  grid,
  memberCard,
  memberImage,
  memberInfo,
  memberName,
  memberTitle,
} from "./AcademicPersonnel.styles";

interface Props {
  programData: ProgramData;
}

const AcademicPersonnelSection: React.FC<Props> = ({ programData }) => {
  const data = programData.academicPersonnel;

  return (
    <section id="academic-personnel" className={section()}>
      <div className={headingBadge()}>
        <h2 className={mainHeading()}>{data.title}</h2>
        <span className={iconWrapper()}>{PersonnelIcon}</span>
      </div>

      {data.sections.map((sec, i) => (
        <div key={i} className={subsectionWrapper()}>
          <h3 className={subsectionTitle()}>{sec.subtitle}</h3>

          <div className={grid()}>
            {sec.members.map((member, j) => (
              <div key={j} className={memberCard()}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={memberImage()}
                />
                <div className={memberInfo()}>
                  <h4 className={memberName()}>{member.name}</h4>
                  <p className={memberTitle()}>{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AcademicPersonnelSection;
