import { ProjectsImage1, ProjectsImage2 } from "@/assets";
import { Link } from "react-router-dom";
import {
  container,
  projectCard,
  projectImage,
  projectOverlay,
  projectContent,
  projectTitle,
} from "./ProjectsGrid.styles";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Advancing the Frontiers",
      image: ProjectsImage1,
      path: "/projects/frontiers",
    },
    {
      id: 2,
      title: "Youth University",
      image: ProjectsImage2,
      path: "/projects/youthuni",
    },
  ];

  return (
    <div className={container()}>
      {projects.map((project) => (
        <Link key={project.id} to={project.path} className={projectCard()}>
          <img
            src={project.image}
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
