import ProgramHero from "@/components/programs/ProgramsHero";
import ProgramTabs from "@/components/programs/ProgramsTabs";
import PageWrapper from "./PageWrapper";

const Programs = () => {
  return (
    <PageWrapper hero={<ProgramHero />} className="bg-background">
      <ProgramTabs />
    </PageWrapper>
  );
};

export default Programs;
