import React, { useState } from "react";
import { AboutIcon } from "../../assets/icons/icons";
import { SideSectionsSheet } from "../ui/sections-sidebar";
import { useAboutTranslations } from "../../hooks/useAboutTranslations";
import {
  container,
  section,
  sectionHeader,
  sectionTitle,
  icon,
  paragraph,
  signatureContainer,
  signatureName,
  signatureTitle,
  signatureDate,
  signatureLink,
  presidentImage,
  presidentImageTag,
  clearFloat,
  advisoryMemberContainer,
  advisoryMember,
  advisoryMemberName,
  advisoryMemberText,
  richTextLink,
  programList,
  programListItem,
  programLink,
  programIntroText,
  programMasterText,
  programFutureText,
  futureDisciplinesGrid,
  disciplineBadge,
  closingText,
  calendarContainer,
  calendarButton,
  calendarButtonArrow,
} from "./AboutDetail.styles";
import { useParams } from "react-router-dom";
import { Wolfgang } from "@/assets";

const AboutDetail: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();
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
        language={lang || "en"}
      />

      {/* Main Content */}
      <div className={container()}>
        {/* Intro Section */}
        <section id="intro" className={section({ isFirst: true })}>
          <div className={sectionHeader()}>
            <h1 className={sectionTitle()}>{t("intro.title")}</h1>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          {introParagraphs.map((para, i) => (
            <p key={i} className={paragraph()}>
              {para}
            </p>
          ))}

          <div className={signatureContainer()}>
            <p className={signatureName()}>{t("intro.signature.name")}</p>
            <p className={signatureTitle()}>{t("intro.signature.title")}</p>
            <p className={signatureDate()}>{t("intro.signature.date")}</p>
            <a
              href="#"
              className={signatureLink()}
            >
              {t("intro.signature.linkText")}
            </a>
          </div>
        </section>

        {/* Honorary President's Welcome Note Section */}
        <section id="president" className={section()}>
          <div className={sectionHeader()}>
            <h2 className={sectionTitle()}>{t("president.title")}</h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          <h3 className={sectionTitle({ size: "medium" })}>
            {t("president.subtitle")}
          </h3>

          <p className={paragraph({ size: "large" })}>
            {t("president.greeting")}
          </p>

          <div className={presidentImage()}>
            <img
              src={Wolfgang}
              alt="Prof. Dr. Wolfgang A. Herrmann"
              className={presidentImageTag()}
            />
          </div>

          {presidentParagraphs.map((para, i) => (
            <p key={i} className={paragraph()}>
              {para}
            </p>
          ))}

          <div className={`${clearFloat()} ${signatureContainer()}`}>
            <p className={signatureName()}>{t("president.signatureName")}</p>
            <a
              href="#"
              className={signatureLink()}
            >
              {t("president.signatureLinkText")}
            </a>
          </div>
        </section>

        {/* International Advisory Council Section */}
        <section id="advisory" className={section()}>
          <div className={sectionHeader()}>
            <h2 className={sectionTitle()}>{t("advisoryCouncil.title")}</h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          <div className={advisoryMemberContainer()}>
            {advisoryMembers.map((member, i) => (
              <div key={i} className={advisoryMember()}>
                <h3 className={advisoryMemberName()}>{member.name}</h3>
                {member.lines.map((line, j) => (
                  <p key={j} className={advisoryMemberText()}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className={section()}>
          <div className={sectionHeader()}>
            <h2 className={sectionTitle()}>{t("team.title")}</h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          {teamParagraphs.map((para, i) => (
            <p key={i} className={paragraph()}>
              {para.parts.map((part, j) => {
                if (part.type === "link") {
                  return (
                    <a key={j} href={part.url} className={richTextLink()}>
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
        <section id="programs" className={section()}>
          <div className={sectionHeader()}>
            <h2 className={sectionTitle()}>{t("academicPrograms.title")}</h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          {introText.map((text, i) => (
            <p key={i} className={programIntroText()}>
              {text}
            </p>
          ))}

          <ul className={programList()}>
            {undergraduatePrograms.map((prog, i) => (
              <li key={i} className={programListItem()}>
                •{" "}
                <a href={prog.url} className={programLink()}>
                  {prog.text}
                </a>
              </li>
            ))}
          </ul>

          <p className={programMasterText()}>
            {t("academicPrograms.masterText")}
          </p>

          <ul className={programList()}>
            {masterPrograms.map((prog, i) => (
              <li key={i} className={programListItem()}>
                •{" "}
                <a href={prog.url} className={programLink()}>
                  {prog.text}
                </a>
              </li>
            ))}
          </ul>

          <p className={programFutureText()}>
            {t("academicPrograms.futureText")}
          </p>

          <div className={futureDisciplinesGrid()}>
            {futureDisciplines.map((discipline, i) => (
              <div key={i} className={disciplineBadge()}>
                {discipline}
              </div>
            ))}
          </div>

          <p className={closingText()}>{t("academicPrograms.closingText")}</p>
        </section>

        {/* Academic Calendar Section */}
        <section id="calendar" className={section()}>
          <div className={calendarContainer()}>
            <a
              href="/path/to/academic-calendar.pdf"
              download
              className={calendarButton()}
            >
              {t("academicPrograms.calendarLinkText")}
              <span className={calendarButtonArrow()}>↓</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;
