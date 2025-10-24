import React from "react";
import { AboutIcon } from "@/assets/icons/icons";
import {
  sectioncalendar,
  sectionHeader,
  sectionTitle,
  icon,
  paragraph,
} from "../StudentsDetail.styles";
import { AcademicCalendar } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const AcademicCalendarSection: React.FC = () => {
    const { t } = useStudentsTranslations();
  return (
    <section id="calendar" className={sectioncalendar()}>
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{t("calendar.title")}</h2>
        <span className={icon()}>{AboutIcon}</span>
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <img
          src={AcademicCalendar}
          alt="Academic Calendar"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      <p className={paragraph()} style={{ marginTop: "1rem" }}>
        {t("calendar.description")}
      </p>
    </section>
  );
};

export default AcademicCalendarSection;