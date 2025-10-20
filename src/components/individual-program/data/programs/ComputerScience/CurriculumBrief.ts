import type { ProgramData } from "../types";

const curriculumBriefEn: ProgramData["curriculumBrief"] = {
  title: "Curriculum Brief",
  intro: "Major in Computer Science",
  concentrations: {
    title: "Concentrations:",
    items: [
      "Language Based Technologies",
      "System Architecture",
      "Digital Systems",
      "Databases",
      "Logic and automated reasoning",
      "Software Engineering",
      "Distribution Networks, Computer networks",
      "Artificial intelligence",
    ],
  },
  degreeRequirements: {
    title: "BSc Degree Requirements:",
    items: [
      "240 ECTS credits",
      "Internship",
      "Minor Program in Mathematics or Management",
      "Capstone Project",
    ],
  },
  specialization: {
    title: "Specialization via electives",
    items: [
      "1. Two Concentrations",
      "2. Seminar, Elective Courses",
      "3. Internship, Bachelor thesis",
    ],
  },
  studyPlanLink: {
    text: "Detailed study plan of the degree program",
    url: "#",
  },
};

const curriculumBriefKa: ProgramData["curriculumBrief"] = {
  title: "კურიკულუმის მიმოხილვა",
  intro: "კომპიუტერული მეცნიერებების სპეციალობა",
  concentrations: {
    title: "კონცენტრაციები:",
    items: [
      "ენა დაფუძნებული ტექნოლოგიები",
      "სისტემების არქიტექტურა",
      "ციფრული სისტემები",
      "მონაცემთა ბაზები",
      "ლოგიკა და ავტომატიზებული დასაბუთება",
      "პროგრამული უზრუნველყოფის ინჟინერია",
      "განაწილებითი ქსელები, კომპიუტერული ქსელები",
      "ხელოვნური ინტელექტი",
    ],
  },
  degreeRequirements: {
    title: "BSc დიპლომის მოთხოვნები:",
    items: [
      "240 ECTS კრედიტი",
      "სტაჟირება",
      "მოკლე პროგრამა მათემატიკაში ან მენეჯმენტში",
      "კაპსტოუნ პროექტი",
    ],
  },
  specialization: {
    title: "სპეციალიზაცია არჩევითი კურსების მეშვეობით",
    items: [
      "1. ორი კონცენტრაცია",
      "2. სემინარი, არჩევითი კურსები",
      "3. სტაჟირება, ბაკალავრის თეზისი",
    ],
  },
  studyPlanLink: {
    text: "დიპლომის პროგრამის დეტალური სასწავლო გეგმა",
    url: "#",
  },
};

export const getCurriculumBrief = (lang: string): ProgramData["curriculumBrief"] => {
  return lang === "ka" ? curriculumBriefKa : curriculumBriefEn;
};
