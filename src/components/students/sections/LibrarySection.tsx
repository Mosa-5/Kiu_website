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

const LibrarySection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="library" className={section()}>
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{t("library.title")}</h2>
        <span className={icon()}>{AboutIcon}</span>
      </div>

      <p className={paragraph()}>
        {t("library.description1")}
      </p>

      <p className={paragraph()}>
        {t("library.description2")}
      </p>

      <p className={paragraph()}>
        {t("library.description3")}
      </p>

      <p className={paragraph()}>
        {t("library.description4")}
      </p>

      <p className={paragraph()}>
        {t("library.contactInfo")}{" "}
        <a href={`mailto:${t("library.email")}`} className={richTextLink()}>
          {t("library.email")}
        </a>
      </p>
    </section>
  );
};

export default LibrarySection;