import React from "react";
import { CuriculumIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const CurriculumBriefSection: React.FC<Props> = ({ programData }) => {
  const data = programData.curriculumBrief;

  return (
    <section id="curriculum-brief" className="mb-12 scroll-mt-8">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-2xl sm:text-3xl font-medium text-mainDark">
          {data.title}
        </h2>
        <span className="text-mainDark">{CuriculumIcon}</span>
      </div>

      <p className="mb-6  text-xl sm:text-2xl text-main font-medium">
        {data.intro}
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-main mb-3">
            {data.concentrations.title}
          </h3>
          <ul className="text-sm sm:text-lg space-y-1">
            {data.concentrations.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-main mb-3">
            {data.degreeRequirements.title}
          </h3>
          <ul className="text-lg space-y-1">
            {data.degreeRequirements.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-main mb-3">
            {data.specialization.title}
          </h3>
          <ul className="text-lg space-y-1">
            {data.specialization.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={data.studyPlanLink.url}
        className="text-main hover:underline font-medium text-lg"
      >
        {data.studyPlanLink.text}
      </a>
    </section>
  );
};

export default CurriculumBriefSection;
