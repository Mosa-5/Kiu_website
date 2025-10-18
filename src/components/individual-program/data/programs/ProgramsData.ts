import type { ProgramData } from "./types";
import { getComputerScienceProgram } from "./ComputerScience";

export const getProgramsData = (lang: string): Record<string, ProgramData> => {
  return {
    computerScience: getComputerScienceProgram(lang),
  };
};