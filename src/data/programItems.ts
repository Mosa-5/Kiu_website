import mathAndApplCard from "@/assets/programImages/math&applCard.jpg";
import csCard from "@/assets/programImages/csCard.jpg";
import mathCard from "@/assets/programImages/mathCard.jpg";
import mnscCard from "@/assets/programImages/mnscCard.jpg";
import designCard from "@/assets/programImages/designCard.jpg";
import psychCard from "@/assets/programImages/psychCard.jpg";
import lawCard from "@/assets/programImages/lawCard.jpg";
import medCard from "@/assets/programImages/medCard.jpg";
import intCard from "@/assets/programImages/intCard.jpg";
import embadCard from "@/assets/programImages/embadCard.jpg";
import financeCard from "@/assets/programImages/financeCard.jpg";

const programs = [
  {
    id: "mathsAndApplications",
    category: "Bachelor's",
    name: "Mathematics & Applications",
    description:
      "Foundations of Artificial Intelligence, Scientific Computing, and Financial Mathematics",
    image: mathAndApplCard,
  },
  {
    id: "computerscience",
    category: "Bachelor's",
    name: "Computer Science, BSc",
    description:
      "Software Development, Data Structures & Algorithms, and Cybersecurity",
    image: csCard,
  },
  {
    id: "maths",
    category: "Bachelor's",
    name: "Mathematics, BSc",
    description:
      "Pure Mathematics, Applied Statistics, and Mathematical Modeling",
    image: mathCard,
  },
  {
    id: "fin",
    category: "Bachelor's",
    name: "Management, BSc",
    description:
      "Organizational Behavior, Strategic Management, and Project Leadership",
    image: mnscCard,
  },
  {
    id: "fin",
    category: "Bachelor's",
    name: "Design",
    description:
      "Graphic Design, UX/UI Principles, and Creative Project Development",
    image: designCard,
  },
  {
    id: "fin",
    category: "Bachelor's",
    name: "Psychology",
    description:
      "Cognitive Psychology, Behavioral Research, and Mental Health Studies",
    image: psychCard,
  },
  {
    id: "law",
    category: "Bachelor's",
    name: "Law",
    description:
      "Constitutional Law, International Law, and Legal Practice Fundamentals",
    image: lawCard,
  },
  // Single-Cycle Programs
  {
    id: "medical",
    category: "Single-Cycle",
    name: "Medicine",
    description:
      "Foundations of Clinical Practice, Medical Research, and Patient Care",
    image: medCard,
  },
  // Master’s Programs
  {
    id: "intprop",
    category: "Master's",
    name: "Intellectual Property, Innovations and Entrepreneurship",
    description:
      "Innovation Management, Intellectual Property Law, and Entrepreneurial Strategy",
    image: intCard,
  },
  {
    id: "fin",
    category: "Master's",
    name: "Embedded Computing System",
    description:
      "Advanced Microcontrollers, IoT Design, and Real-Time Systems Engineering",
    image: embadCard,
  },
  {
    id: "fin",
    category: "Master's",
    name: "Finance and Information Management, MSc",
    description:
      "Financial Analytics, Information Systems, and Strategic Risk Management",
    image: financeCard,
  },
];

export default programs;

