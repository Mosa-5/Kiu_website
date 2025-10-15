import SingleProgramDetail from "@/components/individual-program/SingleProgramDetail";
import SingleProgramHero from "@/components/individual-program/SingleProgramHero";


const SingleProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <SingleProgramHero />
      <SingleProgramDetail />
    </div>
  );
};

export default SingleProgram;
