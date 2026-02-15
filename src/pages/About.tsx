import AboutHero from "@/components/about/AboutHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";
import SideSectionsLayout from "@/layouts/sidebar-layout";
import AboutDetail from "@/components/about/AboutDetail";
import { useAboutTranslations } from "@/hooks/useAboutTranslations";

const About = () => {
  const { getTranslatedArray } = useAboutTranslations();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = getTranslatedArray("sections").map((section: any) => ({
    id: section.id,
    label: section.label,
  }));

  return (
    <PageWrapper hero={<AboutHero />} className="bg-background">
      <SideSectionsLayout sections={sections}>
        <AboutDetail />
      </SideSectionsLayout>
    </PageWrapper>
  );
};

export default About;
