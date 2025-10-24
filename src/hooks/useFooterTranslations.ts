import { useTranslation } from "react-i18next";

export const useFooterTranslations = () => {
  const { t } = useTranslation("footer");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  return { t, getTranslatedArray };
};