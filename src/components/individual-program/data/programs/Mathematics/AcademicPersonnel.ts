import type { ProgramData } from "../types";
import {
  GeorgeOniani,
  AlexanderMeskhi,
  GeorgeChelidze,
  MarkusNeuhauser,
  FlorianRupp,
  BorisVexler,
  AnzorBeridze,
  JakobWagner,
  MatthewZabka,
  GiorgiNadareishvili,
} from "@/assets";

const academicPersonnelEn: ProgramData["academicPersonnel"] = {
  title: "Academic Personnel",
  sections: [
    {
      subtitle: "Academic Personnel",
      members: [
        { name: "George Oniani", title: "Professor, Analysis", image: GeorgeOniani },
        { name: "Alexander Meskhi", title: "Professor, Analysis", image: AlexanderMeskhi },
        { name: "George Chelidze", title: "Associate Professor, Analysis", image: GeorgeChelidze },
      ],
    },
    {
      subtitle: "International Academic Personnel",
      members: [
        { name: "Markus Neuhauser", title: "Professor, Mathematics", image: MarkusNeuhauser },
        { name: "Florian Rupp", title: "Professor, Mathematics", image: FlorianRupp },
        { name: "Boris Vexler", title: "Adjunct Professor, Mathematics", image: BorisVexler },
      ],
    },
    {
      subtitle: "Visiting Personnel",
      members: [
        { name: "Anzor Beridze", title: "Visiting Professor", image: AnzorBeridze },
        { name: "Jakob Maximilian Wagner", title: "Invited Lecturer, Mathematics", image: JakobWagner },
        { name: "Matthew Zabka", title: "Visiting Professor", image: MatthewZabka },
      ],
    },
    {
      subtitle: "Mathematics / Computer Science",
      members: [
        { name: "George Nadareishvili", title: "Assistant Professor", image: GiorgiNadareishvili },
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
        { name: "გიორგი ონიანი", title: "პროფესორი, ანალიზი", image: GeorgeOniani },
        { name: "ალექსანდრე მესხი", title: "პროფესორი, ანალიზი", image: AlexanderMeskhi },
        { name: "გიორგი ჭელიძე", title: "ასოცირებული პროფესორი, ანალიზი", image: GeorgeChelidze },
      ],
    },
    {
      subtitle: "საერთაშორისო აკადემიური პერსონალი",
      members: [
        { name: "მარკუს ნოიჰაუზერი", title: "პროფესორი, მათემატიკა", image: MarkusNeuhauser },
        { name: "ფლორიან რუპი", title: "პროფესორი, მათემატიკა", image: FlorianRupp },
        { name: "ბორის ვექსლერი", title: "მოწვეული პროფესორი, მათემატიკა", image: BorisVexler },
      ],
    },
    {
      subtitle: "მოწვეული პერსონალი",
      members: [
        { name: "ანზორ ბერიძე", title: "მოწვეული პროფესორი", image: AnzorBeridze },
        { name: "იაკობ ვაგნერი", title: "მოწვეული ლექტორი, მათემატიკა", image: JakobWagner },
        { name: "მეთიუ ზაბკა", title: "მოწვეული პროფესორი", image: MatthewZabka },
      ],
    },
    {
      subtitle: "მათემატიკა / კომპიუტერული მეცნიერება",
      members: [
        { name: "გიორგი ნადარეიშვილი", title: "ასისტენტ-პროფესორი", image: GiorgiNadareishvili },
      ],
    },
  ],
};

export const getAcademicPersonnel = (lang: string): ProgramData["academicPersonnel"] => {
  return lang === "ka" ? academicPersonnelKa : academicPersonnelEn;
};
