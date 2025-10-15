import type { ProgramData } from "../types";

export const curriculumBrief: ProgramData["curriculumBrief"] = {
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
      "3. Intership, Bachelor thesis",
    ],
  },
  studyPlanLink: {
    text: "Detailed study plan of the degree program",
    url: "#",
  },
};
