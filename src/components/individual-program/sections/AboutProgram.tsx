import React from "react";
import { ProgramIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const AboutProgramSection: React.FC<Props> = ({ programData }) => {
  const data = programData.aboutProgram;

  return (
    <section id="about-program" className="mb-12 scroll-mt-8">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-2xl sm:text-3xl font-medium text-mainDark">
          {data.title}
        </h2>
        <span className="text-mainDark">{ProgramIcon}</span>
      </div>

      <p className="mb-6 text-lg text-main font-medium">{data.intro}</p>

      <h3 className="text-lg font-medium text-main mb-2">
        {data.degreeAwarded.title}
      </h3>
      <p className="mb-6 text-sm sm:text-lg">{data.degreeAwarded.text}</p>

      <h3 className="text-lg font-medium text-main mb-2">
        {data.languageOfInstruction.title}
      </h3>
      <p className="mb-2 text-sm sm:text-lg">
        {data.languageOfInstruction.text}
      </p>
      <p className="mb-6 text-sm sm:text-lg">
        {data.languageOfInstruction.note}
      </p>

      <h3 className="text-xl sm:text-2xl font-medium text-main mb-3">
        {data.accreditation.title}
      </h3>
      <ul className="mb-6 text-sm sm:text-lg space-y-1">
        {data.accreditation.points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium text-main mb-3">
        {data.programGoals.title}
      </h3>
      <p className="mb-4 text-sm sm:text-lg">{data.programGoals.intro}</p>
      <ul className="mb-6 text-sm sm:text-lg space-y-2">
        {data.programGoals.goals.map((g, i) => (
          <li key={i}>
            <span className="font-medium text-main">{g.number}</span> {g.text}
          </li>
        ))}
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium text-main mb-3">
        {data.learningOutcomes.title}
      </h3>
      <p className="mb-4 text-sm sm:text-lg">{data.learningOutcomes.intro}</p>
      {data.learningOutcomes.sections.map((s, i) => (
        <div key={i} className="mb-4">
          {s.subtitle && (
            <h4 className="font-medium text-sm sm:text-lg mb-2">
              • {s.subtitle}
            </h4>
          )}
          <ul className="text-sm sm:text-lg space-y-1 ml-4">
            {s.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="text-xl sm:text-2xl font-medium text-main mb-3 mt-6">
        {data.futureCareers.title}
      </h3>
      <p className="mb-6 text-sm sm:text-lg">{data.futureCareers.text}</p>

      <h3 className="text-xl sm:text-2xl font-medium text-main mb-3">
        {data.opportunities.title}
      </h3>
      <ul className="mb-6 text-sm sm:text-lg space-y-1">
        {data.opportunities.items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium text-main mb-3">
        {data.howToApply.title}
      </h3>
      {data.howToApply.paragraphs.map((p, i) => (
        <p key={i} className="mb-4 text-sm sm:text-lg">
          {p.parts.map((part, j) => {
            if (part.type === "link")
              return (
                <a
                  key={j}
                  href={part.url}
                  className="text-link hover:text-linkDark underline-offset-2 underline font-medium"
                >
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
