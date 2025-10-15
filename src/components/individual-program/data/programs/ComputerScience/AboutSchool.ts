import type { Paragraph } from "../types";

export const aboutSchool = {
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
