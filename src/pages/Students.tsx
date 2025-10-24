import StudentsDetail from "@/components/students/StudentsDetail";
import StudentsHero from "@/components/students/StudentsHero";



const Students = () => {
  return (
    <div className="min-h-screen bg-background">
      <StudentsHero />
      <StudentsDetail />
    </div>
  );
};

export default Students;
