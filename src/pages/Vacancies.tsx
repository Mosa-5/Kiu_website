import VacancyDetail from "@/components/vacancies/VacancyDetail";
import VacancyHero from "@/components/vacancies/VacancyHero";




const Vacancies = () => {
  return (
    <div className="min-h-screen bg-background">
      <VacancyHero />
      <VacancyDetail />
    </div>
  );
};

export default Vacancies;
