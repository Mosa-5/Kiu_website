import SingleProgramDetail from "@/components/individual-program/SingleProgramDetail";
import SingleProgramHero from "@/components/individual-program/SingleProgramHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";
import SideSectionsLayout from "@/layouts/sidebar-layout";
import { useProgramTranslations } from "@/hooks/useProgramTranslations";
import { getProgramsData } from "@/components/individual-program/data/programs/ProgramsData";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleProgram = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();
  const { getTranslatedArray } = useProgramTranslations();

  const programsData = getProgramsData(i18n.language);
  const programExists = !!programsData[id || ""];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = getTranslatedArray("singleProgramSections").map((section: any) => ({
    id: section.id,
    label: section.label,
  }));

  return (
    <PageWrapper hero={<SingleProgramHero />} className="bg-background">
      {programExists ? (
        <SideSectionsLayout sections={sections}>
          <SingleProgramDetail />
        </SideSectionsLayout>
      ) : (
        <SingleProgramDetail />
      )}
    </PageWrapper>
  );
};

export default SingleProgram;
