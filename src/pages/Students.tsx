import StudentsDetail from "@/components/students/StudentsDetail";
import StudentsHero from "@/components/students/StudentsHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const Students = () => {
  return (
    <PageWrapper hero={<StudentsHero />} className="bg-background">
      <StudentsDetail />
    </PageWrapper>
  );
};

export default Students;
