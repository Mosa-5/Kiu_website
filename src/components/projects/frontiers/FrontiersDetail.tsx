import React from "react";
import { conferenceData } from "./data/frontiersData";
import { AboutIcon, SpeakerIcon } from "./data/icons";



const FrontiersDetail: React.FC = () => {


  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* About */}
      <div className="bg-blue-100 inline-flex items-center gap-2 px-4 py-2 rounded mb-6">
        <h1 className="text-2xl font-normal text-gray-800 m-0">{conferenceData.about.title}</h1>
        <span className="text-blue-600">{AboutIcon}</span>
      </div>
      <p className="mb-6 text-sm text-gray-700">
        {conferenceData.about.parts.map((part, i) => {
          if (part.type === "link") {
            return (
              <a key={i} href={part.url} className="text-blue-600 hover:underline">
                {part.text}
              </a>
            );
          }
          if (part.type === "blue") {
            return <span key={i} className="text-blue-600">{part.text}</span>;
          }
          return <span key={i}>{part.text}</span>;
        })}
      </p>

      {/* Program */}
      <h2 className="text-xl font-normal text-blue-600 mb-3">{conferenceData.program.title}</h2>
      <ul className="list-disc pl-5 mb-6 text-sm text-gray-700">
        {conferenceData.program.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Accommodation */}
      <h2 className="text-xl font-normal text-blue-600 mb-3">{conferenceData.accommodation.title}</h2>
      <p className="mb-6 text-sm text-gray-700">{conferenceData.accommodation.text}</p>

      {/* Registration */}
      <h2 className="text-xl font-normal text-blue-600 mb-3">{conferenceData.registration.title}</h2>
      <div className="mb-2 text-sm text-gray-700">
        {conferenceData.registration.parts.map((part, i) => {
          if (part.type === "highlight") {
            return <span key={i} className="text-blue-600">{part.text}</span>;
          }
          if (part.type === "link") {
            return (
              <a key={i} href={part.url} className="text-blue-600 hover:underline">
                {part.text}
              </a>
            );
          }
          return <span key={i}>{part.text} </span>;
        })}
      </div>
      <div className="mb-6 text-sm text-blue-600">
        {conferenceData.registration.links.slice(0, 2).map((link, i) => (
          <p key={i} className="mb-1">
            <a href={link.url} className="hover:underline">
              {link.text}
            </a>
          </p>
        ))}
      </div>
      
      {/* Registration Link - Larger */}
      <div className="mb-6">
        <a href={conferenceData.registration.links[2].url} className="text-xl text-blue-600 hover:underline">
          {conferenceData.registration.links[2].text}
        </a>
      </div>


      {/* Fees */}
      <h3 className="text-base font-normal text-gray-800 mb-2">{conferenceData.fees.title}</h3>
      <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
        {conferenceData.fees.items.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-700 mb-6">{conferenceData.fees.note}</p>

      {/* Committee */}
      <h3 className="text-base font-normal text-blue-600 mb-2">{conferenceData.committee.title}</h3>
      <ul className="list-disc pl-5 mb-6 text-sm text-gray-700">
        {conferenceData.committee.members.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      {/* Speakers */}
      <div className="bg-blue-100 inline-flex items-center gap-2 px-4 py-2 rounded mb-6">
        <h2 className="text-2xl font-normal text-gray-800 m-0">{conferenceData.speakers.title}</h2>
        <span className="text-blue-600">{SpeakerIcon}</span>
      </div>
      <p className="mb-3 text-sm text-gray-700">{conferenceData.speakers.description}</p>
      <ul className="list-disc pl-5 mb-6 text-sm text-gray-700 space-y-1">
        {conferenceData.speakers.list.map((s, i) => (
          <li key={i}>
            <a href={s.link} className="text-blue-600 hover:underline font-medium">
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
