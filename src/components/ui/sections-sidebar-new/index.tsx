import * as React from "react";
import { useParams } from "react-router-dom";
import {
  container,
  nav,
  navButton,
  navTitle,
} from "./index.styles";

interface Section {
  id: string;
  label: string;
}

interface SideSectionsProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const translations: Record<string, string> = {
  en: "Quick Navigation",
  ka: "სწრაფი ნავიგაცია",
};

const SideSections: React.FC<SideSectionsProps> = ({
  sections,
  scrollToSection,
  activeSection,
}) => {
  const { lang } = useParams<{ lang?: string }>();
  const title = translations[lang || "en"] || translations.en;

  return (
    <div className={container()}>
      <div>
        <h2 className={navTitle()}>{title}</h2>
        <nav className={nav()}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={navButton({ active: activeSection === section.id })}
              aria-label={section.label}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideSections;
