import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { programsData } from "./data/programs/ProgramsData";
import { SideSectionsSheet } from "@/components/ui/sections-sidebar";

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
  const [isOpen, setIsOpen] = useState(false);

  const programData = programsData[id || ""];

  if (!programData) {
    return (
      <div className="max-w-[1680px] mx-auto font-sans p-8">
        <h1 className="text-3xl font-bold text-red-600">Program Not Found</h1>
        <p className="text-lg mt-4">The requested program does not exist.</p>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setIsOpen(false);
  };

  const sections = [
    { id: "about-school", label: "About School" },
    { id: "about-program", label: "About Program" },
    { id: "curriculum-brief", label: "Curriculum Brief" },
    { id: "minor-program", label: "Minor Program" },
    { id: "program-supervisor", label: "Program Supervisor" },
    { id: "academic-personnel", label: "Academic Personnel" },
    { id: "tuition-costs", label: "Tuition Fee and Living Costs" },
    { id: "newsletter-archive", label: "SMCS Newsletter Archive" },
  ];

  return (
    <>
      <SideSectionsSheet
        sections={sections}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />

      <div className="max-w-[1680px] mx-auto font-sans">
        <AboutSchoolSection programData={programData} />
        <AboutProgramSection programData={programData} />
        <CurriculumBriefSection programData={programData} />
        <MinorProgramSection programData={programData} />
        <ProgramSupervisorSection programData={programData} />
        <AcademicPersonnelSection programData={programData} />
        <TuitionCostsSection programData={programData} />
        <NewsletterArchiveSection programData={programData} />
      </div>
    </>
  );
};

export default SingleProgramDetail;
