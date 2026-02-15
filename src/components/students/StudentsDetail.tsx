import React from "react";

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
  return (
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
  );
};

export default StudentsDetail;
