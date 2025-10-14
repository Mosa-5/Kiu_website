import type { ProgramData } from "../types";
import {
  BesikDundua,
  EvaKnirsch,
  GiorgiNadareishvili,
  IaMosasvhili,
  Konstantinos,
  NinoDemetrashvili,
  WalterTichy,
} from "@/assets";

export const academicPersonnel: ProgramData["academicPersonnel"] = {
  title: "Academic Personnel",
  sections: [
    {
      subtitle: "Academic Personnel",
      members: [
        { name: "Besik Dundua", title: "Associate Professor, Computer Science", image: BesikDundua },
        { name: "Ia Mosashvili", title: "Associate Professor, Computer Science", image: IaMosasvhili },
        { name: "Nino Demetrashvili", title: "Associate Professor, Computer Science", image: NinoDemetrashvili },
      ],
    },
    {
      subtitle: "International Academic Personnel",
      members: [
        { name: "Eva Maria Knirsch", title: "Adjunct Professor, Computer Science", image: EvaKnirsch },
        { name: "Walter Tichy", title: "Professor, Computer Science", image: WalterTichy },
      ],
    },
    {
      subtitle: "Mathematics/Computer Science",
      members: [
        { name: "George Nadareishvili", title: "Assistant Professor", image: GiorgiNadareishvili },
      ],
    },
    {
      subtitle: "Visiting Personnel",
      members: [
        { name: "Konstantinos Kokkinos", title: "Invited Professor, Computer Science", image: Konstantinos },
      ],
    },
  ],
};
