// src/data/programs/types.ts
export interface TextPart {
  text: string;
  type: "normal" | "link" | "blue";
  url?: string;
}

export interface Paragraph {
  parts: TextPart[];
}

export interface Goal {
  number: string;
  text: string;
}

export interface PersonnelMember {
  name: string;
  title: string;
  image: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface ProgramData {
  id: string;
  aboutSchool: {
    title: string;
    paragraphs: Paragraph[];
  };
  aboutProgram: {
    title: string;
    intro: string;
    degreeAwarded: { title: string; text: string };
    languageOfInstruction: { title: string; text: string; note: string };
    accreditation: { title: string; points: string[] };
    programGoals: { title: string; intro: string; goals: Goal[] };
    learningOutcomes: {
      title: string;
      intro: string;
      sections: { subtitle?: string; items: string[] }[];
    };
    futureCareers: { title: string; text: string };
    opportunities: { title: string; items: string[] };
    howToApply: { title: string; paragraphs: Paragraph[] };
  };
  curriculumBrief: {
    title: string;
    intro: string;
    concentrations: { title: string; items: string[] };
    degreeRequirements: { title: string; items: string[] };
    specialization: { title: string; items: string[] };
    studyPlanLink: Link;
  };
  minorProgram: {
    title: string;
    subtitle: Link[];
    text: string;
  };
  programSupervisor: {
    title: string;
    name: string;
    position: string;
    paragraphs: string[];
    image: string;
  };
  academicPersonnel: {
    title: string;
    sections: { subtitle: string; members: PersonnelMember[] }[];
  };
  tuitionAndCosts: {
    title: string;
    academicYear: string;
    sectionTitle: string;
    points: string[];
    admissionNote: { text: string; linkText: string; linkUrl: string };
  };
  newsletterArchive: {
    title: string;
    description: string;
    newsletters: Link[];
  };
}
