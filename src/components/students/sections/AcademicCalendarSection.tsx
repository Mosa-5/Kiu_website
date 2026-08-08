import React from "react";
import { MinorIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  paragraph,
  callImageWrapper,
  callImage,
} from "../StudentsDetail.styles";
import { AcademicCalendar } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const AcademicCalendarSection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="calendar" className={section()}>
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{MinorIcon}</span>
        <h2 className={sectionTitle()}>{t("calendar.title")}</h2>
      </div>

      <div className={sectionContent()}>
        <div className={callImageWrapper()}>
          <img
            src={AcademicCalendar}
            alt="Academic Calendar"
            className={callImage()}
          />
        </div>

        <p className={`${paragraph()} mt-6 sm:max-3xl:mt-4`}>
          {t("calendar.description")}
        </p>
      </div>
    </section>
  );
};

export default AcademicCalendarSection;
