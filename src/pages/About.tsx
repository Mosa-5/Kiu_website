import AboutDetail from "@/components/about/AboutDetail";
import AboutHero from "@/components/about/AboutHero";
import PageWrapper from "./PageWrapper";

const About = () => {
  return (
    <PageWrapper hero={<AboutHero />} className="bg-background">
      <AboutDetail />
    </PageWrapper>
  );
};

export default About;
