import type { ProgramData } from "../types";

const minorProgramEn: ProgramData["minorProgram"] = {
  title: "Minor Program",
  subtitle: [
    {
      text: "Minor Program - Computer Science",
      url: "/minor/smcs-newsletter-september-2024.pdf",
    },
  ],
  text: "Students from bachelor program of Computer Science or Management can choose minor program in Mathematics (42 ECTS credits).",
};

const minorProgramKa: ProgramData["minorProgram"] = {
  title: "მოკლე პროგრამა",
  subtitle: [
    {
      text: "მოკლე პროგრამა - კომპიუტერული მეცნიერება",
      url: "/minor/smcs-newsletter-september-2024.pdf",
    },
  ],
  text: "კომპიუტერული მეცნიერების ან მენეჯმენტის ბაკალავრის პროგრამის სტუდენტებს შეუძლიათ აირჩიონ მოკლე პროგრამა მათემატიკაში(42 ECTS კრედიტი).",
};

export const getMinorProgram = (lang: string): ProgramData["minorProgram"] => {
  return lang === "ka" ? minorProgramKa : minorProgramEn;
};
