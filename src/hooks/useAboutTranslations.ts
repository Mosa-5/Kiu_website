import { useTranslation } from "react-i18next";

interface TextPart {
  text: string;
  type: "normal" | "link" | "blue";
  url?: string;
}

interface Paragraph {
  parts: TextPart[];
}

interface Member {
  name: string;
  lines: string[];
}

interface Program {
  text: string;
  url: string;
}

export const useAboutTranslations = () => {
  const { t } = useTranslation("about");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  const getTranslatedParagraphs = (key: string): Paragraph[] =>
    t(key, { returnObjects: true }) as Paragraph[];

  const getTranslatedMembers = (key: string): Member[] =>
    t(key, { returnObjects: true }) as Member[];

  const getTranslatedPrograms = (key: string): Program[] =>
    t(key, { returnObjects: true }) as Program[];

  return {
    t,
    getTranslatedArray,
    getTranslatedParagraphs,
    getTranslatedMembers,
    getTranslatedPrograms,
  };
};
