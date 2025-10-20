import React from "react";
import { useAdmissionTranslations } from "./admissionHelper/translations";
import { RenderParagraphs, ProgramGrid } from "./admissionHelper/components";
import { AboutIcon } from "../../assets/icons/icons";
import {
  container,
  headerSection,
  headerBox,
  headerTitle,
  headerIcon,
  headerSubtitle,
  introSection,
  programsSection,
  closingSection,
  campusSection,
  campusTitle,
  applySection,
  applyTitle,
  applyIntroText,
  applyList,
  applyListItem,
  applyLink,
  timelineSection,
  timelineTitle,
  programsIntroText,
} from "./AdmissionDetail.styles";

const AdmissionDetail: React.FC = () => {
  const { t, getTranslatedArray, getTranslatedParagraphs, getTranslatedLinks } =
    useAdmissionTranslations();

  return (
    <div className={container()}>
      {/* Header */}
      <section className={headerSection()}>
        <div className={headerBox()}>
          <h1 className={headerTitle()}>{t("intro.title")}</h1>
          <span className={headerIcon()}>{AboutIcon}</span>
        </div>
        <h2 className={headerSubtitle()}>{t("intro.subtitle")}</h2>
      </section>

      {/* Intro */}
      <section className={introSection()}>
        <RenderParagraphs
          paragraphs={getTranslatedParagraphs("intro.paragraphs")}
        />
        <p className={programsIntroText()}>{t("intro.programsIntro")}</p>
      </section>

      {/* Programs */}
      <section className={programsSection()}>
        <ProgramGrid
          programs={getTranslatedArray("intro.undergraduatePrograms")}
        />
      </section>

      <section className={programsSection()}>
        <ProgramGrid
          programs={getTranslatedArray("intro.masterPrograms")}
          title={t("intro.masterText")}
        />
      </section>

      <section className={programsSection()}>
        <ProgramGrid
          programs={getTranslatedArray("intro.doctoralPrograms")}
          title={t("intro.doctoralText")}
        />
      </section>

      {/* Closing */}
      <section className={closingSection()}>
        <RenderParagraphs
          paragraphs={getTranslatedParagraphs("intro.closingParagraphs")}
        />
      </section>

      {/* Campus */}
      <section id="campus" className={campusSection()}>
        <h2 className={campusTitle()}>{t("campus.title")}</h2>
        <RenderParagraphs
          paragraphs={getTranslatedParagraphs("campus.paragraphs")}
        />
      </section>

      {/* Apply */}
      <section id="apply" className={applySection()}>
        <h2 className={applyTitle()}>{t("apply.title")}</h2>
        <p className={applyIntroText()}>{t("apply.introText")}</p>
        <ul className={applyList()}>
          {getTranslatedLinks("apply.links").map((link, i) => (
            <li key={i} className={applyListItem()}>
              <a href={link.url} className={applyLink()}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section id="timeline" className={timelineSection()}>
        <h2 className={timelineTitle()}>{t("timeline.title")}</h2>
        <RenderParagraphs
          paragraphs={getTranslatedParagraphs("timeline.paragraphs")}
        />
      </section>
    </div>
  );
};

export default AdmissionDetail;
