import { useTranslation } from "react-i18next";

export const useVacancyTranslations = () => {
  const { t } = useTranslation("vacancy");
  

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  return { t, getTranslatedArray };
};