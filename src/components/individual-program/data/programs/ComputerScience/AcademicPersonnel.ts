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

const academicPersonnelEn: ProgramData["academicPersonnel"] = {
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

const academicPersonnelKa: ProgramData["academicPersonnel"] = {
  title: "აკადემიური პერსონალი",
  sections: [
    {
      subtitle: "აკადემიური პერსონალი",
      members: [
        { name: "ბესიკ დუნდუა", title: "ასოცირებული პროფესორი, კომპიუტერული მეცნიერება", image: BesikDundua },
        { name: "ია მოსაშვილი", title: "ასოცირებული პროფესორი, კომპიუტერული მეცნიერება", image: IaMosasvhili },
        { name: "ნინო დემეტრაშვილი", title: "ასოცირებული პროფესორი, კომპიუტერული მეცნიერება", image: NinoDemetrashvili },
      ],
    },
    {
      subtitle: "საერთაშორისო აკადემიური პერსონალი",
      members: [
        { name: "ევა მარია ქნირში", title: "დამხმარე პროფესორი, კომპიუტერული მეცნიერება", image: EvaKnirsch },
        { name: "ვალტერ ტიჩი", title: "პროფესორი, კომპიუტერული მეცნიერება", image: WalterTichy },
      ],
    },
    {
      subtitle: "მათემატიკა/კომპიუტერული მეცნიერება",
      members: [
        { name: "გიორგი ნადარეიშვილი", title: "დამხმარე პროფესორი", image: GiorgiNadareishvili },
      ],
    },
    {
      subtitle: "სტაჟირებადი პერსონალი",
      members: [
        { name: "კონსტანტინოს კოკკინოსი", title: "მოიწვიე პროფესორი, კომპიუტერული მეცნიერება", image: Konstantinos },
      ],
    },
  ],
};

export const getAcademicPersonnel = (lang: string): ProgramData["academicPersonnel"] => {
  return lang === "ka" ? academicPersonnelKa : academicPersonnelEn;
};
