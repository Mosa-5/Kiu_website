import React from "react";
import { CostsIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const TuitionCostsSection: React.FC<Props> = ({ programData }) => {
  const data = programData.tuitionAndCosts;

  return (
    <section id="tuition-costs" className="mb-12 scroll-mt-8">
      <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-3xl font-medium text-mainDark">{data.title}</h2>
        <span className="text-mainDark">{CostsIcon}</span>
      </div>

      <h3 className="text-2xl font-medium text-main mb-6">
        {data.academicYear}
      </h3>
      <h4 className="text-lg font-medium mb-4">{data.sectionTitle}</h4>

      <ul className="mb-6 text-lg space-y-2">
        {data.points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>

      <p className="text-lg">
        {data.admissionNote.text}
        <a
          href={data.admissionNote.linkUrl}
          className="text-main hover:underline font-medium"
        >
          {data.admissionNote.linkText}
        </a>
      </p>
    </section>
  );
};

export default TuitionCostsSection;
