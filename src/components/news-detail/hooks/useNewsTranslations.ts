import { useTranslation } from "react-i18next";

export const useNewsTranslations = () => {
  const { t } = useTranslation("news");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  return { t, getTranslatedArray };
};