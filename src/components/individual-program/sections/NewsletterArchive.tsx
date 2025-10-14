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
      <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
        <h1 className="text-3xl font-medium text-[#1B3D6E]">
          {data.title}
        </h1>
        <span className="text-[#1B3D6E]">{ArchieveIcon}</span>
      </div>

      <div className="list-disc  space-y-3 text-lg">
        {data.newsletters.map((newsletter, i) => (
              <a
                key={i}
                href={newsletter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border shadow-lg border-blue-200 rounded-full text-main hover:bg-blue-50 hover:border-blue-400 transition-colors text-sm font-medium"
              >
                {newsletter.text}
              </a>
            ))}
          </div>
    </section>
  );
};

export default NewsletterArchiveSection;