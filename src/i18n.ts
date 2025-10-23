import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import AdmissionEn from './locales/en/admission.json';
import AdmissionKa from './locales/ka/admission.json';
import FrontiersEn from './locales/en/frontiers.json';
import FrontiersKa from './locales/ka/frontiers.json';
import YouthUniEn from './locales/en/youthUni.json';
import YouthUniKa from './locales/ka/youthUni.json';
import ProjectsEn from './locales/en/projects.json';
import ProjectsKa from './locales/ka/projects.json';
import VacancyEn from './locales/en/vacancy.json';
import VacancyKa from './locales/ka/vacancy.json';
import NewsEn from './locales/en/news.json';
import NewsKa from './locales/ka/news.json';
import HomeEn from './locales/en/home.json';
import HomeKa from './locales/ka/home.json';
import AboutEn from './locales/en/about.json';
import AboutKa from './locales/ka/about.json';
import FooterEn from './locales/en/footer.json';
import FooterKa from './locales/ka/footers.json';
import HeaderEn from './locales/en/header.json';
import HeaderKa from './locales/ka/header.json';
import ProgramsEn from './locales/en/programs.json';
import ProgramsKa from './locales/ka/programs.json';
import CampusEn from './locales/en/campus.json';
import CampusKa from './locales/ka/campus.json';

const resources = {
  en: {
    admission: AdmissionEn,
    frontiers: FrontiersEn,
    youthUni: YouthUniEn,
    projects: ProjectsEn,
    vacancy: VacancyEn,
    news: NewsEn,
    home: HomeEn,
    about: AboutEn,
    footer: FooterEn,
    header: HeaderEn,
    programs: ProgramsEn,
    campus: CampusEn,
  },
  ka: {
    admission: AdmissionKa,
    frontiers: FrontiersKa,
    youthUni: YouthUniKa,
    projects: ProjectsKa,
    vacancy: VacancyKa,
    news: NewsKa,
    home: HomeKa,
    about: AboutKa,
    footer: FooterKa,
    header: HeaderKa,
    programs: ProgramsKa,
    campus: CampusKa,
  },
};

i18n
  .use(LanguageDetector)       
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'admission',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], 
      caches: ['localStorage'],                       
    },
  });

export default i18n;