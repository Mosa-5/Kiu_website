import type { ProgramData } from "../types";
import { getAboutSchool } from "./AboutSchool";
import { getAboutProgram } from "./AboutProgram";
import { getCurriculumBrief } from "./CurriculumBrief";
import { getMinorProgram } from "./MinorProgram";
import { getProgramSupervisor } from "./ProgramSupervisor";
import { getAcademicPersonnel } from "./AcademicPersonnel";
import { getTuitionAndCosts } from "./TuitionAndCosts";
import { getNewsletterArchive } from "./NewsletterArchive";

export const getComputerScienceProgram = (lang: string): ProgramData => {
  return {
    id: "CS",
    aboutSchool: getAboutSchool(lang),
    aboutProgram: getAboutProgram(lang),
    curriculumBrief: getCurriculumBrief(lang),
    minorProgram: getMinorProgram(lang),
    programSupervisor: getProgramSupervisor(lang),
    academicPersonnel: getAcademicPersonnel(lang),
    tuitionAndCosts: getTuitionAndCosts(lang),
    newsletterArchive: getNewsletterArchive(lang),
  };
};
