import * as images from "@/assets";

// Matches the <picture>/HeroSection breakpoint (max-width: 639px) — preload
// the mobile-sized variant on a mobile viewport instead of the desktop one.
const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth < 640;

const homeHeroEn = [
  images.heroimg1,
  images.heroimg2,
  images.heroimg3,
  images.heroimg4,
  images.heroimg5,
];
const homeHeroEnSm = [
  images.heroimg1Sm,
  images.heroimg2Sm,
  images.heroimg3Sm,
  images.heroimg4Sm,
  images.heroimg5Sm,
];
const homeHeroKa = [
  images.heroimg1Ka,
  images.heroimg2Ka,
  images.heroimg3Ka,
  images.heroimg4Ka,
  images.heroimg5Ka,
];
const homeHeroKaSm = [
  images.heroimg1KaSm,
  images.heroimg2KaSm,
  images.heroimg3KaSm,
  images.heroimg4KaSm,
  images.heroimg5KaSm,
];

// Each interior page's own hero image — keyed by its route path with the
// /:lang prefix stripped. Only the current page's hero should be preloaded,
// not every page's on every load (that was the point of splitting these
// into per-page assets in the first place).
const pageHeroes: Record<string, { full: string; sm: string }> = {
  "about-us": { full: images.FrontiersHero, sm: images.FrontiersHeroSm },
  programs: { full: images.ProgramsHeroImage, sm: images.ProgramsHeroImageSm },
  admission: { full: images.AdmissionHero, sm: images.AdmissionHeroSm },
  campus: { full: images.CampusHeroImage, sm: images.CampusHeroImageSm },
  students: { full: images.StudentsHeroImage, sm: images.StudentsHeroImageSm },
  research: { full: images.ResearchHeroImage, sm: images.ResearchHeroImageSm },
  vacancies: { full: images.VacanciesHero, sm: images.VacanciesHeroSm },
  news: { full: images.newsHeroImage, sm: images.newsHeroImageSm },
  projects: { full: images.ProjectsHeroImage, sm: images.ProjectsHeroImageSm },
  "projects/frontiers": { full: images.FrontiersHero, sm: images.FrontiersHeroSm },
};

const getCurrentPageHero = (): string[] => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const path = pathname.replace(/^\/(en|ka)\/?/, "");
  const mobile = isMobileViewport();

  if (path === "") return []; // home — handled separately, has its own carousel

  // "news/:id" and "programs/:id" both start with their listing page's
  // path — news reuses the same hero image, programs has its own
  // per-program hero (rendered eagerly with fetchPriority="high" by
  // SingleProgramHero itself, not worth hardcoding 11 variants here).
  if (path.startsWith("news")) {
    return [mobile ? pageHeroes.news.sm : pageHeroes.news.full];
  }
  if (path.startsWith("programs/")) return [];

  const hero = pageHeroes[path];
  return hero ? [mobile ? hero.sm : hero.full] : [];
};

const preloadImage = (src: string) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });

export const preloadCriticalImages = (lang: string = "en") => {
  const mobile = isMobileViewport();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isHome = pathname.replace(/^\/(en|ka)\/?/, "") === "";

  const critical = isHome
    ? lang === "ka"
      ? mobile
        ? homeHeroKaSm
        : homeHeroKa
      : mobile
        ? homeHeroEnSm
        : homeHeroEn
    : getCurrentPageHero();

  return Promise.all(critical.map(preloadImage));
};

export const preloadAllImages = () => {
  const allImages = Object.values(images).filter(
    (img) => typeof img === "string"
  );

  return Promise.all(
    allImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = src;
      });
    })
  );
};
