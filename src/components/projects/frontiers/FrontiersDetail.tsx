import React from "react";
import { AboutIcon, SpeakerIcon } from "../../../assets/icons/icons";
import { FrontiersConf } from "@/assets";
import { useFrontiersTranslations } from "@/hooks/useFrontiersTranslations";
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
type Speaker = {
  name: string;
  link: string;
  affiliation: string;
};

const FrontiersDetail: React.FC = () => {
  const { t, getTranslatedArray, getTranslatedParts, getTranslatedLinks } =
    useFrontiersTranslations();

  const aboutParts = getTranslatedParts("about.parts");
  const programItems = getTranslatedArray<string>("program.items");
  const registrationParts = getTranslatedParts("registration.parts");
  const registrationLinks = getTranslatedLinks("registration.links");
  const feesItems = getTranslatedArray("fees.items");
  const committeeMembers = getTranslatedArray("committee.members");
  const speakersListData: Speaker[] = getTranslatedArray("speakers.list");

  return (
    <div className={container()}>
      <img src={FrontiersConf} className={bannerImage()} />

      {/* About */}
      <div className={sectionHeader()}>
        <h1 className={sectionTitle()}>{t("about.title")}</h1>
        <span className={sectionIcon()}>{AboutIcon}</span>
      </div>
      <p className={paragraph()}>
        {aboutParts.map((part, i) => {
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
      <h2 className={subsectionTitle()}>{t("program.title")}</h2>
      <ul className={listDisc()}>
        {programItems.map((item, i) => (
          <li key={i} className={listItem()}>
            {item}
          </li>
        ))}
      </ul>

      {/* Accommodation */}
      <h2 className={subsectionTitleSmall()}>{t("accommodation.title")}</h2>
      <p className={accommodationText()}>{t("accommodation.text")}</p>

      {/* Registration */}
      <h2 className={subsectionTitleSmaller()}>{t("registration.title")}</h2>
      <div className={registrationContent()}>
        {registrationParts.map((part, i) => {
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
        {registrationLinks.slice(0, 2).map((link, i) => (
          <p key={i} className={registrationLinkItem()}>
            <a href={link.url} className={registrationLinkItemHover()}>
              {link.text}
            </a>
          </p>
        ))}
      </div>

      {/* Registration Link */}
      <div>
        <a href={registrationLinks[2].url} className={registrationMainLink()}>
          {registrationLinks[2].text}
        </a>
      </div>

      {/* Fees */}
      <h3 className={feesTitle()}>{t("fees.title")}</h3>
      <ul className={feesList()}>
        {feesItems.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className={feesNote()}>{t("fees.note")}</p>

      {/* Committee */}
      <h3 className={committeeTitle()}>{t("committee.title")}</h3>
      <ul className={listDiscLarge()}>
        {committeeMembers.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      {/* Speakers */}
      <div className={sectionHeader()}>
        <h2 className={sectionTitle()}>{t("speakers.title")}</h2>
        <span className={sectionIconMain()}>{SpeakerIcon}</span>
      </div>
      <p className={speakersDescription()}>{t("speakers.description")}</p>
      <ul className={speakersList()}>
        {speakersListData.map((s, i) => (
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
