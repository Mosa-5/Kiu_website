import { useTranslation } from "react-i18next";

export const useProgramTranslations = () => {
  const { t } = useTranslation("programs");

  const getTranslatedArray = (key: string): string[] =>
    t(key, { returnObjects: true }) as string[];

  return { t, getTranslatedArray };
};