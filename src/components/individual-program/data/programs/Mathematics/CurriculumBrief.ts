import type { ProgramData } from "../types";

const curriculumBriefEn: ProgramData["curriculumBrief"] = {
  title: "Curriculum Brief",
  intro: "Major in Mathematics",
  concentrations: {
    title: "Core Pillars:",
    items: [
      "Analysis",
      "Linear Algebra",
      "Probability and Statistics",
      "Numerical Methods",
      "Optimization Methods",
    ],
  },
  degreeRequirements: {
    title: "BSc Degree Requirements:",
    items: [
      "240 ECTS credits",
      "(Group/Individual) Project/Internship",
      "Minor Program in Management or Computer Science",
      "(Individual) Thesis",
    ],
  },
  specialization: {
    title: "Specialization via electives",
    items: [
      "1. Mathematical Modeling Courses",
      "2. Mathematical Seminar, Elective Courses",
      "3. Thesis, Project/Internship",
    ],
  },
  studyPlanLink: {
    text: "Detailed study plan of the degree program",
    url: "#",
  },
};

const curriculumBriefKa: ProgramData["curriculumBrief"] = {
  title: "კურიკულუმის მიმოხილვა",
  intro: "მათემატიკის სპეციალობა",
  concentrations: {
    title: "ძირითადი მიმართულებები:",
    items: [
      "ანალიზი",
      "წრფივი ალგებრა",
      "სავარაუდო და სტატისტიკა",
      "რიცხვითი მეთოდები",
      "ოპტიმიზაციის მეთოდები",
    ],
  },
  degreeRequirements: {
    title: "BSc დიპლომის მოთხოვნები:",
    items: [
      "240 ECTS კრედიტი",
      "(ჯგუფური/ინდივიდუალური) პროექტი/სტაჟირება",
      "მოკლე პროგრამა მენეჯმენტში ან კომპიუტერულ მეცნიერებებში",
      "(ინდივიდუალური) თეზისი",
    ],
  },
  specialization: {
    title: "სპეციალიზაცია არჩევითი კურსების მეშვეობით",
    items: [
      "1. მათემატიკური მოდელირების კურსები",
      "2. მათემატიკური სემინარი, არჩევითი კურსები",
      "3. თეზისი, პროექტი/სტაჟირება",
    ],
  },
  studyPlanLink: {
    text: "დიპლომის პროგრამის დეტალური სასწავლო გეგმა",
    url: "#",
  },
};

export const getCurriculumBrief = (
  lang: string
): ProgramData["curriculumBrief"] => {
  return lang === "ka" ? curriculumBriefKa : curriculumBriefEn;
};
