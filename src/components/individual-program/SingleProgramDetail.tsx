import React from "react";
import { useParams } from "react-router-dom";
import { getProgramsData } from "./data/programs/ProgramsData";
import { useTranslation } from "react-i18next";

import AboutSchoolSection from "./sections/AboutSchool";
import AboutProgramSection from "./sections/AboutProgram";
import CurriculumBriefSection from "./sections/CurriculumBrief";
import MinorProgramSection from "./sections/MinorProgram";
import ProgramSupervisorSection from "./sections/ProgramSupervisor";
import AcademicPersonnelSection from "./sections/AcademicPersonnel";
import TuitionCostsSection from "./sections/TuitionCosts";
import NewsletterArchiveSection from "./sections/NewsletterArchive";

const SingleProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();

  const programsData = getProgramsData(i18n.language);
  const programData = programsData[id || ""];

  const programThemes: Record<string, { main: string; bg: string }> = {
    computerScience: { main: "text-mainDark", bg: "bg-headingBg" },
    mathematics:    { main: "text-mainDarkMaths", bg: "bg-headingBgMaths" },
  };

  const { main, bg } = programThemes[id || "computerScience"] || {
    main: "text-mainDark",
    bg: "bg-headingBg",
  };

  if (!programData) {
    return (
      <div className="max-w-[1680px] mx-auto font-sans p-8">
        <h1 className="text-3xl font-bold text-red-600">
          {i18n.language === "ka" ? "პროგრამა ვერ მოიძებნა" : "Program Not Found"}
        </h1>
        <p className="text-lg mt-4">
          {i18n.language === "ka" ? "მოთხოვნილი პროგრამა არ არსებობს." : "The requested program does not exist."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1680px] max-sm:px-4 mx-auto font-sans">
      <AboutSchoolSection
        programData={programData}
        mainColorClass={main}
        headingBgClass={bg}
      />
      <AboutProgramSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
      <CurriculumBriefSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
      <MinorProgramSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
      <ProgramSupervisorSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
      <AcademicPersonnelSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
      <TuitionCostsSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
      <NewsletterArchiveSection programData={programData} mainColorClass={main} headingBgClass={bg}/>
    </div>
  );
};

export default SingleProgramDetail;
