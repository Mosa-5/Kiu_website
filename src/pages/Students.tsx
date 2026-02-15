import StudentsDetail from "@/components/students/StudentsDetail";
import StudentsHero from "@/components/students/StudentsHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";
import SideSectionsLayout from "@/layouts/sidebar-layout";
import { useStudentsTranslations } from "@/hooks/useStudentsTranslations";

const Students = () => {
  const { getTranslatedArray } = useStudentsTranslations();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = getTranslatedArray("sections").map((section: any) => ({
    id: section.id,
    label: section.label,
  }));

  return (
    <PageWrapper hero={<StudentsHero />} className="bg-background">
      <SideSectionsLayout sections={sections}>
        <StudentsDetail />
      </SideSectionsLayout>
    </PageWrapper>
  );
};

export default Students;
