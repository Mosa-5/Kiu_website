import React, { useState } from "react";
import { aboutData } from "./data/AboutData";
import { AboutIcon } from "../projects/frontiers/data/icons";
import { SideSectionsSheet } from "./sections-sidebar";

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
      <div className="max-w-[1680px] mx-auto font-sans">
        {/* Intro Section */}
        <section id="intro" className="mb-12">
          <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h1 className="text-3xl font-medium text-mainDark">
              {aboutData.intro.title}
            </h1>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          {aboutData.intro.paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg">
              {paragraph}
            </p>
          ))}

          <div className="mt-10 pl-6 border-l-2 border-slate-200">
            <p className="text-base font-semibold text-slate-900 mb-1">
              {aboutData.intro.signature.name}
            </p>
            <p className="text-sm text-slate-600 mb-0.5">
              {aboutData.intro.signature.title}
            </p>
            <p className="text-sm text-slate-500 mb-3">
              {aboutData.intro.signature.date}
            </p>
            <a
              href={aboutData.intro.signature.link.url}
              className="text-sm text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium"
            >
              {aboutData.intro.signature.link.text}
            </a>
          </div>
        </section>

        {/* Honorary President's Welcome Note Section */}
        <section id="president" className="mb-12 scroll-mt-8">
          <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {aboutData.president.title}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          <h3 className="text-xl font-medium text-main mb-4">
            {aboutData.president.subtitle}
          </h3>

          <p className="text-lg font-medium mb-6">
            {aboutData.president.greeting}
          </p>

          <div className="float-right ml-8 mb-6 w-[400px] h-[430px]">
            <img
              src={aboutData.president.image}
              alt="Prof. Dr. Wolfgang A. Herrmann"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {aboutData.president.paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-lg ">
              {paragraph}
            </p>
          ))}

          <div className="clear-both mt-10 pl-6 border-l-2 border-slate-200">
            <p className="text-base font-semibold text-slate-900 mb-3">
              {aboutData.president.signature.name}
            </p>
            <a
              href={aboutData.president.signature.link.url}
              className="text-sm text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium"
            >
              {aboutData.president.signature.link.text}
            </a>
          </div>
        </section>

        {/* International Advisory Council Section */}
        <section id="advisory" className="mb-12 scroll-mt-8">
          <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {aboutData.advisoryCouncil.title}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          <div className="space-y-6">
            {aboutData.advisoryCouncil.members.map((member, i) => (
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
          <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {aboutData.team.title}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          {aboutData.team.paragraphs.map((paragraph, i) => (
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
                // if (part.type === "blue") {
                //   return (
                //     <span
                //       key={j}
                //       className="text-link underline underline-offset-2 font-medium"
                //     >
                //       {part.text}
                //     </span>
                //   );
                // }
                return <span key={j}>{part.text}</span>;
              })}
            </p>
          ))}
        </section>

        {/* Academic Programs Section */}
        <section id="programs" className="mb-12 scroll-mt-8">
          <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h2 className="text-3xl font-medium text-mainDark">
              {aboutData.academicPrograms.title}
            </h2>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          {aboutData.academicPrograms.introText.map((text, i) => (
            <p key={i} className="mb-6 text-lg ">
              {text}
            </p>
          ))}

          <ul className="list-none mb-6 text-lg space-y-2">
            {aboutData.academicPrograms.undergraduatePrograms.map(
              (program, i) => (
                <li key={i} className="text-link hover:text-linkDark">
                  •{" "}
                  <a
                    href={program.url}
                    className="underline underline-offset-2 font-medium"
                  >
                    {program.text}
                  </a>
                </li>
              )
            )}
          </ul>

          <p className="mb-3 text-lg ">
            {aboutData.academicPrograms.masterText}
          </p>

          <ul className="list-none mb-6 text-lg space-y-2">
            {aboutData.academicPrograms.masterPrograms.map((program, i) => (
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
            {aboutData.academicPrograms.futureText}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {aboutData.academicPrograms.futureDisciplines.map(
              (discipline, i) => (
                <div
                  key={i}
                  className="px-4 py-3 bg-main rounded-sm text-center font-medium border-2 text-lg border-main pointer-events-none text-white shadow-md"
                >
                  {discipline}
                </div>
              )
            )}
          </div>

          <p className="mb-6 text-lg ">
            {aboutData.academicPrograms.closingText}
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
              {aboutData.academicPrograms.calendarLink.text}
              <span className="text-xl">↓</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;
