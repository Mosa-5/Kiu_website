import ResearchDetail from "@/components/research/ResearchDetail";
import ResearchHero from "@/components/research/ResearchHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";
import SideSectionsLayout from "@/layouts/sidebar-layout";
import { useResearchTranslations } from "@/hooks/useResearchTranslations";

const Research = () => {
  const { getTranslatedArray } = useResearchTranslations();

  const sections = getTranslatedArray<{ id: string; label: string }>(
    "sections"
  );

  return (
    <PageWrapper hero={<ResearchHero />} className="bg-background">
      <SideSectionsLayout sections={sections}>
        <ResearchDetail />
      </SideSectionsLayout>
    </PageWrapper>
  );
};

export default Research;
