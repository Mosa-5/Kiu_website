import { useTranslation } from "react-i18next";

export const useStudentsTranslations = () => {
  const { t, i18n } = useTranslation("students");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return { t, getTranslatedArray, changeLanguage, currentLanguage: i18n.language };
};
