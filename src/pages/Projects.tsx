import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";

const Projects = () => {
  return (
    <div className="bg-background">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
