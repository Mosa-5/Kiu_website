import AdmissionDetail from "@/components/admission/AdmissionDetail";
import AdmissionHero from "@/components/admission/AdmissionHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";
import SideSectionsLayout from "@/layouts/sidebar-layout";
import { useTranslation } from "react-i18next";

const Admission = () => {
  const { t } = useTranslation("admission");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections = (t("sections", { returnObjects: true }) as any[]).map((section: any) => ({
    id: section.id,
    label: section.label,
  }));

  return (
    <PageWrapper hero={<AdmissionHero />} className="bg-background">
      <SideSectionsLayout sections={sections}>
        <AdmissionDetail />
      </SideSectionsLayout>
    </PageWrapper>
  );
};

export default Admission;
