import React from "react";
import { SchoolIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  paragraph,
  richTextLink,
} from "../StudentsDetail.styles";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const CampusSection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="campus" className={section()}>
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{SchoolIcon}</span>
        <h2 className={sectionTitle()}>{t("campus.title")}</h2>
      </div>

      <div className={sectionContent()}>
        <p className={paragraph()}>{t("campus.paragraph1")}</p>

        <p className={paragraph()}>{t("campus.paragraph2")}</p>

        <p className={paragraph()}>
          <a href="#" className={richTextLink()}>
            {t("campus.dormitoryRegulations")}
          </a>
        </p>

        <p className={paragraph()}>
          {t("campus.videoIntro")}{" "}
          <a href="#" className={richTextLink()}>
            {t("campus.videoLink")}
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default CampusSection;
