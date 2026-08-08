import React from "react";
import { PersonnelIcon } from "@/assets/icons/icons";
import {
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  paragraph,
  richTextLink,
  orderedList,
  listItemText,
  callBlock,
  callTitle,
  callImageWrapper,
  callImage,
} from "../StudentsDetail.styles";
import { SaarlandUniversity, UniversiteParisSaclay } from "@/assets";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const ErasmusSection: React.FC = () => {
  const { t, getTranslatedArray } = useStudentsTranslations();

  // Helper function to safely get array translations
  const getArrayTranslation = (key: string): string[] => {
    return getTranslatedArray(key);
  };

  return (
    <section id="erasmus" className={section()}>
      <div className={sectionHeaderRow()}>
        <span className={sectionIndex()}>{PersonnelIcon}</span>
        <h2 className={sectionTitle()}>{t("erasmus.title")}</h2>
      </div>

      <div className={sectionContent()}>
        {/* Call Universitat Politècnica de València */}
        <div className={callBlock()}>
          <h3 className={callTitle()}>{t("erasmus.calls.upv.title")}</h3>

          <p className={paragraph({ bold: true, centered: true })}>
            {t("erasmus.calls.upv.subTitle")}
          </p>

          <p className={paragraph({ bold: true, centered: true })}>
            {t("erasmus.calls.upv.program")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.upv.description")}{" "}
            <a href="#" className={richTextLink()}>
              {t("erasmus.calls.upv.program")}
            </a>
            .
          </p>

          <p className={paragraph()}>
            <strong>To whom:</strong> {t("erasmus.calls.upv.toWhom")}
          </p>

          <p className={paragraph()}>
            <strong>Where to:</strong> {t("erasmus.calls.upv.whereTo")}
          </p>

          <p className={paragraph()}>
            <strong>What for:</strong> {t("erasmus.calls.upv.whatFor")}
          </p>

          <p className={paragraph()}>
            <strong>Period of the stay in the UPV:</strong>{" "}
            {t("erasmus.calls.upv.period")}
          </p>

          <p className={paragraph()}>
            <strong>ELIGIBLE lecturers:</strong>{" "}
            {t("erasmus.calls.upv.eligible")}
          </p>

          <p className={paragraph()}>
            <strong>Information:</strong> {t("erasmus.calls.upv.info")}
            <br />
            {t("erasmus.calls.upv.kiuWebsite")}{" "}
            <a
              href="https://www.kiu.edu.ge"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              www.kiu.edu.ge
            </a>
            <br />
            {t("erasmus.calls.upv.projectsWebsite")}{" "}
            <a
              href="https://erasmus-ka171.webs.upv.es/"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://erasmus-ka171.webs.upv.es/
            </a>
          </p>

          <p className={paragraph()}>
            <strong>{t("erasmus.calls.upv.applicationDeadline")}</strong> at
            the following email address:{" "}
            <a
              href={`mailto:${t("erasmus.calls.upv.email")}`}
              className={richTextLink()}
            >
              {t("erasmus.calls.upv.email")}
            </a>
          </p>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.upv.applicationContentTitle")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.upv.applicationContent").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.upv.criteriaTitle")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.upv.criteria").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>
        </div>

        {/* Call Universität Würzburg */}
        <div className={callBlock()}>
          <h3 className={callTitle()}>{t("erasmus.calls.wur.title")}</h3>

          <p className={paragraph()}>{t("erasmus.calls.wur.description")}</p>

          <p className={paragraph()}>
            <strong>To:</strong> {t("erasmus.calls.wur.to")}
          </p>

          <p className={paragraph()}>
            <strong>Where to:</strong> {t("erasmus.calls.wur.whereTo")}
          </p>

          <p className={paragraph()}>
            <strong>Period of the stay in the University of Würzburg:</strong>
            <br />
            {t("erasmus.calls.wur.period")}
          </p>

          <p className={paragraph()}>
            <strong>Study Cycle:</strong> {t("erasmus.calls.wur.studyCycle")}
          </p>

          <p className={paragraph()}>
            <strong>What:</strong> {t("erasmus.calls.wur.what")}
          </p>

          <p className={paragraph()}>
            <strong>Information:</strong> {t("erasmus.calls.wur.info")}
            <br />
            {t("erasmus.calls.wur.kiuWebsite")}{" "}
            <a
              href="https://www.kiu.edu.ge"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              www.kiu.edu.ge
            </a>
          </p>

          <p className={paragraph()}>
            <strong>Project's website:</strong>
            <br />
            <a
              href="https://www.uni-wuerzburg.de/"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://www.uni-wuerzburg.de/
            </a>
            <br />
            <a
              href="https://www.uni-wuerzburg.de/en/studium/studienfuehrer/all-the-jmu-wuerzburg/"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://www.uni-wuerzburg.de/en/studium/studienfuehrer/all-the-jmu-wuerzburg/
            </a>
            <br />
            <a
              href="https://www.paedagogik.uni-wuerzburg.de/meinewegzurerklärung/erasmus-with-partner-countries-ka-171/"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://www.paedagogik.uni-wuerzburg.de/meinewegzurerklärung/erasmus-with-partner-countries-ka-171/
            </a>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.wur.availableSubjects")}{" "}
            <a
              href="https://www.mathematik.uni-wuerzburg.de/en/services/course-catalogue/"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://www.mathematik.uni-wuerzburg.de/en/services/course-catalogue/
            </a>
          </p>

          <p className={paragraph()}>
            <strong>Eligible students:</strong>{" "}
            {t("erasmus.calls.wur.eligibleStudents")}
            <br />
            {t("erasmus.calls.wur.applicationLink")}{" "}
            <a
              href="https://forms.zohopublic.eu/kiuedu/form/12/?rr*pi=6j40"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://forms.zohopublic.eu/kiuedu/form/12/?rr*pi=6j40
            </a>
          </p>

          <p className={paragraph()}>
            <strong>{t("erasmus.calls.wur.applicationDeadline")}</strong>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.wur.contactInfo")}{" "}
            <a href="mailto:erasmusplus@kiu.edu.ge" className={richTextLink()}>
              erasmusplus@kiu.edu.ge
            </a>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.wur.applicationContentTitle")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.wur.applicationContent").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.wur.priorityTitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.wur.priorityDescription")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.wur.priorityList").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.wur.criteriaTitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.wur.criteriaDescription")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.wur.criteria").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph()}>{t("erasmus.calls.wur.finalSelection")}</p>
        </div>

        {/* Call Université Paris-Saclay */}
        <div className={callBlock()}>
          <h3 className={callTitle()}>{t("erasmus.calls.paris.title")}</h3>

          <p className={paragraph({ bold: true, centered: true })}>
            {t("erasmus.calls.paris.subtitle")}
          </p>

          <p className={paragraph()}>{t("erasmus.calls.paris.description")}</p>

          <p className={paragraph()}>
            <strong>To whom:</strong> {t("erasmus.calls.paris.toWhom")}
          </p>

          <p className={paragraph()}>
            <strong>Where to:</strong> {t("erasmus.calls.paris.whereTo")}
          </p>

          <p className={paragraph()}>
            <strong>What for:</strong> {t("erasmus.calls.paris.whatFor")} (
            {t("erasmus.calls.paris.period")}) in Graduate Schools.
          </p>

          <p className={paragraph()}>
            <strong>What for the selected IG students:</strong>{" "}
            {t("erasmus.calls.paris.whatForSelected")}
          </p>

          <p className={paragraph()}>
            <strong>Observation:</strong> {t("erasmus.calls.paris.observation")}
          </p>

          <p className={paragraph()}>
            <strong>Information:</strong> {t("erasmus.calls.paris.info")}{" "}
            <a
              href="https://www.kiuedu.ge"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              www.kiuedu.ge
            </a>
            <br />
            {t("erasmus.calls.paris.projectsWebsite")}{" "}
            <a
              href="https://www.universite-paris-saclay.fr/en"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              https://www.universite-paris-saclay.fr/en
            </a>
          </p>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.paris.eligibleStudents")}
          </p>

          <p className={paragraph()}>
            <strong>{t("erasmus.calls.paris.applicationDeadline")}</strong>{" "}
            <a href="#" className={richTextLink()}>
              {t("erasmus.common.applicationForm")}
            </a>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.paris.contactInfo")}{" "}
            <a href="mailto:erasmusplus@kiu.edu.ge" className={richTextLink()}>
              erasmusplus@kiu.edu.ge
            </a>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.paris.applicationContentTitle")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.paris.applicationContent").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.paris.priorityTitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.paris.priorityDescription")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.paris.priorityList").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.paris.criteriaTitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.paris.criteriaDescription")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.paris.criteria").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph()}>
            {t("erasmus.calls.paris.finalSelection")}
          </p>

          <div className={callImageWrapper()}>
            <img
              src={UniversiteParisSaclay}
              alt="Université Paris-Saclay"
              className={callImage()}
            />
          </div>
        </div>

        {/* Call Saarland University */}
        <div className={callBlock()}>
          <h3 className={callTitle()}>{t("erasmus.calls.saarland.title")}</h3>

          <p className={paragraph({ bold: true, centered: true })}>
            {t("erasmus.calls.saarland.subtitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.saarland.description")}
          </p>

          <p className={paragraph()}>
            <strong>To whom:</strong> {t("erasmus.calls.saarland.toWhom")}
          </p>

          <p className={paragraph()}>
            <strong>Where to:</strong> {t("erasmus.calls.saarland.whereTo")}
          </p>

          <p className={paragraph()}>
            <strong>Period of the stay in the Saarland University:</strong>{" "}
            {t("erasmus.calls.saarland.period")}
          </p>

          <p className={paragraph()}>
            <strong>What:</strong> {t("erasmus.calls.saarland.what")}
          </p>

          <p className={paragraph()}>
            <strong>Information:</strong> {t("erasmus.calls.saarland.info")}
            <br />
            {t("erasmus.calls.saarland.kiuWebsite")}{" "}
            <a
              href="https://www.kiu.edu.ge"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              www.kiu.edu.ge
            </a>
            <br />
            {t("erasmus.calls.saarland.projectsWebsite")}{" "}
            <a
              href="https://www.uni-saarland.de"
              target="_blank"
              rel="noopener noreferrer"
              className={richTextLink()}
            >
              www.uni-saarland.de
            </a>
          </p>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.saarland.eligibleStudents")}
          </p>

          <p className={paragraph()}>{t("erasmus.calls.saarland.toWhom")}</p>

          <p className={paragraph()}>
            <strong>{t("erasmus.calls.saarland.applicationDeadline")}</strong>{" "}
            <a href="#" className={richTextLink()}>
              {t("erasmus.common.applicationForm")}
            </a>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.saarland.contactInfo")}{" "}
            <a href="mailto:erasmusplus@kiu.edu.ge" className={richTextLink()}>
              erasmusplus@kiu.edu.ge
            </a>
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.saarland.applicationContentTitle")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation(
              "erasmus.calls.saarland.applicationContent"
            ).map((item: string, index: number) => (
              <li key={index} className={listItemText()}>
                {item}
              </li>
            ))}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.saarland.priorityTitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.saarland.priorityDescription")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.saarland.priorityList").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph({ bold: true })}>
            {t("erasmus.calls.saarland.criteriaTitle")}
          </p>

          <p className={paragraph()}>
            {t("erasmus.calls.saarland.criteriaDescription")}
          </p>

          <ol className={orderedList()}>
            {getArrayTranslation("erasmus.calls.saarland.criteria").map(
              (item: string, index: number) => (
                <li key={index} className={listItemText()}>
                  {item}
                </li>
              )
            )}
          </ol>

          <p className={paragraph()}>
            {t("erasmus.calls.saarland.finalSelection")}
          </p>

          <div className={callImageWrapper()}>
            <img
              src={SaarlandUniversity}
              alt="Saarland University, Germany"
              className={callImage()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErasmusSection;
