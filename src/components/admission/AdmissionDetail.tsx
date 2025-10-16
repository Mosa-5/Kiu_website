import React from "react";
import { AboutIcon } from "@/assets/icons/icons";
import { useAdmissionTranslations } from "./admissionHelper/translations";
import { RenderParagraphs, ProgramGrid } from "./admissionHelper/components";


const AdmissionDetail: React.FC = () => {
  const {
    t,
    getTranslatedArray,
    getTranslatedParagraphs,
    getTranslatedLinks,
  } = useAdmissionTranslations();

  return (
    <div className="max-w-[1680px] mx-auto font-sans">
      {/* Header */}
      <section className="mb-12">
        <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
          <h1 className="text-3xl font-medium text-mainDark">
            {t("intro.title")}
          </h1>
          <span className="text-mainDark">{AboutIcon}</span>
        </div>
        <h2 className="text-xl font-semibold text-main mb-6">
          {t("intro.subtitle")}
        </h2>
      </section>

      {/* Intro */}
      <section className="mb-12">
        <RenderParagraphs paragraphs={getTranslatedParagraphs("intro.paragraphs")} />
        <p className="mb-6 text-lg">{t("intro.programsIntro")}</p>
      </section>

      {/* Programs */}
      <section className="mb-12">
        <ProgramGrid programs={getTranslatedArray("intro.undergraduatePrograms")} />
      </section>

      <section className="mb-12">
        <ProgramGrid
          programs={getTranslatedArray("intro.masterPrograms")}
          title={t("intro.masterText")}
        />
      </section>

      <section className="mb-12">
        <ProgramGrid
          programs={getTranslatedArray("intro.doctoralPrograms")}
          title={t("intro.doctoralText")}
        />
      </section>

      {/* Closing */}
      <section className="mb-12">
        <RenderParagraphs paragraphs={getTranslatedParagraphs("intro.closingParagraphs")} />
      </section>

      {/* Campus */}
      <section id="campus" className="mb-12">
        <h2 className="text-2xl font-semibold text-main mb-6">
          {t("campus.title")}
        </h2>
        <RenderParagraphs paragraphs={getTranslatedParagraphs("campus.paragraphs")} />
      </section>

      {/* Apply */}
      <section id="apply" className="mb-12">
        <h2 className="text-2xl font-semibold text-main mb-6">
          {t("apply.title")}
        </h2>
        <p className="mb-4 text-lg">{t("apply.introText")}</p>
        <ul className="list-none space-y-2">
          {getTranslatedLinks("apply.links").map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                className="text-link underline underline-offset-2 hover:text-linkDark font-medium text-lg"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section id="timeline" className="mb-12">
        <h2 className="text-2xl font-semibold text-main mb-6">
          {t("timeline.title")}
        </h2>
        <RenderParagraphs paragraphs={getTranslatedParagraphs("timeline.paragraphs")} />
      </section>
    </div>
  );
};

export default AdmissionDetail;
