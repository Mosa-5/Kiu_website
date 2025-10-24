import React from "react";
import { AboutIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeader,
  sectionTitle,
  icon,
  programList,
  legalDirectorySpecial,
  legalDirectorySpecialLink,
} from "../StudentsDetail.styles";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";
import { ChevronRight } from "lucide-react";

const LegalDirectorySection: React.FC = () => {
  const { t, getTranslatedArray } = useStudentsTranslations();

  const getDocumentsArray = (): string[] => {
    return getTranslatedArray("legalDirectory.documents");
  };

  return (
    <section id="legal" className={section()}>
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{t("legalDirectory.title")}</h2>
        <span className={icon()}>{AboutIcon}</span>
      </div>

      <ul className={programList()}>
        {getDocumentsArray().map((document, index) => (
          <li key={index} className={legalDirectorySpecialLink()}>
            <a href="#" className={legalDirectorySpecial()}>
              {document} <ChevronRight />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LegalDirectorySection;
