import { useTranslation } from "react-i18next";

export interface ConferenceSection {
  label: string;
  link: string;
  linkText: string;
}

export interface ConferenceYear {
  title: string;
  sections: ConferenceSection[];
}
export interface ParagraphChunk {
  type: "text" | "link";
  value: string;
  href?: string;
}
export const useResearchTranslations = () => {
  const { t } = useTranslation("research");

  const getTranslatedArray = <T = string>(key: string): T[] =>
    t(key, { returnObjects: true }) as T[];
   const getIntroParagraphs = (): ParagraphChunk[][] =>
    t("detail.introParagraphs", { returnObjects: true }) as ParagraphChunk[][];

  return { t, getTranslatedArray, getIntroParagraphs };
};