import { useTranslation } from "react-i18next";

export const useYouthUniTranslations = () => {
  const { t } = useTranslation("youthUni");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  return { t, getTranslatedArray };
};
