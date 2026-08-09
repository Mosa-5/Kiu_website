import i18n, { type BackendModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HeaderEn from './locales/en/header.json';
import HeaderKa from './locales/ka/header.json';
import FooterEn from './locales/en/footer.json';
import FooterKa from './locales/ka/footer.json';
import HomeEn from './locales/en/home.json';
import HomeKa from './locales/ka/home.json';

// Header and Footer render on every route (via Layout), and Home is the
// only page that isn't lazy-loaded -- these three namespaces are needed
// for the very first paint, so they stay statically bundled same as
// before. Every other namespace belongs to a page that's already behind
// React.lazy(), so shipping its translations upfront in the main bundle
// was pure waste for anyone who never visits that page. The backend below
// fetches those on demand via a dynamic import, which Vite splits into its
// own small chunk per namespace/language -- it loads alongside the page's
// own lazy chunk instead of on every single visit.
const preloadedResources = {
  en: { header: HeaderEn, footer: FooterEn, home: HomeEn },
  ka: { header: HeaderKa, footer: FooterKa, home: HomeKa },
};

const lazyNamespaceBackend: BackendModule = {
  type: 'backend',
  init: () => {},
  read: (language, namespace, callback) => {
    import(`./locales/${language}/${namespace}.json`)
      .then((mod) => callback(null, mod.default))
      .catch((err) => callback(err, null));
  },
};

i18n
  .use(LanguageDetector)
  .use(lazyNamespaceBackend)
  .use(initReactI18next)
  .init({
    resources: preloadedResources,
    partialBundledLanguages: true,
    ns: ['header', 'footer', 'home'],
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
