import { ProjectsImage1, ProjectsImage2 } from "@/assets";
import { Link } from "react-router-dom";
import { useProjectsTranslations } from "./hooks/useProjectsTranslations";

const ProjectsGrid = () => {
  const { getProjects } = useProjectsTranslations();
  const projectsData = getProjects();

  const projectImages = [ProjectsImage1, ProjectsImage2];

  return (
    <div className="flex gap-6 px-[120px]">
      {projectsData.map((project, index) => (
        <Link
          key={project.id}
          to={project.path}
          className="relative hover:-translate-y-1 duration-200 aspect-[550/260] h-65 rounded-2xl overflow-hidden group cursor-pointer shadow-[2px_4px_4px_rgba(0,0,0,0.25)] border-2 border-[#3C70AF]"
        >
          <img
            src={projectImages[index]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br to-blue-900/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold text-center backdrop-blur-[1px] bg-main px-5 py-1 flex rounded-lg">
              {project.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;