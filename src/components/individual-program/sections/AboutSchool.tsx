import React from "react";
import { SchoolIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const AboutSchoolSection: React.FC<Props> = ({ programData }) => {
  const { aboutSchool } = programData;

  return (
    <section id="about-school" className="mb-12">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h1 className="text-2xl sm:text-3xl font-medium text-mainDark">
          {aboutSchool.title}
        </h1>
        <span className="text-mainDark">{SchoolIcon}</span>
      </div>

      {aboutSchool.paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-6 text-sm sm:text-lg">
          {paragraph.parts.map((part, j) => {
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
            if (part.type === "blue")
              return (
                <span key={j} className="text-mainDark font-medium">
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
