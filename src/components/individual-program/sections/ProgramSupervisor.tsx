import React from "react";
import type { ProgramData } from "../data/programs/types";
import { SupervisorIcon } from "../../../assets/icons/icons";
import {
  section,
  headingContainer,
  title,
  icon,
  supervisorList,
  supervisorName,
  imageWrapper,
  image,
  position,
  paragraphStyle,
  clearFloat,
  singleSupervisorName,
  singleImageWrapper,
  singleImage,
  singlePosition,
  singleParagraph,
} from "./ProgramSupervisor.styles";

interface Props {
  programData: ProgramData;
  mainColorClass: string;  
  headingBgClass: string; 
}

const ProgramSupervisorSection: React.FC<Props> = ({
  programData,mainColorClass,
  headingBgClass,
}) => {
  const supervisorData = programData.programSupervisor;
  const isMultiple = "supervisors" in supervisorData;

  return (
    <section id="program-supervisor" className={section()}>
      <div className={`${headingContainer()} ${headingBgClass}`}>
        <h2 className={`${title()} ${mainColorClass}`}>{supervisorData.title}</h2>
        <span className={icon()}>{SupervisorIcon}</span>
      </div>

      {isMultiple ? (
        <div className={supervisorList()}>
          {supervisorData.supervisors.map((supervisor, index) => (
            <div key={index}>
              <h3 className={supervisorName()}>{supervisor.name}</h3>

              <div className={imageWrapper()}>
                <img
                  src={supervisor.image}
                  alt={supervisor.name}
                  className={image()}
                />
              </div>

              <p className={position()}>{supervisor.position}</p>

              {supervisor.paragraphs.map((paragraph, i) => (
                <p key={i} className={paragraphStyle()}>
                  {paragraph}
                </p>
              ))}

              <div className={clearFloat()}></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h3 className={singleSupervisorName()}>{supervisorData.name}</h3>

          <div className={singleImageWrapper()}>
            <img
              src={supervisorData.image}
              alt={supervisorData.name}
              className={singleImage()}
            />
          </div>

          <p className={singlePosition()}>{supervisorData.position}</p>

          {supervisorData.paragraphs.map((paragraph, i) => (
            <p key={i} className={singleParagraph()}>
              {paragraph}
            </p>
          ))}

          <div className={clearFloat()}></div>
        </>
      )}
    </section>
  );
};

export default ProgramSupervisorSection;
