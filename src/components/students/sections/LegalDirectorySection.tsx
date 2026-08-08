import React from "react";
import { CuriculumIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  legalDirectoryList,
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
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{CuriculumIcon}</span>
        <h2 className={sectionTitle()}>{t("legalDirectory.title")}</h2>
      </div>

      <div className={sectionContent()}>
        <ul className={legalDirectoryList()}>
          {getDocumentsArray().map((document, index) => (
            <li key={index} className={legalDirectorySpecialLink()}>
              <a href="#" className={legalDirectorySpecial()}>
                {document} <ChevronRight />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LegalDirectorySection;
