import { CampusDetail } from "@/components/campus/CampusDetail";
import CampusHero from "@/components/campus/CampusHero";

const CampusPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CampusHero />
      <CampusDetail />
    </div>
  );
};

export default CampusPage;
