import React from "react";
import { AboutIcon } from "../../assets/icons/icons";
import { AdmissionData } from "./data/AdmissionData";
import {
  container,
  section,
  introHeader,
  introTitle,
  icon,
  sectionTitle,
  sectionSubtitle,
  paragraph,
  paragraphSmall,
  richTextLink,
  programsIntro,
  programGrid,
  programGridContainer,
  programBadge,
  programLabel,
  applyList,
  applyListItem,
  applyLink,
  timelineParagraph,
} from "./AdmissionDetail.styles";

const AdmissionDetail: React.FC = () => {
  return (
    <div className={container()}>
      {/* Intro Section */}
      <section id="intro" className={section()}>
        <div className={introHeader()}>
          <h1 className={introTitle()}>{AdmissionData.intro.title}</h1>
          <span className={icon()}>{AboutIcon}</span>
        </div>

        <h2 className={sectionSubtitle()}>{AdmissionData.intro.subtitle}</h2>

        {AdmissionData.intro.paragraphs.map((para, i) => (
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

        <p className={programsIntro()}>{AdmissionData.intro.programsIntro}</p>

        {/* Undergraduate Programs */}
        <div className={programGridContainer()}>
          <div className={programGrid()}>
            {AdmissionData.intro.undergraduatePrograms.map((program, i) => (
              <div key={i} className={programBadge()}>
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* Master Programs */}
        <p className={programLabel()}>{AdmissionData.intro.masterText}</p>

        <div className={programGridContainer()}>
          <div className={programGrid()}>
            {AdmissionData.intro.masterPrograms.map((program, i) => (
              <div key={i} className={programBadge()}>
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* Doctoral Programs */}
        <p className={programLabel()}>{AdmissionData.intro.doctoralText}</p>

        <div className={programGridContainer()}>
          <div className={programGrid()}>
            {AdmissionData.intro.doctoralPrograms.map((program, i) => (
              <div key={i} className={programBadge()}>
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* Closing paragraphs */}
        {AdmissionData.intro.closingParagraphs.map((para, i) => (
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

      {/* Campus Section */}
      <section id="campus" className={section()}>
        <h2 className={sectionTitle()}>{AdmissionData.campus.title}</h2>

        {AdmissionData.campus.paragraphs.map((para, i) => (
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

      {/* How to Apply Section */}
      <section id="apply" className={section()}>
        <h2 className={sectionTitle()}>{AdmissionData.apply.title}</h2>

        <p className={paragraphSmall()}>{AdmissionData.apply.introText}</p>

        <ul className={applyList()}>
          {AdmissionData.apply.links.map((link, i) => (
            <li key={i} className={applyListItem()}>
              <a href={link.url} className={applyLink()}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Admissions Timeline Section */}
      <section id="timeline" className={section()}>
        <h2 className={sectionTitle()}>{AdmissionData.timeline.title}</h2>

        {AdmissionData.timeline.paragraphs.map((para, i) => (
          <p key={i} className={timelineParagraph()}>
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
    </div>
  );
};

export default AdmissionDetail;
