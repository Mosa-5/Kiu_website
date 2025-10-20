import type { ProgramData } from "../types";

const tuitionAndCostsEn: ProgramData["tuitionAndCosts"] = {
  title: "Tuition Fee and Living Costs",
  academicYear: "Tuition Fee and Living Costs for 2025-2026 Academic Year",
  sectionTitle: "International students",
  points: [
    "Tuition fee is 3,200 EUR equivalent, in accordance with the exchange rate set by the National Bank of Georgia of the day of payment. (The sum includes all teaching materials);",
    "Living costs is 5000 EUR/year.",
  ],
  admissionNote: {
    text: "International students interested in applying to the program, please visit: ",
    linkText: "Admission",
    linkUrl: "/admission",
  },
};

const tuitionAndCostsKa: ProgramData["tuitionAndCosts"] = {
  title: "სწავლების საფასური და ცხოვრების ხარჯები",
  academicYear: "სწავლების საფასური და ცხოვრების ხარჯები 2025-2026 აკადემიური წლისთვის",
  sectionTitle: "საერთაშორისო სტუდენტები",
  points: [
    "სწავლების საფასური 3,200 ევროს ტოლია, საქართველოს ეროვნული ბანკის მიერ გადახდის დღეს დადგენილი გაცვლითი კურსის შესაბამისად. (საფასური მოიცავს ყველა სასწავლო მასალას);",
    "ცხოვრების ხარჯები 5000 ევრო/წელიწადში.",
  ],
  admissionNote: {
    text: "საერთაშორისო სტუდენტები, რომლებსაც სურთ პროგრამაზე განაცხადის შეტანა, გთხოვთ ეწვიოთ: ",
    linkText: "მიღება",
    linkUrl: "/admission",
  },
};

export const getTuitionAndCosts = (lang: string): ProgramData["tuitionAndCosts"] => {
  return lang === "ka" ? tuitionAndCostsKa : tuitionAndCostsEn;
};
