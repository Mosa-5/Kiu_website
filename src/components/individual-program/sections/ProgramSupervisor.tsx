import React from "react";
import { SupervisorIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const ProgramSupervisorSection: React.FC<Props> = ({ programData }) => {
  const data = programData.programSupervisor;

  return (
    <section id="program-supervisor" className="mb-12 scroll-mt-8">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-2xl sm:text-3xl font-medium text-mainDark">
          {data.title}
        </h2>
        <span className="text-mainDark">{SupervisorIcon}</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-4">
        {data.name}
      </h3>

      <div className="float-right ml-8 mb-6 w-full sm:w-[476px]">
        <img
          src={data.image}
          alt={data.name}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <p className="text-sm sm:text-lg mb-6">{data.position}</p>

      {data.paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-6 text-sm sm:text-lg">
          {paragraph}
        </p>
      ))}

      <div className="clear-both"></div>
    </section>
  );
};

export default ProgramSupervisorSection;
