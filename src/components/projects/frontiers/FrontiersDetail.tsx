import React from "react";
import { conferenceData } from "./data/frontiersData";
import { AboutIcon, SpeakerIcon } from "./data/icons";
import { FrontiersConf } from "@/assets";

const FrontiersDetail: React.FC = () => {
  return (
    <div className="max-w-[1680px] mx-auto py-10 font-sans">
      <img src={FrontiersConf} className="brightness-75 py-10" />
      {/* About */}
      <div className="bg-[#E3F0FF] inline-flex items-center gap-4 px-4 py-2 rounded mb-6">
        <h1 className="text-3xl font-medium text-mainDark">
          {conferenceData.about.title}
        </h1>
        <span className="text-mainDark">{AboutIcon}</span>
      </div>
      <p className="mb-6 text-lg">
        {conferenceData.about.parts.map((part, i) => {
          if (part.type === "link") {
            return (
              <a
                key={i}
                href={part.url}
                className="text-blue-400 hover:underline font-medium"
              >
                {part.text}
              </a>
            );
          }
          if (part.type === "blue") {
            return (
              <span key={i} className="text-main">
                {part.text}
              </span>
            );
          }
          return <span key={i}>{part.text}</span>;
        })}
      </p>

      {/* Program */}
      <h2 className="text-2xl font-medium text-main mb-3">
        {conferenceData.program.title}
      </h2>
      <ul className="list-disc pl-5 mb-6 text-lg">
        {conferenceData.program.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Accommodation */}
      <h2 className="text-xl font-medium text-main mb-3">
        {conferenceData.accommodation.title}
      </h2>
      <p className="mb-6 text-lg">{conferenceData.accommodation.text}</p>

      {/* Registration */}
      <h2 className="text-xl font-medium text-main mb-3">
        {conferenceData.registration.title}
      </h2>
      <div className="mb-2 text-lg">
        {conferenceData.registration.parts.map((part, i) => {
          if (part.type === "highlight") {
            return (
              <span key={i} className="text-main">
                {part.text}
              </span>
            );
          }
          if (part.type === "link") {
            return (
              <a key={i} href={part.url} className="text-main hover:underline">
                {part.text}
              </a>
            );
          }
          return <span key={i}>{part.text} </span>;
        })}
      </div>
      <div className="mb-6 text-lg text-blue-400 hover:underline">
        {conferenceData.registration.links.slice(0, 2).map((link, i) => (
          <p key={i} className="mb-1">
            <a href={link.url} className="hover:underline">
              {link.text}
            </a>
          </p>
        ))}
      </div>

      {/* Registration Link */}
      <div className="mb-6">
        <a
          href={conferenceData.registration.links[2].url}
          className="text-2xl text-main hover:underline"
        >
          {conferenceData.registration.links[2].text}
        </a>
      </div>

      {/* Fees */}
      <h3 className="text-base font-medium text-gray-800 mb-2">
        {conferenceData.fees.title}
      </h3>
      <ul className="list-disc pl-5 mb-2 text-lg">
        {conferenceData.fees.items.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="text-lg mb-6">{conferenceData.fees.note}</p>

      {/* Committee */}
      <h3 className="text-base font-medium text-main mb-2">
        {conferenceData.committee.title}
      </h3>
      <ul className="list-disc pl-5 mb-6 text-lg">
        {conferenceData.committee.members.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      {/* Speakers */}
      <div className="bg-[#E3F0FF] inline-flex items-center gap-4 px-4 py-2 rounded mb-6">
        <h2 className="text-3xl font-medium text-mainDark">
          {conferenceData.speakers.title}
        </h2>
        <span className="text-main">{SpeakerIcon}</span>
      </div>
      <p className="mb-3 text-lg">{conferenceData.speakers.description}</p>
      <ul className="list-disc pl-5 mb-6 text-lg space-y-1">
        {conferenceData.speakers.list.map((s, i) => (
          <li key={i}>
            <a href={s.link} className="text-main hover:underline font-medium">
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
