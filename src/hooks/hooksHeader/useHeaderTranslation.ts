import { useTranslation } from "react-i18next";

export const useHeaderTranslations = () => {
  const { t } = useTranslation("header");

  return { t };
};