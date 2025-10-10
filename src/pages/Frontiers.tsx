import FrontiersDetail from "@/components/projects/frontiers/FrontiersDetail";
import AdvancingFrontiersHero from "@/components/projects/frontiers/FrontiersHero";



const Frontiers = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdvancingFrontiersHero />
      <FrontiersDetail />
    </div>
  );
};

export default Frontiers;
