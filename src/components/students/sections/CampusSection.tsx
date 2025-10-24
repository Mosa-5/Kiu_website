import React from "react";
import { AboutIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeader,
  sectionTitle,
  icon,
  paragraph,
  richTextLink,
} from "../StudentsDetail.styles";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const CampusSection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="campus" className={section()}>
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{t("campus.title")}</h2>
        <span className={icon()}>{AboutIcon}</span>
      </div>

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
    </section>
  );
};

export default CampusSection;
