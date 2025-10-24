import React from "react";
import { MinorIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingContainer,
  title,
  icon,
  subtitle,
  link,
  text,
} from "./MinorProgram.styles";

interface Props {
  programData: ProgramData;
  mainColorClass: string;  
  headingBgClass: string; 
}

const MinorProgramSection: React.FC<Props> = ({ programData,mainColorClass,
  headingBgClass, }) => {
  const data = programData.minorProgram;

  return (
    <section id="minor-program" className={section()}>
      <div className={`${headingContainer()} ${headingBgClass}`}>
        <h2 className={`${title()} ${mainColorClass}`}>{data.title}</h2>
        <span className={icon()}>{MinorIcon}</span>
      </div>

      <h3 className={subtitle()}>
        <a
          href={data.subtitle[0].url}
          className={link()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.subtitle[0].text}
        </a>
      </h3>

      <p className={text()}>{data.text}</p>
    </section>
  );
};

export default MinorProgramSection;
