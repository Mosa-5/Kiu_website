import type { ProgramData } from "../types";
import { getAboutSchool } from "./AboutSchool";
import { getAboutProgram } from "./AboutProgram";
import { getCurriculumBrief } from "./CurriculumBrief";
import { getMinorProgram } from "./MinorProgram";
import { getProgramSupervisorRamaz } from "./ProgramSupervisorRamaz";
import { getProgramSupervisorBoris } from "./ProgramSupervisorBoris";
import { getAcademicPersonnel } from "./AcademicPersonnel";
import { getTuitionAndCosts } from "./TuitionAndCosts";
import { getNewsletterArchive } from "./NewsletterArchive";

export const getMathematicsProgram = (lang: string): ProgramData => {
  const ramazData = getProgramSupervisorRamaz(lang) as {
    title: string;
    name: string;
    position: string;
    paragraphs: string[];
    image: string;
  };
  
  const borisData = getProgramSupervisorBoris(lang) as {
    title: string;
    name: string;
    position: string;
    paragraphs: string[];
    image: string;
  };

  return {
    id: "Math",
    aboutSchool: getAboutSchool(lang),
    aboutProgram: getAboutProgram(lang),
    curriculumBrief: getCurriculumBrief(lang),
    minorProgram: getMinorProgram(lang),
    programSupervisor: {
      title: lang === "ka" ? "პროგრამის ხელმძღვანელები" : "Program Supervisors",
      supervisors: [
        {
          name: ramazData.name,
          position: ramazData.position,
          paragraphs: ramazData.paragraphs,
          image: ramazData.image,
        },
        {
          name: borisData.name,
          position: borisData.position,
          paragraphs: borisData.paragraphs,
          image: borisData.image,
        }
      ]
    },
    academicPersonnel: getAcademicPersonnel(lang),
    tuitionAndCosts: getTuitionAndCosts(lang),
    newsletterArchive: getNewsletterArchive(lang),
  };
};