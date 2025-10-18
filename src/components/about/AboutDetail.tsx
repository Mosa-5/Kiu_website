import React, { useState } from "react";
import { AboutIcon } from "../../assets/icons/icons";
import { SideSectionsSheet } from "../ui/sections-sidebar";
import { aboutData } from "./data/AboutData";
import { useAboutTranslations } from "./hooks/useAboutTranslations";

const AboutDetail: React.FC = () => {
  const {
    t,
    getTranslatedArray,
    getTranslatedParagraphs,
    getTranslatedMembers,
    getTranslatedPrograms,
  } = useAboutTranslations();

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  const sections = getTranslatedArray("sections").map((section: any) => ({
    id: section.id,
    label: section.label,
  }));

  const introParagraphs = getTranslatedArray("intro.paragraphs");
  const presidentParagraphs = getTranslatedArray("president.paragraphs");
  const advisoryMembers = getTranslatedMembers("advisoryCouncil.members");
  const teamParagraphs = getTranslatedParagraphs("team.paragraphs");
  const introText = getTranslatedArray("academicPrograms.introText");
  const undergraduatePrograms = getTranslatedPrograms(
    "academicPrograms.undergraduatePrograms"
  );
  const masterPrograms = getTranslatedPrograms(
    "academicPrograms.masterPrograms"
  );
  const futureDisciplines = getTranslatedArray(
    "academicPrograms.futureDisciplines"
  );

  return (
    <>
      {/* Side Navigation */}
      <SideSectionsSheet
        sections={sections}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <div className="max-w-[1680px] mx-auto font-sans">
        {/* Intro Section */}
        <section id="intro" className="mb-12">
          <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h1 className="text-3xl font-medium text-mainDark">
              {t("intro.title")}
            </h1>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          {introParagraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg">
              {paragraph}
            </p>
          ))}

          <div className="mt-10 pl-6 border-l-2 border-slate-200">
            <p className="text-base font-semibold text-slate-900 mb-1">
              {t("intro.signature.name")}
            </p>
            <p className="text-sm text-slate-600 mb-0.5">
              {t("intro.signature.title")}
            </p>
            <p className="text-sm text-slate-500 mb-3">
              {t("intro.signature.date")}
            </p>
            <a
              href={aboutData.intro.signature.link.url}
              className="text-sm text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium"
            >
              {t("intro.signature.linkText")}
            </a>
          </div>
        </section>

        {/* Honorary President's Welcome Note Section */}
        <section id="president" className="mb-12 scroll-mt-8">
          <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {t("president.title")}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          <h3 className="text-xl font-medium text-main mb-4">
            {t("president.subtitle")}
          </h3>

          <p className="text-lg font-medium mb-6">
            {t("president.greeting")}
          </p>

          <div className="float-right ml-8 mb-6 w-[400px] h-[430px]">
            <img
              src={aboutData.president.image}
              alt="Prof. Dr. Wolfgang A. Herrmann"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {presidentParagraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg ">
              {paragraph}
            </p>
          ))}

          <div className="clear-both mt-10 pl-6 border-l-2 border-slate-200">
            <p className="text-base font-semibold text-slate-900 mb-3">
              {t("president.signatureName")}
            </p>
            <a
              href={aboutData.president.signature.link.url}
              className="text-sm text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium"
            >
              {t("president.signatureLinkText")}
            </a>
          </div>
        </section>

        {/* International Advisory Council Section */}
        <section id="advisory" className="mb-12 scroll-mt-8">
          <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {t("advisoryCouncil.title")}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          <div className="space-y-6">
            {advisoryMembers.map((member, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-main mb-1">
                  {member.name}
                </h3>
                {member.lines.map((line, j) => (
                  <p key={j} className="text-lg ">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-12 scroll-mt-8">
          <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {t("team.title")}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          {teamParagraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg ">
              {paragraph.parts.map((part, j) => {
                if (part.type === "link") {
                  return (
                    <a
                      key={j}
                      href={part.url}
                      className="text-link underline underline-offset-2 hover:text-linkDark font-medium"
                    >
                      {part.text}
                    </a>
                  );
                }
                return <span key={j}>{part.text}</span>;
              })}
            </p>
          ))}
        </section>

        {/* Academic Programs Section */}
        <section id="programs" className="mb-12 scroll-mt-8">
          <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {t("academicPrograms.title")}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          {introText.map((text, i) => (
            <p key={i} className="mb-6 text-lg ">
              {text}
            </p>
          ))}

          <ul className="list-none mb-6 text-lg space-y-2">
            {undergraduatePrograms.map((program, i) => (
              <li key={i} className="text-link hover:text-linkDark">
                •{" "}
                <a
                  href={program.url}
                  className="underline underline-offset-2 font-medium"
                >
                  {program.text}
                </a>
              </li>
            ))}
          </ul>

          <p className="mb-3 text-lg ">
            {t("academicPrograms.masterText")}
          </p>

          <ul className="list-none mb-6 text-lg space-y-2">
            {masterPrograms.map((program, i) => (
              <li key={i} className="text-link hover:text-linkDark">
                •{" "}
                <a
                  href={program.url}
                  className="underline underline-offset-2 font-medium"
                >
                  {program.text}
                </a>
              </li>
            ))}
          </ul>

          <p className="mb-3 text-lg ">
            {t("academicPrograms.futureText")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {futureDisciplines.map((discipline, i) => (
              <div
                key={i}
                className="px-4 py-3 bg-main rounded-md text-center font-medium border-2 text-lg border-main pointer-events-none text-white shadow-md"
              >
                {discipline}
              </div>
            ))}
          </div>

          <p className="mb-6 text-lg ">
            {t("academicPrograms.closingText")}
          </p>
        </section>

        {/* Academic Calendar Section */}
        <section id="calendar" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <a
              href={aboutData.academicPrograms.calendarLink.url}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-mainLight hover:bg-main text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
            >
              {t("academicPrograms.calendarLinkText")}
              <span className="text-xl">↓</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;