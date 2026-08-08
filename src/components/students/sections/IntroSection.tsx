import React from "react";
import { AboutIcon } from "@/assets/icons/icons";
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

const IntroSection: React.FC = () => {
  const { t } = useStudentsTranslations();

  return (
    <section id="intro" className={section({ isFirst: true })}>
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{AboutIcon}</span>
        <h1 className={sectionTitle()}>{t("intro.title")}</h1>
      </div>

      <div className={sectionContent()}>
        <p className={paragraph()}>{t("intro.description")}</p>

        <p className={paragraph()}>{t("intro.eligibility")}</p>

        <p className={paragraph()}>
          {t("intro.categories")}{" "}
          <a href={`mailto:${t("intro.email")}`} className={richTextLink()}>
            {t("intro.email")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
