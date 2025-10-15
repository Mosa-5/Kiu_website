import type { ProgramData } from "../types";

export const aboutProgram: ProgramData["aboutProgram"] = {
  title: "About Program",
  intro: "KIU offers Bachelor of Science program in Computer Science.",
  degreeAwarded: {
    title: "Degree Awarded",
    text: "Bachelor of Science (BSc) in Computer Science.",
  },
  languageOfInstruction: {
    title: "Language of instruction:",
    text: "English",
    note: "Note: Students can be provided with academic support courses in English language, in case of need during their studies at KIU.",
  },
  accreditation: {
    title: "Accreditation",
    points: [
      "Program developed in partnership with TUM and TUM International;",
      "Program approved by International Advisory Board;",
      "Georgian accreditation equivalent obtained.",
    ],
  },
  programGoals: {
    title: "Program Goals",
    intro: "Graduates of the bachelor's program in Computer Science will be able to:",
    goals: [
      { number: "Goal 1:", text: "Apply mathematical foundations, algorithmic principles and computer science theory in the design of computer-based systems and demonstrate the trade-offs involved in design choices." },
      { number: "Goal 2:", text: "Apply a broad understanding of the fundamental theories, concepts, and applications of computer science along with ethical principles in their professional career." },
      { number: "Goal 3:", text: "Use communication, teamwork and leadership skills effectively in the development of complex software systems." },
      { number: "Goal 4:", text: "Attain recognition of the need for an ability to engage in continuing development of their professional knowledge and skills." }
    ],
  },
  learningOutcomes: {
    title: "Learning Outcomes",
    intro: "Upon completion of the program, graduates are able to demonstrate to:",
    sections: [
          {
            subtitle: "Knowledge and understanding",
            items: [
              "PLO1. Analyze a complex computing problem and to apply principles of computing and other relevant disciplines;",
              "PLO2. Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements;"
            ]
          },
          {
            subtitle: "Skills",
            items: [
              "PLO3. Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline;",
              "PLO4. Apply computer science theory and software development fundamentals to produce computing-based solutions for a variety of platforms;",
              "PLO5. Communicate effectively with a range of professional audiences;"
            ]
          },
          {
            subtitle: "Autonomy and responsibility",
            items: [
              "PLO6. Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles;",
              "PLO7. Acquire new knowledge and skills independently after graduation."
            ]
          }
        ]
  },
  futureCareers: {
    title: "Future careers in this profession",
    text: "Graduates of the bachelor's program in Computer Science go on to begin an exciting career in the fields of software engineering, research, and IT consultancy in Georgia as well as internationally. They can find employment in every industrial and economic sector, whether related to mechanical or electrical engineering, mathematics, or medicine. Some examples include the design of complex information systems for commercial use, programming robots, building data networks between banks and corporations, of developing traffic control systems.",
  },
  opportunities: {
    title: "Opportunities",
    items: [
          "Professors from TUM and other international universities from abroad",
          "Seminars and interactive teaching",
          "Access to worldwide library system electronically",
          "Modular well-equipped facilities with state of the art facilities",
          "Individual, student centered approaches of teaching, delivery of seminars and establishing lifelong learning, continuous development practices",
          "Internship at national and international companies."
        ]
  },
  howToApply: {
    title: "How to Apply",
    paragraphs: [
      {
        parts: [
          { text: "Citizens of Georgia apply to KIU programs via National Entrance Exams administered by ", type: "normal" },
          { text: "LEPL NAEC", type: "link", url: "https://naec.ge" },
          { text: ".", type: "normal" },
        ],
      },
      {
        parts: [
          { text: "International students interested in applying to the program, please visit: ", type: "normal" },
          { text: "Admission", type: "link", url: "#" },
        ],
      },
    ],
  },
};
