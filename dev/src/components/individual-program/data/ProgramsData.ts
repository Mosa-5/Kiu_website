// import { BesikDundua, EvaKnirsch, GiorgiNadareishvili, IaMosasvhili, Konstantinos, NikaGagua, NinoDemetrashvili, WalterTichy } from "@/assets";

// export interface TextPart {
//   text: string;
//   type: "normal" | "link" | "blue";
//   url?: string;
// }

// export interface Paragraph {
//   parts: TextPart[];
// }

// export interface Goal {
//   number: string;
//   text: string;
// }

// export interface PersonnelMember {
//   name: string;
//   title: string;
//   image: string;
// }

// export interface Link {
//   text: string;
//   url: string;
// }

// export interface ProgramData {
//   aboutSchool: {
//     title: string;
//     paragraphs: Paragraph[];
//   };
//   aboutProgram: {
//     title: string;
//     intro: string;
//     degreeAwarded: {
//       title: string;
//       text: string;
//     };
//     languageOfInstruction: {
//       title: string;
//       text: string;
//       note: string;
//     };
//     accreditation: {
//       title: string;
//       points: string[];
//     };
//     programGoals: {
//       title: string;
//       intro: string;
//       goals: Goal[];
//     };
//     learningOutcomes: {
//       title: string;
//       intro: string;
//       sections: {
//         subtitle?: string;
//         items: string[];
//       }[];
//     };
//     futureCareers: {
//       title: string;
//       text: string;
//     };
//     opportunities: {
//       title: string;
//       items: string[];
//     };
//     howToApply: {
//       title: string;
//       paragraphs: Paragraph[];
//     };
//   };
//   curriculumBrief: {
//     title: string;
//     intro: string;
//     concentrations: {
//       title: string;
//       items: string[];
//     };
//     degreeRequirements: {
//       title: string;
//       items: string[];
//     };
//     specialization: {
//       title: string;
//       items: string[];
//     };
//     studyPlanLink: {
//       text: string;
//       url: string;
//     };
//   };
//   minorProgram: {
//     title: string;
//     subtitle: Link[];
//     text: string;
//   };
//   programSupervisor: {
//     title: string;
//     name: string;
//     position: string;
//     paragraphs: string[];
//     image: string;
//   };
//   academicPersonnel: {
//     title: string;
//     sections: {
//       subtitle: string;
//       members: PersonnelMember[];
//     }[];
//   };
//   tuitionAndCosts: {
//     title: string;
//     academicYear: string;
//     sectionTitle: string;
//     points: string[];
//     admissionNote: {
//       text: string;
//       linkText: string;
//       linkUrl: string;
//     };
//   };
//   newsletterArchive: {
//     title: string;
//     description: string;
//     newsletters: Link[];
//   };
// }

// // Array of all programs - index corresponds to the route ID
// export const programsData: ProgramData[] = [
//   // Program 0 - Computer Science
//   {
//     aboutSchool: {
//       title: "About School",
//       paragraphs: [
//         {
//           parts: [
//             { 
//               text: "KIU implements Bachelor of Science program in Computer Science. Program is implemented in English language. KIU welcomes students from Georgia and abroad. Please see below details about the program.", 
//               type: "normal" 
//             }
//           ]
//         },
//         {
//           parts: [
//             { text: "For more information, please contact us at: ", type: "normal" },
//             { text: "cs@kiu.edu.ge", type: "link", url: "mailto:cs@kiu.edu.ge" }
//           ]
//         }
//       ]
//     },
//     aboutProgram: {
//       title: "About Program",
//       intro: "KIU offers Bachelor of Science program in Computer Science.",
//       degreeAwarded: {
//         title: "Degree Awarded",
//         text: "Bachelor of Science (BSc) in Computer Science."
//       },
//       languageOfInstruction: {
//         title: "Language of instruction:",
//         text: "English",
//         note: "Note: Students can be provided with academic support courses in English language, in case of need during their studies at KIU."
//       },
//       accreditation: {
//         title: "Accreditation",
//         points: [
//           "Program developed in partnership with TUM and TUM International;",
//           "Program approved by International Advisory Board;",
//           "Georgian accreditation equivalent obtained."
//         ]
//       },
//       programGoals: {
//         title: "Program Goals",
//         intro: "Graduates of the bachelor's program in Computer Science will be able to:",
//         goals: [
//           { number: "Goal 1:", text: "Apply mathematical foundations, algorithmic principles and computer science theory in the design of computer-based systems and demonstrate the trade-offs involved in design choices." },
//           { number: "Goal 2:", text: "Apply a broad understanding of the fundamental theories, concepts, and applications of computer science along with ethical principles in their professional career." },
//           { number: "Goal 3:", text: "Use communication, teamwork and leadership skills effectively in the development of complex software systems." },
//           { number: "Goal 4:", text: "Attain recognition of the need for an ability to engage in continuing development of their professional knowledge and skills." }
//         ]
//       },
//       learningOutcomes: {
//         title: "Learning Outcomes",
//         intro: "Upon completion of the program, graduates are able to demonstrate to:",
//         sections: [
//           {
//             subtitle: "Knowledge and understanding",
//             items: [
//               "PLO1. Analyze a complex computing problem and to apply principles of computing and other relevant disciplines;",
//               "PLO2. Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements;"
//             ]
//           },
//           {
//             subtitle: "Skills",
//             items: [
//               "PLO3. Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline;",
//               "PLO4. Apply computer science theory and software development fundamentals to produce computing-based solutions for a variety of platforms;",
//               "PLO5. Communicate effectively with a range of professional audiences;"
//             ]
//           },
//           {
//             subtitle: "Autonomy and responsibility",
//             items: [
//               "PLO6. Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles;",
//               "PLO7. Acquire new knowledge and skills independently after graduation."
//             ]
//           }
//         ]
//       },
//       futureCareers: {
//         title: "Future careers in this profession",
//         text: "Graduates of the bachelor's program in Computer Science go on to begin an exciting career in the fields of software engineering, research, and IT consultancy in Georgia as well as internationally. They can find employment in every industrial and economic sector, whether related to mechanical or electrical engineering, mathematics, or medicine. Some examples include the design of complex information systems for commercial use, programming robots, building data networks between banks and corporations, of developing traffic control systems."
//       },
//       opportunities: {
//         title: "Opportunities",
//         items: [
//           "Professors from TUM and other international universities from abroad",
//           "Seminars and interactive teaching",
//           "Access to worldwide library system electronically",
//           "Modular well-equipped facilities with state of the art facilities",
//           "Individual, student centered approaches of teaching, delivery of seminars and establishing lifelong learning, continuous development practices",
//           "Internship at national and international companies."
//         ]
//       },
//       howToApply: {
//         title: "How to Apply",
//         paragraphs: [
//           {
//             parts: [
//               { text: "Citizens of Georgia apply to KIU programs via National Entrance Exams administered by ", type: "normal" },
//               { text: "LEPL NAEC", type: "link", url: "https://naec.ge" },
//               { text: ".", type: "normal" }
//             ]
//           },
//           {
//             parts: [
//               { text: "International students interested in applying to the program, please visit: ", type: "normal" },
//               { text: "Admission", type: "link", url: "#" }
//             ]
//           }
//         ]
//       }
//     },
//     curriculumBrief: {
//       title: "Curriculum Brief",
//       intro: "Major in Computer Science",
//       concentrations: {
//         title: "Concentrations:",
//         items: [
//           "Language Based Technologies",
//           "System Architecture",
//           "Digital Systems",
//           "Databases",
//           "Logic and automated reasoning",
//           "Software Engineering",
//           "Distribution Networks, Computer networks",
//           "Artificial intelligence"
//         ]
//       },
//       degreeRequirements: {
//         title: "BSc Degree Requirements:",
//         items: [
//           "240 ECTS credits",
//           "Internship",
//           "Minor Program in Mathematics or Management",
//           "Capstone Project"
//         ]
//       },
//       specialization: {
//         title: "Specialization via electives",
//         items: [
//           "1. Two Concentrations",
//           "2. Seminar, Elective Courses",
//           "3. Intership, Bachelor thesis"
//         ]
//       },
//       studyPlanLink: {
//         text: "Detailed study plan of the degree program",
//         url: "#"
//       }
//     },
//     minorProgram: {
//       title: "Minor Program",
//       subtitle: [ {text: "Minor Program - Computer Science", url: "/minor/smcs-newsletter-september-2024.pdf"} ],
//       text: "Students from bachelor program of Mathematics or Management can choose minor program in Computer Science (42 ECTS credits)."
//     },
//     programSupervisor: {
//       title: "Program Supervisor",
//       name: "Nika Gagua",
//       position: "Head of the School of Computer Science at Kutaisi International University (KIU).",
//       paragraphs: [
//         "He received his education at Sokhumi State University, Faculty of Mathematics and Computer Science, and then continued his ongoing professional development in modern areas of computer science - web development, software development, data science, DevOps, artificial intelligence, and RAG systems.",
//         "His professional experience includes a 10-year successful career in the technology industry - from IT support specialist to full-stack developer and leadership positions. He worked in fintech companies as a Python and Odoo developer, as well as in international technology companies as a Full-stack developer. Additionally, he collaborated on various projects  as a freelancer, which involved working with diverse programming languages and technology stacks",
//         "In his position as the Head of the School of Computer Sciences at KIU, he considers his mission to implement the latest educational trends and align them with industry requirements. He is focused on systematic updating of the curriculum to ensure students are prepared for successful careers in the modern technological environment and wants to implement Project-Based Learning methodology, which will give students the opportunity to gain practical experience."
//       ],
//       image: NikaGagua
//     },
//     academicPersonnel: {
//       title: "Academic Personnel",
//       sections: [
//         {
//           subtitle: "Academic Personnel",
//           members: [
//             {
//               name: "Besik Dundua",
//               title: "Associate Professor, Computer Science",
//               image: BesikDundua
//             },
//             {
//               name: "Ia Mosashvili",
//               title: "Associate Professor, Computer Science",
//               image: IaMosasvhili
//             },
//             {
//               name: "Nino Demetrashvili",
//               title: "Associate Professor, Computer Science",
//               image: NinoDemetrashvili
//             }
//           ]
//         },
//         {
//           subtitle: "International Academic Personnel",
//           members: [
//             {
//               name: "Eva Maria Knirsch",
//               title: "Adjunct Professor, Computer Science",
//               image: EvaKnirsch
//             },
//             {
//               name: "Walter Tichy",
//               title: "Professor, Computer Science",
//               image: WalterTichy
//             }
//           ]
//         },
//         {
//           subtitle: "Mathematics/Computer Science",
//           members: [
//             {
//               name: "George Nadareishvili",
//               title: "Assistant Professor",
//               image: GiorgiNadareishvili
//             }
//           ]
//         },
//         {
//           subtitle: "Visiting Personnel",
//           members: [
//             {
//               name: "Konstantinos Kokkinos",
//               title: "Invited Professor, Computer Science",
//               image: Konstantinos
//             }
//           ]
//         }
//       ]
//     },
//     tuitionAndCosts: {
//       title: "Tuition Fee and Living Costs",
//       academicYear: "Tuition Fee and Living Costs for 2025-2026 Academic Year",
//       sectionTitle: "International students",
//       points: [
//         "Tuition fee is  5,500 EUR equivalent, in accordance with the exchange rate set by the National Bank of Georgia of the day of payment. (The sum includes all teaching materials);",
//         "Living costs is 5000 EUR/year."
//       ],
//       admissionNote: {
//         text: "International students interested in applying to the program, please visit: ",
//         linkText: "Admission",
//         linkUrl: "/admission"
//       }
//     },
//     newsletterArchive: {
//       title: "SMCS Newsletter Archive",
//       description: "Browse our collection of newsletters by date",
//       newsletters: [
//         { text: "SMCS Newsletter, September 2024", url: "/newsletters/smcs-newsletter-september-2024.pdf" },
//         { text: "SMCS Newsletter, Spring 2024", url: "/newsletters/smcs-newsletter-spring-2024.pdf" },
//         { text: "SMCS Newsletter, January-February-March 2024", url: "/newsletters/smcs-newsletter-jan-feb-mar-2024.pdf" },
//         { text: "SMCS Newsletter, October-November-December 2023", url: "/newsletters/smcs-newsletter-oct-nov-dec-2023.pdf" },
//         { text: "SMCS Newsletter, September 2023", url: "/newsletters/smcs-newsletter-september-2023.pdf" },
//         { text: "SMCS Newsletter, Spring 2023", url: "/newsletters/smcs-newsletter-spring-2023.pdf" },
//         { text: "SMCS Newsletter, November-December 2022", url: "/newsletters/smcs-newsletter-nov-dec-2022.pdf" },
//         { text: "SMCS Newsletter, September-October 2022", url: "/newsletters/smcs-newsletter-sep-oct-2022.pdf" },
//         { text: "SMCS Newsletter, June-July-August 2022", url: "/newsletters/smcs-newsletter-jun-jul-aug-2022.pdf" },
//         { text: "SMCS Newsletter, April-May 2022", url: "/newsletters/smcs-newsletter-apr-may-2022.pdf" },
//         { text: "SMCS Newsletter, March 2022", url: "/newsletters/smcs-newsletter-march-2022.pdf" },
//         { text: "SMCS Newsletter, January-February 2022", url: "/newsletters/smcs-newsletter-jan-feb-2022.pdf" },
//         { text: "SMCS Newsletter, November-December 2021", url: "/newsletters/smcs-newsletter-nov-dec-2021.pdf" },
//         { text: "SMCS Newsletter, September-October 2021", url: "/newsletters/smcs-newsletter-sep-oct-2021.pdf" },
//         { text: "SMCS Newsletter, July 2021", url: "/newsletters/smcs-newsletter-july-2021.pdf" },
//         { text: "SMCS Newsletter, June 2021", url: "/newsletters/smcs-newsletter-june-2021.pdf" },
//         { text: "SMCS Newsletter, April 2021", url: "/newsletters/smcs-newsletter-april-2021.pdf" },
//         { text: "SMCS Newsletter, March 2021", url: "/newsletters/smcs-newsletter-march-2021.pdf" },
//         { text: "SMCS Newsletter, May 2021", url: "/newsletters/smcs-newsletter-may-2021.pdf" }
//       ]
//     }
//   }
//   // Add more programs here as Program 1, Program 2, etc.
//   // Example:
//   // {
//   //   aboutSchool: { ... },
//   //   aboutProgram: { ... },
//   //   // ... rest of the structure
//   // }
// ];