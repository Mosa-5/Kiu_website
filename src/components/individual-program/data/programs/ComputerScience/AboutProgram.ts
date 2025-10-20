import type { ProgramData } from "../types";

const aboutProgramEn: ProgramData["aboutProgram"] = {
  title: "About Program",
  intro: "KIU offers Bachelor of Science program in Computer Science.",
  degreeAwarded: {
    title: "Degree Awarded",
    text: "Bachelor of Science (BSc) in Computer Science.",
  },
  languageOfInstruction: {
    title: "Language of instruction:",
    text: "English",
    note: "Note: Students can be provided with academic support courses in English language, in case of need during their studies at KIU.",
  },
  accreditation: {
    title: "Accreditation",
    points: [
      "Program developed in partnership with TUM and TUM International;",
      "Program approved by International Advisory Board;",
      "Georgian accreditation equivalent obtained.",
    ],
  },
  programGoals: {
    title: "Program Goals",
    intro: "Graduates of the bachelor's program in Computer Science will be able to:",
    goals: [
      { number: "Goal 1:", text: "Apply mathematical foundations, algorithmic principles and computer science theory in the design of computer-based systems and demonstrate the trade-offs involved in design choices." },
      { number: "Goal 2:", text: "Apply a broad understanding of the fundamental theories, concepts, and applications of computer science along with ethical principles in their professional career." },
      { number: "Goal 3:", text: "Use communication, teamwork and leadership skills effectively in the development of complex software systems." },
      { number: "Goal 4:", text: "Attain recognition of the need for an ability to engage in continuing development of their professional knowledge and skills." }
    ],
  },
  learningOutcomes: {
    title: "Learning Outcomes",
    intro: "Upon completion of the program, graduates are able to demonstrate to:",
    sections: [
      {
        subtitle: "Knowledge and understanding",
        items: [
          "PLO1. Analyze a complex computing problem and to apply principles of computing and other relevant disciplines;",
          "PLO2. Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements;"
        ]
      },
      {
        subtitle: "Skills",
        items: [
          "PLO3. Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline;",
          "PLO4. Apply computer science theory and software development fundamentals to produce computing-based solutions for a variety of platforms;",
          "PLO5. Communicate effectively with a range of professional audiences;"
        ]
      },
      {
        subtitle: "Autonomy and responsibility",
        items: [
          "PLO6. Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles;",
          "PLO7. Acquire new knowledge and skills independently after graduation."
        ]
      }
    ]
  },
  futureCareers: {
    title: "Future careers in this profession",
    text: "Graduates of the bachelor's program in Computer Science go on to begin an exciting career in the fields of software engineering, research, and IT consultancy in Georgia as well as internationally. They can find employment in every industrial and economic sector, whether related to mechanical or electrical engineering, mathematics, or medicine. Some examples include the design of complex information systems for commercial use, programming robots, building data networks between banks and corporations, of developing traffic control systems.",
  },
  opportunities: {
    title: "Opportunities",
    items: [
      "Professors from TUM and other international universities from abroad",
      "Seminars and interactive teaching",
      "Access to worldwide library system electronically",
      "Modular well-equipped facilities with state of the art facilities",
      "Individual, student centered approaches of teaching, delivery of seminars and establishing lifelong learning, continuous development practices",
      "Internship at national and international companies."
    ]
  },
  howToApply: {
    title: "How to Apply",
    paragraphs: [
      {
        parts: [
          { text: "Citizens of Georgia apply to KIU programs via National Entrance Exams administered by ", type: "normal" },
          { text: "LEPL NAEC", type: "link", url: "https://naec.ge" },
          { text: ".", type: "normal" },
        ],
      },
      {
        parts: [
          { text: "International students interested in applying to the program, please visit: ", type: "normal" },
          { text: "Admission", type: "link", url: "#" },
        ],
      },
    ],
  },
};

const aboutProgramKa: ProgramData["aboutProgram"] = {
  title: "პროგრამის შესახებ",
  intro: "KIU გთავაზობთ ბაკალავრიატის პროგრამას კომპიუტერულ მეცნიერებებში.",
  degreeAwarded: {
    title: "მინიჭებული ხარისხი",
    text: "ბაკალავრის ხარისხი (BSc) კომპიუტერულ მეცნიერებებში.",
  },
  languageOfInstruction: {
    title: "სწავლების ენა:",
    text: "ინგლისური",
    note: "შენიშვნა: სტუდენტებს შეიძლება მიეწოდოთ აკადემიური მხარდაჭერის კურსები ინგლისურ ენაში, საჭიროების შემთხვევაში KIU-ში სწავლის განმავლობაში.",
  },
  accreditation: {
    title: "აკრედიტაცია",
    points: [
      "პროგრამა შემუშავებულია TUM-თან და TUM International-თან პარტნიორობით;",
      "პროგრამა დამტკიცებულია საერთაშორისო საკონსულტაციო საბჭოს მიერ;",
      "მოპოვებულია ქართული აკრედიტაციის ეკვივალენტი.",
    ],
  },
  programGoals: {
    title: "პროგრამის მიზნები",
    intro: "კომპიუტერულ მეცნიერებებში ბაკალავრიატის პროგრამის კურსდამთავრებულები შეძლებენ:",
    goals: [
      { number: "მიზანი 1:", text: "გამოიყენონ მათემატიკური საფუძვლები, ალგორითმული პრინციპები და კომპიუტერული მეცნიერების თეორია კომპიუტერულ სისტემების დიზაინში და აჩვენონ დიზაინის არჩევანში ჩართული კომპრომისები." },
      { number: "მიზანი 2:", text: "გამოიყენონ ფუნდამენტური თეორიების, კონცეფციების და კომპიუტერული მეცნიერების გამოყენებების ფართო გაგება ეთიკურ პრინციპებთან ერთად მათ პროფესიულ კარიერაში." },
      { number: "მიზანი 3:", text: "ეფექტურად გამოიყენონ კომუნიკაციის, გუნდური მუშაობისა და ლიდერობის უნარები რთული პროგრამული უზრუნველყოფის სისტემების განვითარებაში." },
      { number: "მიზანი 4:", text: "მოიპოვონ აღიარება საჭიროების შესახებ და უნარი ჩაერთონ მათი პროფესიული ცოდნისა და უნარების მუდმივ განვითარებაში." }
    ],
  },
  learningOutcomes: {
    title: "სწავლის შედეგები",
    intro: "პროგრამის დასრულების შემდეგ, კურსდამთავრებულები შეძლებენ აჩვენონ:",
    sections: [
      {
        subtitle: "ცოდნა და გაგება",
        items: [
          "PLO1. გაანალიზონ რთული გამოთვლითი პრობლემა და გამოიყენონ გამოთვლის პრინციპები და სხვა რელევანტური დისციპლინები;",
          "PLO2. შექმნან, განახორციელონ და შეაფასონ გამოთვლით დაფუძნებული გადაწყვეტა მოცემული გამოთვლითი მოთხოვნების დასაკმაყოფილებლად;"
        ]
      },
      {
        subtitle: "უნარები",
        items: [
          "PLO3. ეფექტურად იმუშაონ როგორც გუნდის წევრი ან ლიდერი პროგრამის დისციპლინისთვის შესაფერის საქმიანობაში;",
          "PLO4. გამოიყენონ კომპიუტერული მეცნიერების თეორია და პროგრამული უზრუნველყოფის განვითარების საფუძვლები სხვადასხვა პლატფორმისთვის გამოთვლით დაფუძნებული გადაწყვეტილებების შესაქმნელად;",
          "PLO5. ეფექტურად ურთიერთობონ პროფესიული აუდიტორიების ფართო სპექტრთან;"
        ]
      },
      {
        subtitle: "ავტონომიურობა და პასუხისმგებლობა",
        items: [
          "PLO6. ცნონ პროფესიული პასუხისმგებლობები და მიიღონ ინფორმირებული გადაწყვეტილებები გამოთვლით პრაქტიკაში იურიდიულ და ეთიკურ პრინციპებზე დაფუძნებული;",
          "PLO7. დამოუკიდებლად მოიპოვონ ახალი ცოდნა და უნარები კურსდამთავრების შემდეგ."
        ]
      }
    ]
  },
  futureCareers: {
    title: "მომავალი კარიერა ამ პროფესიაში",
    text: "კომპიუტერულ მეცნიერებებში ბაკალავრიატის პროგრამის კურსდამთავრებულები იწყებენ საინტერესო კარიერას პროგრამული ინჟინერიის, კვლევისა და IT კონსალტინგის სფეროებში როგორც საქართველოში, ისე საერთაშორისოდ. მათ შეუძლიათ იპოვონ დასაქმება ყველა ინდუსტრიულ და ეკონომიკურ სექტორში, იქნება ეს მექანიკური თუ ელექტრო ინჟინერია, მათემატიკა თუ მედიცინა. ზოგიერთი მაგალითი მოიცავს კომერციული გამოყენების რთული საინფორმაციო სისტემების დიზაინს, რობოტების პროგრამირებას, ბანკებსა და კორპორაციებს შორის მონაცემთა ქსელების შექმნას, საავტომობილო კონტროლის სისტემების განვითარებას.",
  },
  opportunities: {
    title: "შესაძლებლობები",
    items: [
      "პროფესორები TUM-დან და სხვა საერთაშორისო უნივერსიტეტებიდან",
      "სემინარები და ინტერაქტიული სწავლება",
      "ელექტრონულად წვდომა მსოფლიო ბიბლიოთეკის სისტემაზე",
      "მოდულური კარგად აღჭურვილი ობიექტები უახლესი ტექნოლოგიებით",
      "ინდივიდუალური, სტუდენტზე ორიენტირებული სწავლების მიდგომები, სემინარების ჩატარება და უწყვეტი სწავლის, მუდმივი განვითარების პრაქტიკის დამკვიდრება",
      "სტაჟირება ეროვნულ და საერთაშორისო კომპანიებში."
    ]
  },
  howToApply: {
    title: "როგორ მოვაწყოთ განაცხადი",
    paragraphs: [
      {
        parts: [
          { text: "საქართველოს მოქალაქეები KIU-ს პროგრამებზე აწყობენ განაცხადს ეროვნული სასწავლო გამოცდების გავლით, რომელსაც ატარებს ", type: "normal" },
          { text: "LEPL NAEC", type: "link", url: "https://naec.ge" },
          { text: ".", type: "normal" },
        ],
      },
      {
        parts: [
          { text: "საერთაშორისო სტუდენტები, რომლებსაც სურთ პროგრამაზე განაცხადის შეტანა, გთხოვთ ეწვიოთ: ", type: "normal" },
          { text: "მიღება", type: "link", url: "#" },
        ],
      },
    ],
  },
};

export const getAboutProgram = (lang: string): ProgramData["aboutProgram"] => {
  return lang === "ka" ? aboutProgramKa : aboutProgramEn;
};