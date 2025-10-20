import AdmissionDetail from "@/components/admission/AdmissionDetail";
import AdmissionHero from "@/components/admission/AdmissionHero";

const Admission = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdmissionHero />
      <AdmissionDetail />
    </div>
  );
};

export default Admission;
