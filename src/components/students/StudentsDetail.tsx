import React, { useState } from "react";
import { SideSectionsSheet } from "../ui/sections-sidebar";
import { useParams } from "react-router-dom";

// Sections
import GrantProgramSection from "./sections/GrantProgramSection";
import LegalDirectorySection from "./sections/LegalDirectorySection";
import AcademicMobilitySection from "./sections/AcademicMobilitySection";
import CampusSection from "./sections/CampusSection";
import LibrarySection from "./sections/LibrarySection";
import ErasmusSection from "./sections/ErasmusSection";
import AcademicCalendarSection from "./sections/AcademicCalendarSection";

import {
  container
} from "./StudentsDetail.styles";
import IntroSection from "./sections/IntroSection";

const StudentsDetail: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setIsOpen(false);
  };

  const sections = [
    { id: "intro", label: lang === "ka" ? "შესავალი" : "Intro" },
    { id: "legal", label: lang === "ka" ? "იურიდიული დირექტორია" : "Legal Directory" },
    { id: "mobility", label: lang === "ka" ? "აკადემიური მობილობა" : "Academic Mobility" },
    { id: "campus", label: lang === "ka" ? "კამპუსი" : "Campus" },
    { id: "library", label: lang === "ka" ? "ბიბლიოთეკა" : "Library" },
    { id: "grant-program", label: lang === "ka" ? "სტუდენტური გრანტის პროგრამა" : "Student Grant Program" },
    { id: "erasmus", label: lang === "ka" ? "ერასმუსი" : "Erasmus" },
    { id: "calendar", label: lang === "ka" ? "აკადემიური კალენდარი" : "Academic Calendar" },
  ];

  return (
    <>
      <SideSectionsSheet
        sections={sections}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
        language={lang || "en"}
      />

      <div className={container()}>
        <IntroSection />
        <LegalDirectorySection />
        <AcademicMobilitySection />
        <CampusSection />
        <LibrarySection />
        <GrantProgramSection />
        <ErasmusSection />
        <AcademicCalendarSection />
      </div>
    </>
  );
};

export default StudentsDetail;