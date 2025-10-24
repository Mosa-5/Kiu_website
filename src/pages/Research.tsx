import ResearchDetail from "@/components/research/ResearchDetail";
import ResearchHero from "@/components/research/ResearchHero";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResearchHero />
      <ResearchDetail/>
    </div>
  );
};

export default Research;
