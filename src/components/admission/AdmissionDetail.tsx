import React from "react";
import { AboutIcon } from "../../assets/icons/icons";
import { AdmissionData } from "./data/AdmissionData";

const AdmissionDetail: React.FC = () => {
  return (
    <div className="max-w-[1680px] max-sm:px-4 mx-auto">
      {/* Intro Section */}
      <section id="intro" className="mb-12">
        <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
          <h1 className="text-2xl sm:text-3xl font-medium text-mainDark">
            {AdmissionData.intro.title}
          </h1>
          <span className="text-mainDark">{AboutIcon}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-main mb-6">
          {AdmissionData.intro.subtitle}
        </h2>

        {AdmissionData.intro.paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-6 text-sm sm:text-lg">
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

        <p className="mb-6 text-sm sm:text-lg">
          {AdmissionData.intro.programsIntro}
        </p>

        {/* Undergraduate Programs */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {AdmissionData.intro.undergraduatePrograms.map((program, i) => (
              <div
                key={i}
                className="px-4 py-3 bg-main rounded-md text-center font-medium text-white shadow-md min-h-[60px] flex items-center justify-center"
              >
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* Master Programs */}
        <p className="mb-4 max-sm:text-center text-lg">
          {AdmissionData.intro.masterText}
        </p>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {AdmissionData.intro.masterPrograms.map((program, i) => (
              <div
                key={i}
                className="px-4 py-3 bg-main rounded-md text-center font-medium text-white shadow-md min-h-[60px] flex items-center justify-center"
              >
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* Doctoral Programs */}
        <p className="mb-4 max-sm:text-center text-lg">
          {AdmissionData.intro.doctoralText}
        </p>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {AdmissionData.intro.doctoralPrograms.map((program, i) => (
              <div
                key={i}
                className="px-4 py-3 bg-main rounded-md text-center font-medium text-white shadow-md min-h-[60px] flex items-center justify-center"
              >
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* Closing paragraphs */}
        {AdmissionData.intro.closingParagraphs.map((paragraph, i) => (
          <p key={i} className="mb-6 text-sm sm:text-lg">
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

      {/* Campus Section */}
      <section id="campus" className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-main mb-6">
          {AdmissionData.campus.title}
        </h2>

        {AdmissionData.campus.paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-6 text-sm sm:text-lg">
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

      {/* How to Apply Section */}
      <section id="apply" className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-main mb-6">
          {AdmissionData.apply.title}
        </h2>

        <p className="mb-4 text-sm sm:text-lg">
          {AdmissionData.apply.introText}
        </p>

        <ul className="list-none space-y-2">
          {AdmissionData.apply.links.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                className="text-link underline underline-offset-2 hover:text-linkDark font-medium text-sm sm:text-lg"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Admissions Timeline Section */}
      <section id="timeline" className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-main mb-6">
          {AdmissionData.timeline.title}
        </h2>

        {AdmissionData.timeline.paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-4 text-sm sm:text-lg">
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
    </div>
  );
};

export default AdmissionDetail;
