import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";
import PageWrapper from "./PageWrapper";

const Projects = () => {
  return (
    <PageWrapper hero={<ProjectsHero />} className="bg-background">
      <ProjectsGrid />
    </PageWrapper>
  );
};

export default Projects;
