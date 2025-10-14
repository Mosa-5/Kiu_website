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
      <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h1 className="text-3xl font-medium text-[#1B3D6E]">{aboutSchool.title}</h1>
        <span className="text-[#1B3D6E]">{SchoolIcon}</span>
      </div>

      {aboutSchool.paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-6 text-lg">
          {paragraph.parts.map((part, j) => {
            if (part.type === "link")
              return (
                <a key={j} href={part.url} className="text-blue-400 hover:underline font-medium">
                  {part.text}
                </a>
              );
            if (part.type === "blue")
              return (
                <span key={j} className="text-[#1B3D6E] font-medium">
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
