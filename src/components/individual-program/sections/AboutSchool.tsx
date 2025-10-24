import React from "react";
import { SchoolIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingBadge,
  heading,
  iconWrapper,
  paragraph,
  link,
  blueText,
} from "./AboutSchool.styles";

interface Props {
  programData: ProgramData;
  mainColorClass: string;  
  headingBgClass: string; 
}
const AboutSchoolSection: React.FC<Props> = ({
  programData,
  mainColorClass,
  headingBgClass,
}) => {
  const { aboutSchool } = programData;

  return (
    <section id="about-school" className={section()}>
      {/* heading badge uses its own bg color */}
      <div className={`${headingBadge()} ${headingBgClass}`}>
        <h1 className={`${heading()} ${mainColorClass}`}>{aboutSchool.title}</h1>
        <span className={iconWrapper()}>{SchoolIcon}</span>
      </div>


      {aboutSchool.paragraphs.map((para, i) => (
        <p key={i} className={paragraph()}>
          {para.parts.map((part, j) => {
            if (part.type === "link")
              return (
                <a key={j} href={part.url} className={link()}>
                  {part.text}
                </a>
              );
            if (part.type === "blue")
              return (
                <span key={j} className={blueText()}>
                  {part.text}
                </span>
              );
            return <span key={j}>{part.text}</span>;
          })}
        </p>
      ))}
    </section>
  );
};

export default AboutSchoolSection;
