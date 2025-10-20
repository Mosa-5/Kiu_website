import React from "react";
import { ProgramIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingBadge,
  mainHeading,
  iconWrapper,
  introParagraph,
  subheading,
  paragraph,
  paragraphSmall,
  sectionHeading,
  sectionHeadingWithMargin,
  list,
  goalsList,
  goalNumber,
  outcomeSection,
  outcomeSubtitle,
  outcomeList,
  paragraphWithParts,
  link,
} from "./AboutProgram.styles";

interface Props {
  programData: ProgramData;
}

const AboutProgramSection: React.FC<Props> = ({ programData }) => {
  const data = programData.aboutProgram;

  return (
    <section id="about-program" className={section()}>
      <div className={headingBadge()}>
        <h2 className={mainHeading()}>{data.title}</h2>
        <span className={iconWrapper()}>{ProgramIcon}</span>
      </div>

      <p className={introParagraph()}>{data.intro}</p>

      <h3 className={subheading()}>{data.degreeAwarded.title}</h3>
      <p className={paragraph()}>{data.degreeAwarded.text}</p>

      <h3 className={subheading()}>{data.languageOfInstruction.title}</h3>
      <p className={paragraphSmall()}>{data.languageOfInstruction.text}</p>
      <p className={paragraph()}>{data.languageOfInstruction.note}</p>

      <h3 className={sectionHeading()}>{data.accreditation.title}</h3>
      <ul className={list()}>
        {data.accreditation.points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>

      <h3 className={sectionHeading()}>{data.programGoals.title}</h3>
      <p className={paragraphWithParts()}>{data.programGoals.intro}</p>
      <ul className={goalsList()}>
        {data.programGoals.goals.map((g, i) => (
          <li key={i}>
            <span className={goalNumber()}>{g.number}</span> {g.text}
          </li>
        ))}
      </ul>

      <h3 className={sectionHeading()}>{data.learningOutcomes.title}</h3>
      <p className={paragraphWithParts()}>{data.learningOutcomes.intro}</p>
      {data.learningOutcomes.sections.map((s, i) => (
        <div key={i} className={outcomeSection()}>
          {s.subtitle && <h4 className={outcomeSubtitle()}>• {s.subtitle}</h4>}
          <ul className={outcomeList()}>
            {s.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className={sectionHeadingWithMargin()}>{data.futureCareers.title}</h3>
      <p className={paragraph()}>{data.futureCareers.text}</p>

      <h3 className={sectionHeading()}>{data.opportunities.title}</h3>
      <ul className={list()}>
        {data.opportunities.items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      <h3 className={sectionHeading()}>{data.howToApply.title}</h3>
      {data.howToApply.paragraphs.map((p, i) => (
        <p key={i} className={paragraphWithParts()}>
          {p.parts.map((part, j) => {
            if (part.type === "link")
              return (
                <a key={j} href={part.url} className={link()}>
                  {part.text}
                </a>
              );
            return <span key={j}>{part.text}</span>;
          })}
        </p>
      ))}
    </section>
  );
};

export default AboutProgramSection;
