import mathAndApplCard from "@/assets/programImages/math&applCard.webp";
import csCard from "@/assets/programImages/csCard.webp";
import mathCard from "@/assets/programImages/mathCard.webp";
import mnscCard from "@/assets/programImages/mnscCard.webp";
import designCard from "@/assets/programImages/designCard.webp";
import psychCard from "@/assets/programImages/psychCard.webp";
import lawCard from "@/assets/programImages/lawCard.webp";
import medCard from "@/assets/programImages/medCard.webp";
import intCard from "@/assets/programImages/intCard.webp";
import embadCard from "@/assets/programImages/embadCard.webp";
import financeCard from "@/assets/programImages/financeCard.webp";

const programs = [
  {
    id: "mathsAndApplications",
    category: "Bachelor",
    name: {
      en: "Mathematics & Applications",
      ka: "მათემატიკა და აპლიკაციები",
    },
    description: {
      en: "Foundations of Artificial Intelligence, Scientific Computing, and Financial Mathematics",
      ka: "ხელოვნური ინტელექტის საფუძვლები, სამეცნიერო კომპიუტინგი და ფინანსური მათემატიკა",
    },
    image: mathAndApplCard,
  },
  {
    id: "computerScience",
    category: "Bachelor",
    name: {
      en: "Computer Science, BSc",
      ka: "კომპიუტერული მეცნიერება, ბაკალავრი",
    },
    description: {
      en: "Software Development, Data Structures & Algorithms, and Cybersecurity",
      ka: "პროგრამული უზრუნველყოფის დეველოპმენტი, მონაცემთა სტრუქტურები და ალგორითმები, კიბერუსafety",
    },
    image: csCard,
  },
  {
    id: "mathematics",
    category: "Bachelor",
    name: {
      en: "Mathematics, BSc",
      ka: "მათემატიკა, ბაკალავრი",
    },
    description: {
      en: "Pure Mathematics, Applied Statistics, and Mathematical Modeling",
      ka: "სუფთა მათემატიკა, გამოყენებითი სტატისტიკა და მათემატიკური მოდელირება",
    },
    image: mathCard,
  },
  {
    id: "management",
    category: "Bachelor",
    name: {
      en: "Management, BSc",
      ka: "მენეჯმენტი, ბაკალავრი",
    },
    description: {
      en: "Organizational Behavior, Strategic Management, and Project Leadership",
      ka: "ორგანიზაციული ქცევა, სტრატეგიული მენეჯმენტი და პროექტის ხელმძღვანელობა",
    },
    image: mnscCard,
  },
  {
    id: "design",
    category: "Bachelor",
    name: {
      en: "Design",
      ka: "დიზაინი",
    },
    description: {
      en: "Graphic Design, UX/UI Principles, and Creative Project Development",
      ka: "გრაფიკული დიზაინი, UX/UI პრინციპები და კრეატიული პროექტის დეველოპმენტი",
    },
    image: designCard,
  },
  {
    id: "psychology",
    category: "Bachelor",
    name: {
      en: "Psychology",
      ka: "ფსიქოლოგია",
    },
    description: {
      en: "Cognitive Psychology, Behavioral Research, and Mental Health Studies",
      ka: "კოგნიტური ფსიქოლოგია, ქცევითი კვლევა და ფსიქიკური ჯანმრთელობის კვლევა",
    },
    image: psychCard,
  },
  {
    id: "law",
    category: "Bachelor",
    name: {
      en: "Law",
      ka: "იურისპრუდენცია",
    },
    description: {
      en: "Constitutional Law, International Law, and Legal Practice Fundamentals",
      ka: "საკონსტიტუციო სამართალი, საერთაშორისო სამართალი და სამართლებრივი პრაქტიკის საფუძვლები",
    },
    image: lawCard,
  },
  {
    id: "medicine",
    category: "Single-Cycle",
    name: {
      en: "Medicine",
      ka: "მედიცინა",
    },
    description: {
      en: "Foundations of Clinical Practice, Medical Research, and Patient Care",
      ka: "კლინიკური პრაქტიკის საფუძვლები, სამედიცინო კვლევა და პაციენტის მოვლა",
    },
    image: medCard,
  },
  {
    id: "intellectualProperty",
    category: "Master",
    name: {
      en: "Intellectual Property, Innovations and Entrepreneurship",
      ka: "ინტელექტუალური საკუთრება, ინოვაციები და მეწარმეობა",
    },
    description: {
      en: "Innovation Management, Intellectual Property Law, and Entrepreneurial Strategy",
      ka: "ინოვაციების მენეჯმენტი, ინტელექტუალური საკუთრების სამართალი და მეწარმეობის სტრატეგია",
    },
    image: intCard,
  },
  {
    id: "embeddedComputing",
    category: "Master",
    name: {
      en: "Embedded Computing System",
      ka: "ჩაშენებული კომპიუტერული სისტემები",
    },
    description: {
      en: "Advanced Microcontrollers, IoT Design, and Real-Time Systems Engineering",
      ka: "მიკროკონტროლერების პროგრამირება, IoT დიზაინი და რეალური დროის სისტემების ინჟინერინგი",
    },
    image: embadCard,
  },
  {
    id: "financeAndInformationManagement",
    category: "Master",
    name: {
      en: "Finance and Information Management, MSc",
      ka: "ფინანსები და ინფორმაციის მენეჯმენტი, მაგისტრი",
    },
    description: {
      en: "Financial Analytics, Information Systems, and Strategic Risk Management",
      ka: "ფინანსური ანალიტიკა, ინფორმაციული სისტემები და სტრატეგიული რისკების მენეჯმენტი",
    },
    image: financeCard,
  },
];

export default programs;
