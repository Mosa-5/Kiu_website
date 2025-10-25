import AdmissionDetail from "@/components/admission/AdmissionDetail";
import AdmissionHero from "@/components/admission/AdmissionHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const Admission = () => {
  return (
    <PageWrapper hero={<AdmissionHero />} className="bg-background">
      <AdmissionDetail />
    </PageWrapper>
  );
};

export default Admission;
