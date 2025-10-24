import { useTranslation } from "react-i18next";

export const useCampusTranslations = () => {
  const { t, i18n } = useTranslation("campus");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return { t, getTranslatedArray, changeLanguage, currentLanguage: i18n.language };
};
