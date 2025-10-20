import { useTranslation } from "react-i18next";

export const useHomeTranslations = () => {
  const { t } = useTranslation("home");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  return { t, getTranslatedArray };
};
