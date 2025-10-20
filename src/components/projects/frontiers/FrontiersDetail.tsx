import React from "react";
import { conferenceData } from "./data/frontiersData";
import { AboutIcon, SpeakerIcon } from "../../../assets/icons/icons";
import { FrontiersConf } from "@/assets";
import {
  container,
  bannerImage,
  sectionHeader,
  sectionTitle,
  sectionIcon,
  sectionIconMain,
  paragraph,
  richTextLink,
  richTextHighlight,
  subsectionTitle,
  subsectionTitleSmall,
  subsectionTitleSmaller,
  listDisc,
  listDiscLarge,
  listItem,
  accommodationText,
  registrationContent,
  registrationHighlight,
  registrationLink,
  registrationLinksContainer,
  registrationLinkItem,
  registrationLinkItemHover,
  registrationMainLink,
  feesTitle,
  feesList,
  feesNote,
  committeeTitle,
  speakerLink,
  speakersList,
  speakersDescription,
} from "./FrontiersDetail.styles";

const FrontiersDetail: React.FC = () => {
  return (
    <div className={container()}>
      <img src={FrontiersConf} className={bannerImage()} />

      {/* About */}
      <div className={sectionHeader()}>
        <h1 className={sectionTitle()}>{conferenceData.about.title}</h1>
        <span className={sectionIcon()}>{AboutIcon}</span>
      </div>
      <p className={paragraph()}>
        {conferenceData.about.parts.map((part, i) => {
          if (part.type === "link") {
            return (
              <a key={i} href={part.url} className={richTextLink()}>
                {part.text}
              </a>
            );
          }
          if (part.type === "blue") {
            return (
              <span key={i} className={richTextHighlight()}>
                {part.text}
              </span>
            );
          }
          return <span key={i}>{part.text}</span>;
        })}
      </p>

      {/* Program */}
      <h2 className={subsectionTitle()}>{conferenceData.program.title}</h2>
      <ul className={listDisc()}>
        {conferenceData.program.items.map((item, i) => (
          <li key={i} className={listItem()}>
            {item}
          </li>
        ))}
      </ul>

      {/* Accommodation */}
      <h2 className={subsectionTitleSmall()}>
        {conferenceData.accommodation.title}
      </h2>
      <p className={accommodationText()}>{conferenceData.accommodation.text}</p>

      {/* Registration */}
      <h2 className={subsectionTitleSmaller()}>
        {conferenceData.registration.title}
      </h2>
      <div className={registrationContent()}>
        {conferenceData.registration.parts.map((part, i) => {
          if (part.type === "highlight") {
            return (
              <span key={i} className={registrationHighlight()}>
                {part.text}
              </span>
            );
          }
          if (part.type === "link") {
            return (
              <a key={i} href={part.url} className={registrationLink()}>
                {part.text}
              </a>
            );
          }
          return <span key={i}>{part.text} </span>;
        })}
      </div>
      <div className={registrationLinksContainer()}>
        {conferenceData.registration.links.slice(0, 2).map((link, i) => (
          <p key={i} className={registrationLinkItem()}>
            <a href={link.url} className={registrationLinkItemHover()}>
              {link.text}
            </a>
          </p>
        ))}
      </div>

      {/* Registration Link */}
      <div>
        <a
          href={conferenceData.registration.links[2].url}
          className={registrationMainLink()}
        >
          {conferenceData.registration.links[2].text}
        </a>
      </div>

      {/* Fees */}
      <h3 className={feesTitle()}>{conferenceData.fees.title}</h3>
      <ul className={feesList()}>
        {conferenceData.fees.items.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className={feesNote()}>{conferenceData.fees.note}</p>

      {/* Committee */}
      <h3 className={committeeTitle()}>{conferenceData.committee.title}</h3>
      <ul className={listDiscLarge()}>
        {conferenceData.committee.members.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      {/* Speakers */}
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{conferenceData.speakers.title}</h2>
        <span className={sectionIconMain()}>{SpeakerIcon}</span>
      </div>
      <p className={speakersDescription()}>
        {conferenceData.speakers.description}
      </p>
      <ul className={speakersList()}>
        {conferenceData.speakers.list.map((s, i) => (
          <li key={i}>
            <a href={s.link} className={speakerLink()}>
              {s.name}
            </a>
            , {s.affiliation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrontiersDetail;
