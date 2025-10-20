import type { Paragraph } from "../types";

const aboutSchoolEn = {
  title: "About School",
  paragraphs: [
    {
      parts: [
        {
          text: "Kutaisi International University (KIU)'s School of Mathematics offers undergraduate programs in Mathematics and Mathematics & Applications: Foundations of Artificial Intelligence, Scientific Computing, and Financial Mathematics. The program is implemented in English. Master's and doctoral programs will be introduced in the near future.",
          type: "normal",
        },
      ],
    },
    {
      parts: [
        { text: "For more information, please contact us at: ", type: "normal" },
        { text: "math@kiu.edu.ge", type: "link", url: "mailto:cs@kiu.edu.ge" },
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
          text: "ქუთაისის საერთაშორისო უნივერსიტეტის (KIU) მათემატიკის სკოლის ფარგლებში ხორციელდება მათემატიკისა და მათემატიკა & გამოყენებები: ხელოვნური ინტელექტის, სამეცნიერო გამოთვლების, ფინანსური მათემატიკის საფუძვლების ინგლისურენოვანი საბაკალავრო პროგრამები. უახლოეს მომავალში დაგეგმილია სამაგისტრო და სადოქტორო პროგრამების დამატება.",
          type: "normal",
        },
      ],
    },
    {
      parts: [
        { text: "მეტი ინფორმაციისთვის გთხოვთ დაგვიკავშირდეთ: ", type: "normal" },
        { text: "math@kiu.edu.ge", type: "link", url: "mailto:cs@kiu.edu.ge" },
      ],
    },
  ] as Paragraph[],
};

export const getAboutSchool = (lang: string) => {
  return lang === "ka" ? aboutSchoolKa : aboutSchoolEn;
};
