import React from "react";
import { useAdmissionTranslations } from "./admissionHelper/translations";
import { RenderParagraphs, ProgramGrid } from "./admissionHelper/components";
import {
  AboutIcon,
  ProgramIcon,
  SpeakerIcon,
  SchoolIcon,
  CuriculumIcon,
  MinorIcon,
} from "../../assets/icons/icons";
import {
  container,
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  sectionSubtitle,
  paragraph,
  applyList,
  applyListItem,
  richTextLink,
} from "./AdmissionDetail.styles";

interface NavSection {
  id: string;
  label: string;
}

const AdmissionDetail: React.FC = () => {
  const { t, getTranslatedArray, getTranslatedParagraphs, getTranslatedLinks } =
    useAdmissionTranslations();

  const navSections = t("sections", { returnObjects: true }) as NavSection[];
  const getSectionLabel = (id: string) =>
    navSections.find((s) => s.id === id)?.label ?? "";

  return (
    <div className={container()}>
      {/* Intro Section */}
      <section id="intro" className={section({ isFirst: true })}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{AboutIcon}</span>
          <h1 className={sectionTitle()}>{t("intro.title")}</h1>
        </div>

        <div className={sectionContent()}>
          <h2 className={sectionSubtitle()}>{t("intro.subtitle")}</h2>
          <RenderParagraphs
            paragraphs={getTranslatedParagraphs("intro.paragraphs")}
          />
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{ProgramIcon}</span>
          <h2 className={sectionTitle()}>{getSectionLabel("programs")}</h2>
        </div>

        <div className={sectionContent()}>
          <ProgramGrid
            programs={getTranslatedArray("intro.undergraduatePrograms")}
          />
          <ProgramGrid
            programs={getTranslatedArray("intro.masterPrograms")}
            title={t("intro.masterText")}
          />
          <ProgramGrid
            programs={getTranslatedArray("intro.doctoralPrograms")}
            title={t("intro.doctoralText")}
          />
        </div>
      </section>

      {/* About KIU Section */}
      <section id="about-kiu" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{SpeakerIcon}</span>
          <h2 className={sectionTitle()}>{getSectionLabel("about-kiu")}</h2>
        </div>

        <div className={sectionContent()}>
          <RenderParagraphs
            paragraphs={getTranslatedParagraphs("intro.closingParagraphs")}
          />
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{SchoolIcon}</span>
          <h2 className={sectionTitle()}>{t("campus.title")}</h2>
        </div>

        <div className={sectionContent()}>
          <RenderParagraphs
            paragraphs={getTranslatedParagraphs("campus.paragraphs")}
          />
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{CuriculumIcon}</span>
          <h2 className={sectionTitle()}>{t("apply.title")}</h2>
        </div>

        <div className={sectionContent()}>
          <p className={paragraph()}>{t("apply.introText")}</p>
          <ul className={applyList()}>
            {getTranslatedLinks("apply.links").map((link, i) => (
              <li key={i} className={applyListItem()}>
                <a href={link.url} className={richTextLink()}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{MinorIcon}</span>
          <h2 className={sectionTitle()}>{t("timeline.title")}</h2>
        </div>

        <div className={sectionContent()}>
          <RenderParagraphs
            paragraphs={getTranslatedParagraphs("timeline.paragraphs")}
          />
        </div>
      </section>
    </div>
  );
};

export default AdmissionDetail;
