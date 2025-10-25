import SingleProgramDetail from "@/components/individual-program/SingleProgramDetail";
import SingleProgramHero from "@/components/individual-program/SingleProgramHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const SingleProgram = () => {
  return (
    <PageWrapper hero={<SingleProgramHero />} className="bg-background">
      <SingleProgramDetail />
    </PageWrapper>
  );
};

export default SingleProgram;
