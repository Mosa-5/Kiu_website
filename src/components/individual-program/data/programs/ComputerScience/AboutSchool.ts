import type { Paragraph } from "../types";

const aboutSchoolEn = {
  title: "About School",
  paragraphs: [
    {
      parts: [
        {
          text: "KIU implements Bachelor of Science program in Computer Science. Program is implemented in English language. KIU welcomes students from Georgia and abroad. Please see below details about the program.",
          type: "normal",
        },
      ],
    },
    {
      parts: [
        { text: "For more information, please contact us at: ", type: "normal" },
        { text: "cs@kiu.edu.ge", type: "link", url: "mailto:cs@kiu.edu.ge" },
      ],
    },
  ] as Paragraph[],
};

const aboutSchoolKa = {
  title: "სკოლას შესახებ",
  paragraphs: [
    {
      parts: [
        {
          text: "KIU ახორციელებს კომპიუტერული მეცნიერებების ბაკალავრის პროგრამას. პროგრამა ეწარმოება ინგლისურ ენაზე. KIU ეწვევს სტუდენტებს საქართველოდან და უცხოეთიდან. ქვემოთ მოცემულია პროგრამის დეტალები.",
          type: "normal",
        },
      ],
    },
    {
      parts: [
        { text: "მეტი ინფორმაციისთვის გთხოვთ დაგვიკავშირდეთ: ", type: "normal" },
        { text: "cs@kiu.edu.ge", type: "link", url: "mailto:cs@kiu.edu.ge" },
      ],
    },
  ] as Paragraph[],
};

export const getAboutSchool = (lang: string) => {
  return lang === "ka" ? aboutSchoolKa : aboutSchoolEn;
};
