import type { ProgramData } from "../types";
import { BorisVexler } from "@/assets";

const programSupervisorEn: ProgramData["programSupervisor"] = {
  title: "Program Supervisor",
  name: "Prof. Boris Vexler",
  position: "Program Supervisor of the Mathematics Program at Kutaisi International University (KIU).",
  paragraphs: [
    "Prof. Boris Vexler studied at Lomonosov Moscow State University and Heidelberg University. He obtained his doctorate degree at Heidelberg in 2004 and his lecturer qualification at the University of Graz in 2008.",
    "After completing his doctorate, he worked at the Johann Radon Institute for Computational and Applied Mathematics (RICAM) of the Austrian Academy of Sciences in Linz and, in 2008, was appointed professor for control theory at TUM. After rejecting offers from the universities of Vienna and Düsseldorf, Prof. Vexler was appointed to the Chair of Optimal Control at TUM in 2013.",
    "He has served as a speaker of the International Research Training Group IGDK 1754 since 2012 and, from 2016 to 2019, was the dean of studies of the TUM Department of Mathematics.",
    "Prof. Vexler’s research area is the numerical analysis of problems described with partial differential equations (PDEs). The focus of this work is on developing and analyzing efficient numerical algorithms to solve optimization problems with PDEs.",
  ],
  image: BorisVexler,
};

const programSupervisorKa: ProgramData["programSupervisor"] = {
  title: "პროგრამის ხელმძღვანელი",
  name: "პროფ. ბორის ვექსლერი",
  position: "ქუთაისის საერთაშორისო უნივერსიტეტის მათემატიკის პროგრამის ხელმძღვანელი.",
  paragraphs: [
    "პროფ. ბორის ვექსლერმა უმაღლესი განათლება მიიღო ლომონოსოვის სახელობის მოსკოვის სახელმწიფო უნივერსიტეტსა და ჰაიდელბერგის უნივერსიტეტში. 2004 წელს მან მიიღო დოქტორის აკადემიური ხარისხი ჰაიდელბერგის უნივერსიტეტში, ხოლო ლექტორის კვალიფიკაცია მოიპოვა გრაცის უნივერსიტეტში 2008 წელს.",
    "დოქტორანტურის დასრულების შემდეგ იგი მუშაობდა ქ. ლინცში, ავსტრიის მეცნიერებათა აკადემიის იოჰან რადონის სახელობის გამოთვლითი და გამოყენებითი მათემატიკის ინსტიტუტში და 2008 წელს დაინიშნა მიუნხენის ტექნიკური უნივერსიტეტის კონტროლის თეორიის პროფესორის პოზიციაზე.",
    "მას შემდეგ, რაც უარი თქვა ვენისა და დიუსელდორფის უნივერსიტეტების შემოთავაზებებზე, 2013 წელს პროფ. ვექსლერი დაინიშნა ოპტიმალური კონტროლის ხელმძღვანელად მიუნხენის ტექნიკურ უნივერსიტეტში. 2012 წლიდან ის არის საერთაშორისო კვლევითი სატრენინგო ცენტრის IGDK 1754 სპიკერი. 2016-2019 წლებში იყო მიუნხენის ტექნიკური უნივერსიტეტის მათემატიკის დეპარტამენტის დეკანი.",
    "პროფ. ვექსლერის კვლევით სფეროს წარმოადგენს იმ ამოცანების რიცხვითი ანალიზი, რომლებიც აღიწერებიან კერძო წარმოებულიანი დიფერენციალური განტოლებებით. მისი შრომების მიზანია იმ ეფექტური რიცხვითი ალგორითმების შემუშავება და ანალიზი, რომლებიც ხსნიან ოპტიმიზაციის პრობლემებს კერძო წარმოებულიან დიფერენციალური განტოლებების სისტემებში.",
  ],
  image: BorisVexler,
};

export const getProgramSupervisorBoris = (
  lang: string
): ProgramData["programSupervisor"] => {
  return lang === "ka" ? programSupervisorKa : programSupervisorEn;
};
