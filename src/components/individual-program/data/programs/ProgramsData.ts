import type { ProgramData } from "./types";
import { getComputerScienceProgram } from "./ComputerScience";
import { getMathematicsProgram } from "./Mathematics";

export const getProgramsData = (lang: string): Record<string, ProgramData> => {
  return {
    computerScience: getComputerScienceProgram(lang),
    mathematics: getMathematicsProgram(lang),
  };
};