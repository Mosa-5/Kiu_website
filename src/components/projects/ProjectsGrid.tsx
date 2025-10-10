import { ProjectsImage1, ProjectsImage2 } from "@/assets";
import { Link } from "react-router-dom";

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'Advancing the Frontiers',
      image: ProjectsImage1,
      path: '/projects/frontiers'
    },
    {
      id: 2,
      title: 'Youth University',
      image: ProjectsImage2,
      path: '/projects/youthuni'
    }
  ];

  return (
    <div className="flex gap-6 my-28 px-[120px]">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={project.path}
          className="relative aspect-[550/260] h-65 rounded-2xl overflow-hidden group cursor-pointer shadow-[2px_4px_4px_rgba(0,0,0,0.25)] border-2 border-[#3C70AF]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/50 to-blue-900/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold text-center px-8">
              {project.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;