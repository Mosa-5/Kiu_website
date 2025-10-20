import { useTranslation } from "react-i18next";

export const useAdmissionTranslations = () => {
  const { t } = useTranslation("admission");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  const getTranslatedParagraphs = (
    key: string
  ): Array<{ parts: Array<{ text: string; type: string; url?: string }> }> =>
    t(key, { returnObjects: true }) as Array<{
      parts: Array<{ text: string; type: string; url?: string }>;
    }>;

  const getTranslatedLinks = (key: string): Array<{ text: string; url: string }> =>
    t(key, { returnObjects: true }) as Array<{ text: string; url: string }>;

  return { t, getTranslatedArray, getTranslatedParagraphs, getTranslatedLinks };
};
