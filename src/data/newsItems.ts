import i18n from "@/i18n";

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category?: string;
  image: string;
  imageSm: string;
}

import {
  news1,
  news2,
  news3,
  news4,
  news5,
  news6,
  news1Sm,
  news2Sm,
  news3Sm,
  news4Sm,
  news5Sm,
  news6Sm,
} from "@/assets";

const newsItemsEn: NewsItem[] = [
  {
    id: "academic-registration-fall-2025",
    date: "Sep 15, 2025",
    title: "Academic Registration for Fall 2025-2026 Now Open",
    description:
      "Please see the 2025-2026 Fall Semester course schedule available online. Registration begins today for all returning students.",
    category: "Bachelor's",
    image: news1,
    imageSm: news1Sm,
  },
  {
    id: "kiu-innovation-summer-school-closing",
    date: "Sep 14, 2025",
    title:
      "At Kutaisi International University (KIU), the closing ceremony of the 2025 Innovation Summer School",
    description:
      "Local tech companies collaborate to establish a new research and development center focusing on sustainable technology solutions.",
    category: "Campus",
    image: news2,
    imageSm: news2Sm,
  },
  {
    id: "community-health-initiative-launches",
    date: "Sep 13, 2025",
    title: "Community Health Initiative Launches Citywide",
    description:
      "A comprehensive health program begins this month, offering free screenings and wellness workshops to residents across all districts.",
    category: "Master's",
    image: news3,
    imageSm: news3Sm,
  },
  {
    id: "transportation-infrastructure-updates",
    date: "Sep 12, 2025",
    title: "Transportation Infrastructure Updates Begin",
    description:
      "Major improvements to public transit systems commence with new bus routes and upgraded railway connections throughout the metropolitan area.",
    category: "Doctoral",
    image: news4,
    imageSm: news4Sm,
  },
  {
    id: "environmental-protection-measures",
    date: "Sep 11, 2025",
    title: "Environmental Protection Measures Implemented",
    description:
      "New regulations for green building standards and renewable energy incentives take effect to support sustainable urban development.",
    category: "Single-Cycle",
    image: news5,
    imageSm: news5Sm,
  },
  {
    id: "education-reform-bill-passes",
    date: "Sep 10, 2025",
    title: "Education Reform Bill Passes Final Review",
    description:
      "Comprehensive education legislation receives approval, introducing updated curricula and enhanced funding for public school systems.",
    category: "Bachelor's",
    image: news6,
    imageSm: news6Sm,
  },
  {
    id: "university-science-laboratory-opens",
    date: "Sep 9, 2025",
    title: "University Opens New Science Laboratory",
    description:
      "The state-of-the-art lab will focus on renewable energy experiments and cutting-edge biological research.",
    category: "Campus",
    image: news1,
    imageSm: news1Sm,
  },
  {
    id: "sports-complex-expansion-announced",
    date: "Sep 8, 2025",
    title: "Sports Complex Expansion Announced",
    description:
      "Plans approved to expand the city's sports facilities, including new arenas and community recreation centers.",
    category: "Master's",
    image: news2,
    imageSm: news2Sm,
  },
  {
    id: "historic-building-restored-downtown",
    date: "Sep 7, 2025",
    title: "Historic Building Restored Downtown",
    description:
      "A landmark structure receives preservation efforts and will reopen as a cultural and educational hub.",
    category: "Doctoral",
    image: news3,
    imageSm: news3Sm,
  },
  {
    id: "public-safety-awareness-campaign",
    date: "Sep 6, 2025",
    title: "Public Safety Awareness Campaign Launched",
    description:
      "Officials begin outreach programs to increase safety education across neighborhoods.",
    category: "Single-Cycle",
    image: news4,
    imageSm: news4Sm,
  },
];

const newsItemsKa: NewsItem[] = [
  {
    id: "academic-registration-fall-2025",
    date: "15 სექტემბერი, 2025",
    title: "აკადემიური რეგისტრაცია შემოდგომა 2025-2026-ისთვის ახლა გახსნილია",
    description:
      "გთხოვთ იხილოთ 2025-2026 შემოდგომის სემესტრის საკურსო განრიგი ხელმისაწვდომი ონლაინ. რეგისტრაცია იწყება დღეს ყველა დაბრუნებული სტუდენტისთვის.",
    category: "Bachelor's",
    image: news1,
    imageSm: news1Sm,
  },
  {
    id: "kiu-innovation-summer-school-closing",
    date: "14 სექტემბერი, 2025",
    title:
      "ქუთაისის საერთაშორისო უნივერსიტეტში (KIU), 2025 წლის ინოვაციური ზაფხულის სკოლის დახურვის ცერემონია",
    description:
      "ადგილობრივი ტექ-კომპანიები თანამშრომლობენ კვლევისა და განვითარების ახალი ცენტრის შესაქმნელად, რომელიც ფოკუსირებულია მდგრადი ტექნოლოგიური გადაწყვეტილებების შემუშავებაზე.",
    category: "Campus",
    image: news2,
    imageSm: news2Sm,
  },
  {
    id: "community-health-initiative-launches",
    date: "13 სექტემბერი, 2025",
    title: "საზოგადოებრივი ჯანმრთელობის ინიციატივა იწყება ქალაქის მასშტაბით",
    description:
      "ყოვლისმომცველი ჯანმრთელობის პროგრამა იწყება ამ თვეში, რომელიც სთავაზობს უფასო გამოკვლევებსა და ჯანმრთელობის სემინარებს ყველა უბნის მაცხოვრებლებს.",
    category: "Master's",
    image: news3,
    imageSm: news3Sm,
  },
  {
    id: "transportation-infrastructure-updates",
    date: "12 სექტემბერი, 2025",
    title: "სატრანსპორტო ინფრასტრუქტურის განახლება იწყება",
    description:
      "საზოგადოებრივი ტრანსპორტის სისტემების მთავარი გაუმჯობესება იწყება ახალი ავტობუსის მარშრუტებითა და განახლებული რკინიგზის შეერთებებით მეტროპოლიტენური ტერიტორიის მასშტაბით.",
    category: "Doctoral",
    image: news4,
    imageSm: news4Sm,
  },
  {
    id: "environmental-protection-measures",
    date: "11 სექტემბერი, 2025",
    title: "გარემოს დაცვის ზომები დანერგილია",
    description:
      "ახალი რეგულაციები მწვანე სამშენებლო სტანდარტებისა და განახლებადი ენერგიის სტიმულებისთვის ძალაში შედის მდგრადი ურბანული განვითარების მხარდასაჭერად.",
    category: "Single-Cycle",
    image: news5,
    imageSm: news5Sm,
  },
  {
    id: "education-reform-bill-passes",
    date: "10 სექტემბერი, 2025",
    title: "განათლების რეფორმის კანონპროექტი გაიარა საბოლოო განხილვა",
    description:
      "ყოვლისმომცველმა საგანმანათლებლო კანონმდებლობამ მიიღო დამტკიცება, რომელიც შემოაქვს განახლებული სასწავლო გეგმები და გაძლიერებული დაფინანსება საჯარო სასკოლო სისტემებისთვის.",
    category: "Bachelor's",
    image: news6,
    imageSm: news6Sm,
  },
  {
    id: "university-science-laboratory-opens",
    date: "9 სექტემბერი, 2025",
    title: "უნივერსიტეტი ხსნის ახალ სამეცნიერო ლაბორატორიას",
    description:
      "უახლესი ლაბორატორია ფოკუსირებული იქნება განახლებადი ენერგიის ექსპერიმენტებსა და წამყვან ბიოლოგიურ კვლევაზე.",
    category: "Campus",
    image: news1,
    imageSm: news1Sm,
  },
  {
    id: "sports-complex-expansion-announced",
    date: "8 სექტემბერი, 2025",
    title: "სპორტული კომპლექსის გაფართოება გამოცხადდა",
    description:
      "დამტკიცდა გეგმები ქალაქის სპორტული დაწესებულებების გაფართოებისთვის, მათ შორის ახალი არენები და საზოგადოებრივი რეკრეაციული ცენტრები.",
    category: "Master's",
    image: news2,
    imageSm: news2Sm,
  },
  {
    id: "historic-building-restored-downtown",
    date: "7 სექტემბერი, 2025",
    title: "ისტორიული შენობა აღდგენილია ცენტრში",
    description:
      "ნიშანდობლივი სტრუქტურა იღებს კონსერვაციის ძალისხმევას და კვლავ გაიხსნება როგორც კულტურული და საგანმანათლებლო ცენტრი.",
    category: "Doctoral",
    image: news3,
    imageSm: news3Sm,
  },
  {
    id: "public-safety-awareness-campaign",
    date: "6 სექტემბერი, 2025",
    title: "საზოგადოებრივი უსაფრთხოების ცნობიერების კამპანია დაიწყო",
    description:
      "ოფიციალური პირები იწყებენ საინფორმაციო პროგრამებს უსაფრთხოების განათლების გასაზრდელად უბნებში.",
    category: "Single-Cycle",
    image: news4,
    imageSm: news4Sm,
  },
];

const getNewsItems = (lang?: string): NewsItem[] => {
  const language = lang || i18n.language;
  return language === "ka" ? newsItemsKa : newsItemsEn;
};

export { getNewsItems };

export { newsItemsEn, newsItemsKa };
