import React from "react";
import { ArchieveIcon } from "@/assets/icons/icons";
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

const LibrarySection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="library" className={section()}>
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{ArchieveIcon}</span>
        <h2 className={sectionTitle()}>{t("library.title")}</h2>
      </div>

      <div className={sectionContent()}>
        <p className={paragraph()}>{t("library.description1")}</p>

        <p className={paragraph()}>{t("library.description2")}</p>

        <p className={paragraph()}>{t("library.description3")}</p>

        <p className={paragraph()}>{t("library.description4")}</p>

        <p className={paragraph()}>
          {t("library.contactInfo")}{" "}
          <a href={`mailto:${t("library.email")}`} className={richTextLink()}>
            {t("library.email")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default LibrarySection;
