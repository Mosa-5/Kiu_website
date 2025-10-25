import StudentsDetail from "@/components/students/StudentsDetail";
import StudentsHero from "@/components/students/StudentsHero";
import PageWrapper from "./PageWrapper";

const Students = () => {
  return (
    <PageWrapper hero={<StudentsHero />} className="bg-background">
      <StudentsDetail />
    </PageWrapper>
  );
};

export default Students;
