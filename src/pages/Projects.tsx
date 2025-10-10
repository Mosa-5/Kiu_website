import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";


const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
