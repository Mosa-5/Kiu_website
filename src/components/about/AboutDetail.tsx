import React, { useState } from "react";
import { AboutIcon } from "../../assets/icons/icons";
import { SideSectionsSheet } from "../ui/sections-sidebar";
import { aboutData } from "./data/AboutData";
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

const AboutDetail: React.FC = () => {
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

  const sections = [
    { id: "intro", label: "Intro" },
    { id: "president", label: "Honorary President's Welcome Note" },
    { id: "advisory", label: "International Advisory Council" },
    { id: "team", label: "Team" },
    { id: "programs", label: "Academic Programs" },
    { id: "calendar", label: "Academic Calendar" },
  ];

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
      <div className={container()}>
        {/* Intro Section */}
        <section id="intro" className={section({ isFirst: true })}>
          <div className={sectionHeader()}>
            <h1 className={sectionTitle()}>{aboutData.intro.title}</h1>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          {aboutData.intro.paragraphs.map((para, i) => (
            <p key={i} className={paragraph()}>
              {para}
            </p>
          ))}

          <div className={signatureContainer()}>
            <p className={signatureName()}>{aboutData.intro.signature.name}</p>
            <p className={signatureTitle()}>
              {aboutData.intro.signature.title}
            </p>
            <p className={signatureDate()}>{aboutData.intro.signature.date}</p>
            <a
              href={aboutData.intro.signature.link.url}
              className={signatureLink()}
            >
              {aboutData.intro.signature.link.text}
            </a>
          </div>
        </section>

        {/* Honorary President's Welcome Note Section */}
        <section id="president" className={section()}>
          <div className={sectionHeader()}>
            <h2 className={sectionTitle()}>{aboutData.president.title}</h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          <h3 className={sectionTitle({ size: "medium" })}>
            {aboutData.president.subtitle}
          </h3>

          <p className={paragraph({ size: "large" })}>
            {aboutData.president.greeting}
          </p>

          <div className={presidentImage()}>
            <img
              src={aboutData.president.image}
              alt="Prof. Dr. Wolfgang A. Herrmann"
              className={presidentImageTag()}
            />
          </div>

          {aboutData.president.paragraphs.map((para, i) => (
            <p key={i} className={paragraph()}>
              {para}
            </p>
          ))}

          <div className={`${clearFloat()} ${signatureContainer()}`}>
            <p className={signatureName()}>
              {aboutData.president.signature.name}
            </p>
            <a
              href={aboutData.president.signature.link.url}
              className={signatureLink()}
            >
              {aboutData.president.signature.link.text}
            </a>
          </div>
        </section>

        {/* International Advisory Council Section */}
        <section id="advisory" className={section()}>
          <div className={sectionHeader()}>
            <h2 className={sectionTitle()}>
              {aboutData.advisoryCouncil.title}
            </h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          <div className={advisoryMemberContainer()}>
            {aboutData.advisoryCouncil.members.map((member, i) => (
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
            <h2 className={sectionTitle()}>{aboutData.team.title}</h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          {aboutData.team.paragraphs.map((para, i) => (
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
            <h2 className={sectionTitle()}>
              {aboutData.academicPrograms.title}
            </h2>
            <span className={icon()}>{AboutIcon}</span>
          </div>

          {aboutData.academicPrograms.introText.map((text, i) => (
            <p key={i} className={programIntroText()}>
              {text}
            </p>
          ))}

          <ul className={programList()}>
            {aboutData.academicPrograms.undergraduatePrograms.map((prog, i) => (
              <li key={i} className={programListItem()}>
                •{" "}
                <a href={prog.url} className={programLink()}>
                  {prog.text}
                </a>
              </li>
            ))}
          </ul>

          <p className={programMasterText()}>
            {aboutData.academicPrograms.masterText}
          </p>

          <ul className={programList()}>
            {aboutData.academicPrograms.masterPrograms.map((prog, i) => (
              <li key={i} className={programListItem()}>
                •{" "}
                <a href={prog.url} className={programLink()}>
                  {prog.text}
                </a>
              </li>
            ))}
          </ul>

          <p className={programFutureText()}>
            {aboutData.academicPrograms.futureText}
          </p>

          <div className={futureDisciplinesGrid()}>
            {aboutData.academicPrograms.futureDisciplines.map(
              (discipline, i) => (
                <div key={i} className={disciplineBadge()}>
                  {discipline}
                </div>
              )
            )}
          </div>

          <p className={closingText()}>
            {aboutData.academicPrograms.closingText}
          </p>
        </section>

        {/* Academic Calendar Section */}
        <section id="calendar" className={section()}>
          <div className={calendarContainer()}>
            <a
              href={aboutData.academicPrograms.calendarLink.url}
              download
              className={calendarButton()}
            >
              {aboutData.academicPrograms.calendarLink.text}
              <span className={calendarButtonArrow()}>↓</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;
