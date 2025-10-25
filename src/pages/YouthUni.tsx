import YouthUniDetail from "@/components/projects/youth-uni/YouthUniDetail";
import YouthUniHero from "@/components/projects/youth-uni/YouthUniHero";
import PageWrapper from "./PageWrapper";

const YouthUni = () => {
  return (
    <PageWrapper hero={<YouthUniHero />} className="bg-background">
      <YouthUniDetail />
    </PageWrapper>
  );
};

export default YouthUni;
