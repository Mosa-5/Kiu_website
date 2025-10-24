import * as images from "@/assets";

// version 1 for preloading only critical images
export const preloadCriticalImages = () => {
  const critical = [
    images.heroimg1,
    images.heroimg2,
    images.heroimg3,
    images.heroimg4,
    images.heroimg5,
    images.ProgramHeroImage,
    images.ProgramsHeroImage,
    images.heroimg1Ka,
    images.heroimg2Ka,
    images.heroimg3Ka,
    images.heroimg4Ka,
    images.heroimg5Ka,
    images.AdmisssionHero,
    images.FrontiersHero,
    images.newsHeroImage,
    images.VacanciesHero,
    images.ProjectsHeroImage,
    images.MathHero,
    images.CampusHeroImage,
    images.StudentsHeroImage,
    images.ResearchHeroImage,
  ];

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

// I'll keep version 2 for preloading all of the images just in case
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
