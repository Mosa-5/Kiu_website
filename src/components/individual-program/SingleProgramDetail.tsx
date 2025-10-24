import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProgramsData } from "./data/programs/ProgramsData";
import { SideSectionsSheet } from "@/components/ui/sections-sidebar";
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
  const [isOpen, setIsOpen] = useState(false);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setIsOpen(false);
  };

  const sectionsEn = [
    { id: "about-school", label: "About School" },
    { id: "about-program", label: "About Program" },
    { id: "curriculum-brief", label: "Curriculum Brief" },
    { id: "minor-program", label: "Minor Program" },
    { id: "program-supervisor", label: "Program Supervisor" },
    { id: "academic-personnel", label: "Academic Personnel" },
    { id: "tuition-costs", label: "Tuition Fee and Living Costs" },
    { id: "newsletter-archive", label: "SMCS Newsletter Archive" },
  ];

  const sectionsKa = [
    { id: "about-school", label: "სკოლის შესახებ" },
    { id: "about-program", label: "პროგრამის შესახებ" },
    { id: "curriculum-brief", label: "სასწავლო გეგმის მოკლე მიმოხილვა" },
    { id: "minor-program", label: "მინორული პროგრამა" },
    { id: "program-supervisor", label: "პროგრამის ხელმძღვანელი" },
    { id: "academic-personnel", label: "აკადემიური პერსონალი" },
    { id: "tuition-costs", label: "სწავლის საფასური და ცხოვრების ხარჯები" },
    { id: "newsletter-archive", label: "SMCS საინფორმაციო ბიულეტენის არქივი" },
  ];

  const sections = i18n.language === "ka" ? sectionsKa : sectionsEn;

  return (
    <>
      <SideSectionsSheet
        sections={sections}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />

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
    </>
  );
};

export default SingleProgramDetail;