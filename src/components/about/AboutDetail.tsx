import React from "react";
import {
  AboutIcon,
  SpeakerIcon,
  PersonnelIcon,
  SupervisorIcon,
  ProgramIcon,
} from "../../assets/icons/icons";
import { useAboutTranslations } from "../../hooks/useAboutTranslations";
import {
  container,
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  paragraph,
  pullQuote,
  quoteBlock,
  signatureName,
  signatureTitle,
  signatureLink,
  signatureByline,
  signatureAvatar,
  signatureAvatarImage,
  signatureMeta,
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
  futureDisciplinesText,
  futureDisciplinesDot,
  closingText,
  calendarContainer,
  calendarButton,
  calendarButtonArrow,
} from "./AboutDetail.styles";

import { Wolfgang } from "@/assets";

const getInitials = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const AboutDetail: React.FC = () => {

  const {
    t,
    getTranslatedArray,
    getTranslatedParagraphs,
    getTranslatedMembers,
    getTranslatedPrograms,
  } = useAboutTranslations();

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
    <div className={container()}>
      {/* Intro Section */}
      <section id="intro" className={section({ isFirst: true })}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{AboutIcon}</span>
          <h1 className={sectionTitle()}>{t("intro.title")}</h1>
        </div>

        <div className={sectionContent()}>
          <div className={quoteBlock()}>
            {introParagraphs.map((para, i) => (
              <p key={i} className={paragraph({ quote: true })}>
                {i === 0 && "“"}
                {para}
                {i === introParagraphs.length - 1 && "”"}
              </p>
            ))}
          </div>

          <div className={signatureByline()}>
            <span className={signatureAvatar()}>
              {getInitials(t("intro.signature.name"))}
            </span>
            <div>
              <p className={signatureName()}>{t("intro.signature.name")}</p>
              <p className={signatureTitle()}>{t("intro.signature.title")}</p>
              <p className={signatureMeta()}>
                <span>{t("intro.signature.date")}</span>
                <span aria-hidden="true">·</span>
                <a href="#" className={signatureLink()}>
                  {t("intro.signature.linkText")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honorary President's Welcome Note Section */}
      <section id="president" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{SpeakerIcon}</span>
          <h2 className={sectionTitle()}>{t("president.title")}</h2>
        </div>

        <div className={sectionContent()}>
          <p className={pullQuote()}>“{t("president.greeting")}</p>

          <div className={quoteBlock()}>
            {presidentParagraphs.map((para, i) => (
              <p key={i} className={paragraph({ quote: true })}>
                {para}
                {i === presidentParagraphs.length - 1 && "”"}
              </p>
            ))}
          </div>

          <div className={signatureByline()}>
            <img
              src={Wolfgang}
              alt="Prof. Dr. Wolfgang A. Herrmann"
              className={signatureAvatarImage()}
            />
            <div>
              <p className={signatureName()}>
                {t("president.signatureName")}
              </p>
              <a href="#" className={signatureLink()}>
                {t("president.signatureLinkText")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* International Advisory Council Section */}
      <section id="advisory" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{PersonnelIcon}</span>
          <h2 className={sectionTitle()}>{t("advisoryCouncil.title")}</h2>
        </div>

        <div className={sectionContent()}>
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
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{SupervisorIcon}</span>
          <h2 className={sectionTitle()}>{t("team.title")}</h2>
        </div>

        <div className={sectionContent()}>
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
        </div>
      </section>

      {/* Academic Programs & Calendar Section */}
      <section id="programs" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{ProgramIcon}</span>
          <h2 className={sectionTitle()}>{t("academicPrograms.title")}</h2>
        </div>

        <div className={sectionContent()}>
          {introText.map((text, i) => (
            <p key={i} className={programIntroText()}>
              {text}
            </p>
          ))}

          <ul className={programList()}>
            {undergraduatePrograms.map((prog, i) => (
              <li key={i} className={programListItem()}>
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
                <a href={prog.url} className={programLink()}>
                  {prog.text}
                </a>
              </li>
            ))}
          </ul>

          <p className={programFutureText()}>
            {t("academicPrograms.futureText")}
          </p>

          <p className={futureDisciplinesText()}>
            {futureDisciplines.map((discipline, i) => (
              <span key={i}>
                {discipline}
                {i < futureDisciplines.length - 1 && (
                  <span className={futureDisciplinesDot()}> · </span>
                )}
              </span>
            ))}
          </p>

          <p className={closingText()}>{t("academicPrograms.closingText")}</p>

          <div className={calendarContainer()}>
            <a href="#" download className={calendarButton()}>
              {t("academicPrograms.calendarLinkText")}
              <span className={calendarButtonArrow()}>↓</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;
