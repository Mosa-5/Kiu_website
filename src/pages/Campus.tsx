import { CampusDetail } from "@/components/campus/CampusDetail";
import CampusHero from "@/components/campus/CampusHero";
import PageWrapper from "@/pages/PageWrapper";

const CampusPage = () => {
  return (
    <PageWrapper hero={<CampusHero />} className="bg-background">
      <CampusDetail />
    </PageWrapper>
  );
};

export default CampusPage;
