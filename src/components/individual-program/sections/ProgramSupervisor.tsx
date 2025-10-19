import React from "react";
import type { ProgramData } from "../data/programs/types";
import { SupervisorIcon } from "../../../assets/icons/icons";

interface ProgramSupervisorSectionProps {
  programData: ProgramData;
}

const ProgramSupervisorSection: React.FC<ProgramSupervisorSectionProps> = ({
  programData,
}) => {
  const supervisorData = programData.programSupervisor;

  // Check if it's multiple supervisors
  const isMultiple = 'supervisors' in supervisorData;

  return (
    <section id="program-supervisor" className="mb-12 scroll-mt-8">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h2 className="text-3xl font-medium text-mainDark">
          {supervisorData.title}
        </h2>
        <span className="text-mainDark">{SupervisorIcon}</span>
      </div>

      {isMultiple ? (
        // Multiple supervisors
        <div className="space-y-12">
          {supervisorData.supervisors.map((supervisor, index) => (
            <div key={index}>
              <h3 className="text-2xl font-medium text-slate-900 mb-4">
                {supervisor.name}
              </h3>

              <div className="float-right ml-8 mb-6 w-[476px] h-[430px]">
                <img
                  src={supervisor.image}
                  alt={supervisor.name}
                  className="w-full rounded-lg shadow-lg h-full object-cover"
                />
              </div>

              <p className="text-lg mb-6">{supervisor.position}</p>

              {supervisor.paragraphs.map((paragraph, i) => (
                <p key={i} className="mb-6 text-lg">
                  {paragraph}
                </p>
              ))}

              <div className="clear-both"></div>
            </div>
          ))}
        </div>
      ) : (
        // Single supervisor (exact original CSS)
        <>
          <h3 className="text-2xl font-medium text-slate-900 mb-4">
            {supervisorData.name}
          </h3>

          <div className="float-right ml-8 mb-6 w-[476px]">
            <img
              src={supervisorData.image}
              alt={supervisorData.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <p className="text-lg mb-6">{supervisorData.position}</p>

          {supervisorData.paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg">
              {paragraph}
            </p>
          ))}

          <div className="clear-both"></div>
        </>
      )}
    </section>
  );
};

export default ProgramSupervisorSection;