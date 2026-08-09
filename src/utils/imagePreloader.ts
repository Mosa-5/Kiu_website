import * as images from "@/assets";

// Matches the <picture> breakpoint used in CarouselHero (max-width: 639px) —
// preloading the desktop-resolution hero images on a mobile viewport would
// undermine the point of having mobile-sized variants at all.
const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth < 640;

const criticalImagesEn = isMobileViewport()
  ? [
      images.heroimg1Sm,
      images.heroimg2Sm,
      images.heroimg3Sm,
      images.heroimg4Sm,
      images.heroimg5Sm,
    ]
  : [
      images.heroimg1,
      images.heroimg2,
      images.heroimg3,
      images.heroimg4,
      images.heroimg5,
    ];

const criticalImagesKa = isMobileViewport()
  ? [
      images.heroimg1KaSm,
      images.heroimg2KaSm,
      images.heroimg3KaSm,
      images.heroimg4KaSm,
      images.heroimg5KaSm,
    ]
  : [
      images.heroimg1Ka,
      images.heroimg2Ka,
      images.heroimg3Ka,
      images.heroimg4Ka,
      images.heroimg5Ka,
    ];

const sharedCriticalImages = [
  images.ProgramHeroImage,
  images.ProgramsHeroImage,
  images.AdmissionHero,
  images.FrontiersHero,
  images.newsHeroImage,
  images.VacanciesHero,
  images.ProjectsHeroImage,
  images.MathHero,
  images.CampusHeroImage,
  images.StudentsHeroImage,
  images.ResearchHeroImage,
];

export const preloadCriticalImages = (lang: string = "en") => {
  const heroImages = lang === "ka" ? criticalImagesKa : criticalImagesEn;
  const critical = [...heroImages, ...sharedCriticalImages];

  return Promise.all(
    critical.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    })
  );
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
