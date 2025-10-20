import React from "react";
import { ArchieveIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";

interface Props {
  programData: ProgramData;
}

const NewsletterArchiveSection: React.FC<Props> = ({ programData }) => {
  const data = programData.newsletterArchive;

  return (
    <section id="newsletter-archive" className="mb-12">
      <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h1 className="text-2xl sm:text-3xl font-medium text-mainDark">
          {data.title}
        </h1>
        <span className="text-mainDark">{ArchieveIcon}</span>
      </div>

      <div className="list-disc space-y-3 space-x-3">
        {data.newsletters.map((newsletter, i) => (
          <a
            key={i}
            href={newsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block max-sm:w-full px-4 py-3 max-sm:text-center sm:py-2 border shadow-lg border-main hover:border-mainDark rounded-full text-main hover:bg-blue-50 transition-colors text-md hover:text-mainDark font-medium"
          >
            {newsletter.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsletterArchiveSection;
