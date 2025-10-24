import { useTranslation } from "react-i18next";

export const useFrontiersTranslations = () => {
  const { t } = useTranslation("frontiers");

  const getTranslatedArray = <T = string>(key: string): T[] =>
    t(key, { returnObjects: true }) as T[];

  const getTranslatedParts = (
    key: string
  ): Array<{ text: string; type: string; url?: string }> =>
    t(key, { returnObjects: true }) as Array<{ text: string; type: string; url?: string }>;

  const getTranslatedLinks = (
    key: string
  ): Array<{ text: string; url: string }> =>
    t(key, { returnObjects: true }) as Array<{ text: string; url: string }>;

  return { t, getTranslatedArray, getTranslatedParts, getTranslatedLinks };
};
