import VacancyDetail from "@/components/vacancies/VacancyDetail";
import VacancyHero from "@/components/vacancies/VacancyHero";
import PageWrapper from "../components/ui/page-wrapper/PageWrapper";
import SideSectionsLayout from "@/layouts/sidebar-layout";
import { useTranslation } from "react-i18next";

const Vacancies = () => {
  const { t } = useTranslation("vacancy");
  const sections = (t("sections", { returnObjects: true }) as any[]).map(
    (section: any) => ({
      id: section.id,
      label: section.label,
    })
  );

  return (
    <PageWrapper hero={<VacancyHero />} className="bg-background">
      <SideSectionsLayout sections={sections}>
        <VacancyDetail />
      </SideSectionsLayout>
    </PageWrapper>
  );
};

export default Vacancies;
