import FrontiersDetail from "@/components/projects/frontiers/FrontiersDetail";
import AdvancingFrontiersHero from "@/components/projects/frontiers/FrontiersHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const Frontiers = () => {
  return (
    <PageWrapper hero={<AdvancingFrontiersHero />} className="bg-background">
      <FrontiersDetail />
    </PageWrapper>
  );
};

export default Frontiers;
