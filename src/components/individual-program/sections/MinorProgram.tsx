import React from "react";
import { MinorIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const MinorProgramSection: React.FC<Props> = ({ programData }) => {
  const data = programData.minorProgram;

  return (
    <section id="minor-program" className="mb-12 scroll-mt-8">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-3xl font-medium text-mainDark">{data.title}</h2>
        <span className="text-mainDark">{MinorIcon}</span>
      </div>

      <h3 className="text-xl font-medium text-main mb-4">
        <a
          href={data.subtitle[0].url}
          className="text-link hover:text-linkDark underline-offset-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.subtitle[0].text}
        </a>
      </h3>

      <p className="text-lg">{data.text}</p>
    </section>
  );
};

export default MinorProgramSection;
