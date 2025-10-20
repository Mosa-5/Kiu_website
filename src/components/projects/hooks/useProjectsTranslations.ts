import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  path: string;
}

export const useProjectsTranslations = () => {
  const { t } = useTranslation("projects");

  const getProjects = (): Project[] =>
    t("grid.projects", { returnObjects: true }) as Project[];

  return { t, getProjects };
};