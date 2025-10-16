import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AdmissionEn from './locales/en/admission.json';
import AdmissionKa from './locales/ka/admission.json';
import FrontiersEn from './locales/en/frontiers.json';
import FrontiersKa from './locales/ka/frontiers.json';
import YouthUniEn from './locales/en/youthUni.json';
import YouthUniKa from './locales/ka/youthUni.json';
import ProjectsEn from './locales/en/projects.json';
import ProjectsKa from './locales/ka/projects.json';

const resources = {
  en: {
    admission: AdmissionEn,
    frontiers: FrontiersEn,
    youthUni: YouthUniEn,
    projects: ProjectsEn,
  },
  ka: {
    admission: AdmissionKa,
    frontiers: FrontiersKa,
    youthUni: YouthUniKa,
    projects: ProjectsKa,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'admission',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
