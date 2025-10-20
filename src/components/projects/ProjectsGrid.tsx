import { ProjectsImage1, ProjectsImage2 } from "@/assets";
import { Link, useParams } from "react-router-dom";
import { useProjectsTranslations } from "../../hooks/useProjectsTranslations";
import {
  container,
  projectCard,
  projectImage,
  projectOverlay,
  projectContent,
  projectTitle,
} from "./ProjectsGrid.styles";

const ProjectsGrid = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const { getProjects } = useProjectsTranslations();
  const projectsData = getProjects();

  const projectImages = [ProjectsImage1, ProjectsImage2];

  return (
    <div className={container()}>
      {projectsData.map((project, index) => (
        <Link
          key={project.id}
          to={`/${currentLang}${project.path}`}
          className={projectCard()}
        >
          <img
            src={projectImages[index]}
            alt={project.title}
            className={projectImage()}
          />
          <div className={projectOverlay()} />
          <div className={projectContent()}>
            <h3 className={projectTitle()}>{project.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;
