export interface TextPart {
  text: string;
  type: "normal" | "link";
  url?: string;
}

export interface Paragraph {
  parts: TextPart[];
}

export interface AdmissionData {
  intro: {
    title: string;
    subtitle: string;
    paragraphs: Paragraph[];
    programsIntro: string;
    undergraduatePrograms: string[];
    masterText: string;
    masterPrograms: string[];
    doctoralText: string;
    doctoralPrograms: string[];
    closingParagraphs: Paragraph[];
  };
  campus: {
    title: string;
    paragraphs: Paragraph[];
  };
  apply: {
    title: string;
    introText: string;
    links: {
      text: string;
      url: string;
    }[];
  };
  timeline: {
    title: string;
    paragraphs: Paragraph[];
  };
}

export const AdmissionData: AdmissionData = {
  intro: {
    title: "Intro",
    subtitle: "KIU Announces International Students Enrollment",
    paragraphs: [
      {
        parts: [
          {
            text: "Kutaisi International University is announcing a call for international students interested in studying at a newly established international university campus located in Kutaisi, the country of Georgia that offers vibrant multicultural environment, international faculty and modern educational programs.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "KIU is offering internationally competitive, English language programs in:",
            type: "normal",
          },
        ],
      },
    ],
    programsIntro: "",
    undergraduatePrograms: [
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
    ],
    masterText: "Master of Science degree programs:",
    masterPrograms: [
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
    ],
    doctoralText: "Doctoral Programs:",
    doctoralPrograms: [
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
      "Mathematics & Applications",
    ],
    closingParagraphs: [
      {
        parts: [
          {
            text: "Kutaisi International University",
            type: "link",
            url: "#",
          },
          {
            text: ", is located in the city of Kutaisi, Georgia. KIU has opened its doors to the first cohort of students in the fall 2020. The goal of the university is to gradually become an international university with education, science and technology in the region.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "The aim of the university is to prepare highly qualified professionals, workforce and human capital that will promote economic growth and development of the world.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "KIU is a public university in Georgia, created with a special code. It has been created with the initiative and is funded by international charity foundation Cartu. The Foundation is investing over 1 billion Euro into KIU.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "KIU collaborates with Technical University of Munich, the leading European university. The operational model of the university is developed in partnership with TUM and TUM International GmbH. The Honorary President of Kutaisi International University is Professor Dr. Wolfgang A. Herrmann, President Emeritus of TUM. KIU has also expanded its academic network to include the University of Naples Federico II and the University of Bamberg. These partnerships support the implementation of dual and double degree programs in line with international standards.",
            type: "normal",
          },
        ],
      },
    ],
  },
  campus: {
    title: "KIU Campus and What We Offer",
    paragraphs: [
      {
        parts: [
          {
            text: "The Kutaisi International University Campus is located in the environmentally clean area near ",
            type: "normal",
          },
          {
            text: "Kutaisi",
            type: "link",
            url: "#",
          },
          {
            text: " (the second largest city in Georgia), spread out on a beautiful 160 hectares of land, surrounded by a forest with a river running through it.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "The Campus is well connected and easy to reach. It is situated 25 km from Kutaisi International Airport and is only 3 hours' drive from the capital city of Georgia - Tbilisi. The Kutaisi International Airport is connected with major European and world destinations. Kutaisi has a bus station and a railway station with regular bus and train routes.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "KIU provides comfortable and fully furnished housing for students and academic personnel. The University offers modern and state-of-the-art laboratories, student facilities, cafeterias, libraries, co-working areas, an interactive learning management system, all of which will create forward thinking technology oriented educational ecosystem.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "To learn more about amenities at KIU, book a dormitory or for a campus tour, please contact us at ",
            type: "normal",
          },
          {
            text: "apply@kiu.edu.ge",
            type: "link",
            url: "mailto:apply@kiu.edu.ge",
          },
        ],
      },
      {
        parts: [
          {
            text: "To book a room at the dormitory, please see guidelines and registration form ",
            type: "normal",
          },
          {
            text: "HERE",
            type: "link",
            url: "#",
          },
        ],
      },
    ],
  },
  apply: {
    title: "How to Apply",
    introText:
      "To see detailed admission procedures and requirements, please follow the relevant link:",
    links: [
      {
        text: "Admission Without the Unified National Examinations for International Students",
        url: "#",
      },
      {
        text: "Admission Without the Unified National Examinations for Citizens of Georgia",
        url: "#",
      },
    ],
  },
  timeline: {
    title: "Admissions Timeline",
    paragraphs: [
      {
        parts: [
          {
            text: "International students can apply to KIU for the 2025-2026 academic year until August 15, 2025.",
            type: "normal",
          },
        ],
      },
      {
        parts: [
          {
            text: "If you have any questions, please call us at Tel: +995 577 477 197 or email ",
            type: "normal",
          },
          {
            text: "international@kiu.edu.ge",
            type: "link",
            url: "mailto:international@kiu.edu.ge",
          },
        ],
      },
    ],
  },
};