import type { ProgramData } from "../types";
import { NikaGagua } from "@/assets";

const programSupervisorEn: ProgramData["programSupervisor"] = {
  title: "Program Supervisor",
  name: "Nika Gagua",
  position: "Head of the School of Computer Science at Kutaisi International University (KIU).",
  paragraphs: [
    "He received his education at Sokhumi State University, Faculty of Mathematics and Computer Science, and then continued his ongoing professional development in modern areas of computer science - web development, software development, data science, DevOps, artificial intelligence, and RAG systems.",
    "His professional experience includes a 10-year successful career in the technology industry - from IT support specialist to full-stack developer and leadership positions. He worked in fintech companies as a Python and Odoo developer, as well as in international technology companies as a Full-stack developer. Additionally, he collaborated on various projects as a freelancer, which involved working with diverse programming languages and technology stacks.",
    "In his position as the Head of the School of Computer Sciences at KIU, he considers his mission to implement the latest educational trends and align them with industry requirements. He is focused on systematic updating of the curriculum to ensure students are prepared for successful careers in the modern technological environment and wants to implement Project-Based Learning methodology, which will give students the opportunity to gain practical experience.",
  ],
  image: NikaGagua,
};

const programSupervisorKa: ProgramData["programSupervisor"] = {
  title: "პროგრამის ზედამხედველი",
  name: "ნიკა გაგუა",
  position: "კომპიუტერული მეცნიერების სკოლის ხელმძღვანელი, ქუთაისის საერთაშორისო უნივერსიტეტი (KIU).",
  paragraphs: [
    "მან მიიღო განათლება სოხუმის სახელმწიფო უნივერსიტეტში, მათემატიკისა და კომპიუტერული მეცნიერების ფაკულტეტზე, ხოლო შემდეგ გააგრძელა პროფესიული განვითარება თანამედროვე კომპიუტერული მეცნიერების მიმართულებებში - ვებ განვითარების, პროგრამული უზრუნველყოფის განვითარების, მონაცემთა მეცნიერების, DevOps, ხელოვნური ინტელექტისა და RAG სისტემებში.",
    "მისი პროფესიული გამოცდილება მოიცავს 10-წლიანი წარმატებული კარიერას ტექნოლოგიების ინდუსტრიაში - IT მხარდაჭერის სპეციალისტიდან სრულ სტეკის დეველოპერამდე და ხელმძღვანელობის პოზიციებამდე. ის მუშაობდა ფინტექ კომპანიებში Python და Odoo დეველოპერად, ასევე საერთაშორისო ტექნოლოგიურ კომპანიებში როგორც Full-stack დეველოპერი. დამატებით, ის თანამშრომლობდა სხვადასხვა პროექტებზე როგორც ფრილანსერი, რაც მოიცავდა მრავალფეროვანი პროგრამირების ენების და ტექნოლოგიური სტეკების გამოყენებას.",
    "KIU-ს კომპიუტერული მეცნიერების სკოლის ხელმძღვანელის პოზიციაზე მისი მისიაა თანამედროვე სასწავლო ტრენდების დანერგვა და მათი ინდუსტრიის მოთხოვნებთან დაკავშირება. ის კონცენტრირებულია სასწავლო გეგმის სისტემატურ განახლებაზე, რათა სტუდენტები მზად იყვნენ წარმატებული კარიერისთვის თანამედროვე ტექნოლოგიურ გარემოში, და გეგმავს Project-Based Learning მეთოდის დანერგვას, რაც სტუდენტებს პრაქტიკული გამოცდილების მიღების შესაძლებლობას მისცემს.",
  ],
  image: NikaGagua,
};

export const getProgramSupervisor = (lang: string): ProgramData["programSupervisor"] => {
  return lang === "ka" ? programSupervisorKa : programSupervisorEn;
};
