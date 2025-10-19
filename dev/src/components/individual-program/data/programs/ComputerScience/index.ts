import type { ProgramData } from "../types";
import { aboutSchool } from "./AboutSchool";
import { aboutProgram } from "./AboutProgram";
import { curriculumBrief } from "./CurriculumBrief";
import { minorProgram } from "./MinorProgram";
import { programSupervisor } from "./ProgramSupervisor";
import { academicPersonnel } from "./AcademicPersonnel";
import { tuitionAndCosts } from "./TuitionAndCosts";
import { newsletterArchive } from "./NewsletterArchive";

export const computerScienceProgram: ProgramData = {
  aboutSchool,
  aboutProgram,
  curriculumBrief,
  minorProgram,
  programSupervisor,
  academicPersonnel,
  tuitionAndCosts,
  newsletterArchive,
  id: "CS",
};
