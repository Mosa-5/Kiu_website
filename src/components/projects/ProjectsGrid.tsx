import { ProjectsImage1, ProjectsImage2 } from "@/assets";
import { Link } from "react-router-dom";

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
    <div className="flex max-sm:flex-col sm:gap-6 sm:px-[120px]">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={project.path}
          className="relative max-sm:rounded-none max-sm:border-0 max-sm:border-y-2 hover:-translate-y-1 duration-200  sm:aspect-[550/260] h-40 sm:h-65 rounded-2xl overflow-hidden group cursor-pointer shadow-[2px_4px_4px_rgba(0,0,0,0.25)] border-2 border-[#3C70AF]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br to-blue-900/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl sm:text-2xl font-semibold text-center backdrop-blur-[1px] bg-main px-5 py-1 flex rounded-lg">
              {project.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;
