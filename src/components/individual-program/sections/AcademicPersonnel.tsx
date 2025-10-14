import React from "react";
import { PersonnelIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types"

interface Props {
  programData: ProgramData;
}

const AcademicPersonnelSection: React.FC<Props> = ({ programData }) => {
  const data = programData.academicPersonnel;

  return (
    <section id="academic-personnel" className="mb-12 scroll-mt-8">
      <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-3xl font-medium text-[#1B3D6E]">{data.title}</h2>
        <span className="text-[#1B3D6E]">{PersonnelIcon}</span>
      </div>

      {data.sections.map((section, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-2xl font-medium text-main mb-6">{section.subtitle}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.members.map((member, j) => (
              <div
                key={j}
                className="flex items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[105px] h-[105px] object-cover rounded-l-md"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-lg text-gray-900 leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-gray-700 text-sm mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AcademicPersonnelSection;
