import VacancyDetail from "@/components/vacancies/VacancyDetail";
import VacancyHero from "@/components/vacancies/VacancyHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";

const Vacancies = () => {
  return (
    <PageWrapper hero={<VacancyHero />} className="bg-background">
      <VacancyDetail />
    </PageWrapper>
  );
};

export default Vacancies;
