import ResearchDetail from "@/components/research/ResearchDetail";
import ResearchHero from "@/components/research/ResearchHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const Research = () => {
  return (
    <PageWrapper hero={<ResearchHero />} className="bg-background">
      <ResearchDetail />
    </PageWrapper>
  );
};

export default Research;
