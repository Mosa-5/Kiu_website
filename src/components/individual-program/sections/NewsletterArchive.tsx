import React from "react";
import { ArchieveIcon } from "../../../assets/icons/icons";
import type { ProgramData } from "../data/programs/types";
import {
  section,
  headingContainer,
  title,
  icon,
  newsletterList,
  newsletterLink,
} from "./NewsletterArchive.styles";

interface Props {
  programData: ProgramData;
}

const NewsletterArchiveSection: React.FC<Props> = ({ programData }) => {
  const data = programData.newsletterArchive;

  return (
    <section id="newsletter-archive" className={section()}>
      <div className={headingContainer()}>
        <h1 className={title()}>{data.title}</h1>
        <span className={icon()}>{ArchieveIcon}</span>
      </div>

      <div className={newsletterList()}>
        {data.newsletters.map((newsletter, i) => (
          <a
            key={i}
            href={newsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className={newsletterLink()}
          >
            {newsletter.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsletterArchiveSection;
