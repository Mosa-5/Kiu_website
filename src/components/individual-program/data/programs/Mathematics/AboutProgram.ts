import type { ProgramData } from "../types";

const aboutProgramEn: ProgramData["aboutProgram"] = {
  title: "About Program",
  intro: "KIU offers Bachelor of Science program in Mathematics.",
  degreeAwarded: {
    title: "Degree Awarded",
    text: "Bachelor of Science (BSc) in Mathematics.",
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
    intro: "Graduates of the bachelor's program in Mathematics will acquire:",
    goals: [
      { number: "Goal 1:", text: "Conceptual and operational understanding of selected core areas of mathematics" },
      { number: "Goal 2:", text: "Problem-solving skills including the computational and modeling ability." },
      { number: "Goal 3:", text: "Skills for efficient communication, critical thinking, and life-long learning." },
    ],
  },
  learningOutcomes: {
    title: "Learning Outcomes",
    intro: "Upon completion of the program, graduates are able to demonstrate to:",
    sections: [
      {
        subtitle: "Knowledge and understanding",
        items: [
          "PLO1. Solid knowledge in the following foundation fields of Mathematics: Analysis, Linear Algebra, Probability and Statistics Numerical MethodsOptimization Methods;",
          "PLO2. Basic knowledge in selected focus fields of applied Mathematics;",
          "PLO3. Understanding of limitations of mathematical methods and the constraints on their applicability;"
        ]
      },
      {
        subtitle: "Skills",
        items: [
          "PLO4. To identify, formulate, abstract and solve mathematical problems applying analytical, symbolic and computational methods together;",
          "PLO5. To design mathematical models in a broad range of intellectual domain and to choose the suitable methods for the resolution strategy",
          "PLO6. To analyze and visualize obtained results and evaluate their relevance concerning the underlying problems and/or hypotheses;",
          "PLO7. To search for, process and analyze information from a variety of sources and to communicate in a professional way orally and in written form;"
        ]
      },
      {
        subtitle: "Autonomy and responsibility",
        items: [
          "PLO8. Function well autonomously and on multi-disciplinary team recognizing and understanding the importance of ethical standards as well as their responsibilities;",
          "PLO9. Independently acquire new skills and knowledge and stay up to date with learning after graduation."
        ]
      }
    ]
  },
  futureCareers: {
    title: "Future careers in this profession",
    text: "Should a student decide to enter into professional employment after concluding the bachelor's program, opportunities then arise in many different sectors. Mathematical methods are used widely in science, engineering, and business. Graduates can find jobs in private and governmental companies where mathematical modeling, analysis, and computer simulation is needed. Should graduates of the bachelor's program decide to continue studies at the M.Sc. level, opportunities then arise in mathematics and other fields.",
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
  intro:
    "ქუთაისის საერთაშორისო უნივერსიტეტი (KIU) ახორციელებს მათემატიკის საბაკალავრო პროგრამას. KIU იწვევს როგორც ქართველ, ისე უცხოელ სტუდენტებს.",
  degreeAwarded: {
    title: "მინიჭებული ხარისხი",
    text: "მეცნიერების ბაკალავრი (BSc) მათემატიკაში.",
  },
  languageOfInstruction: {
    title: "სწავლების ენა:",
    text: "ინგლისური",
    note: "შენიშვნა: საჭიროებისამებრ, უნივერსიტეტი სტუდენტებს სთავაზობს ინგლისური ენის კურსებს და აკადემიური მხარდაჭერის პროგრამებს.",
  },
  accreditation: {
    title: "აკრედიტაცია",
    points: [
      "პროგრამა შემუშავებულია TUM-თან და TUM International-თან თანამშრომლობით;",
      "პროგრამა დამტკიცებულია საერთაშორისო მრჩეველთა საბჭოს მიერ;",
      "პროგრამის აკრედიტაცია საქართველოს აკრედიტაციის ეკვივალენტურია.",
    ],
  },
  programGoals: {
    title: "პროგრამის მიზნები",
    intro: "კურსდამთავრებულები შეძლებენ წარმოაჩინონ:",
    goals: [
      { number: "მიზანი 1:", text: "მათემატიკის შერჩეულ ძირითად სფეროებში კონცეპტუალური და საოპერაციო ცოდნა;" },
      { number: "მიზანი 2:", text: "პრობლემების გადაჭრის უნარ-ჩვევები, მათ შორის, გამოთვლითი და მოდელირების უნარები;" },
      { number: "მიზანი 3:", text: "ეფექტიანი კომუნიკაციის, კრიტიკული აზროვნების და უწყვეტი განათლების უნარ-ჩვევები." },
    ],
  },
  learningOutcomes: {
    title: "სწავლის შედეგები",
    intro: "პროგრამის წარმატებით დასრულების შემდეგ კურსდამთავრებულებს შეუძლიათ:",
    sections: [
      {
        subtitle: "ცოდნა და გაცნობიერება",
        items: [
          "PLO1: მათემატიკის საფუძვლების მყარი ცოდნის დემონსტრირება შემდეგი მიმართულებით: ანალიზი, წრფივი ალგებრა, ალბათობა და სტატისტიკა, რიცხვითი მეთოდები, ოპტიმიზაციის მეთოდები;",
          "PLO2: საბაზო ცოდნის დემონსტრირება გამოყენებითი მათემატიკის შერჩეული ფოკუს მიმართულებით;",
          "PLO3: მათემატიკური მეთოდების შეზღუდვების და მათი გამოყენების შემზღუდავი ფაქტორების გაცნობიერების დემონსტრირება;",
        ],
      },
      {
        subtitle: "უნარები",
        items: [
          "PLO4: მოახდინონ მათემატიკური ამოცანის იდენტიფიკაცია, ჩამოყალიბება, აბსტრაგირება და ამოხსნა ანალიზური, სიმბოლური და გამოთვლითი მეთოდების საშუალებით;",
          "PLO5: შეიმუშაონ მათემატიკური მოდელები ინტელექტუალური სფეროს ფართო სპექტრში და შეარჩიონ შესატყვისი მეთოდები ამოხსნის სტრატეგიისთვის;",
          "PLO6: გააკეთონ მიღებული შედეგების ანალიზი და ვიზუალიზაცია, შეაფასონ მათი რელევანტურობა განსახილველი პრობლემის ან/და ჰიპოთეზის მიმართ;",
          "PLO7: მოიძიონ, დაამუშაონ და გაანალიზონ ინფორმაცია სხვადასხვა წყაროდან და განახორციელონ პროფესიული კომუნიკაცია ზეპირად და წერილობით;",
        ],
      },
      {
        subtitle: "პასუხისმგებლობა და ავტონომიურობა",
        items: [
          "PLO8: იმუშაონ ავტონომიურად და მულტი-დისციპლინურ გუნდში პროფესიასთან მიმართებაში პასუხისმგებლობით, ეთიკური სტანდარტების მნიშვნელობის აღიარებით;",
          "PLO9: დამოუკიდებლად შეიძინონ ახალი უნარები და ცოდნა და განაახლონ ცოდნა უნივერსიტეტში სწავლის დასრულების შემდეგ.",
        ],
      },
    ],
  },
  futureCareers: {
    title: "დასაქმების სფეროები",
    text:
      "ბაკალავრიატის პროგრამის დასრულების შემდეგ, კურსდამთავრებულებს ეძლევათ მრავალფეროვანი შესაძლებლობა სხვადასხვა სექტორში. მათემატიკური მეთოდები ფართოდ გამოიყენება მეცნიერებაში, ინჟინერიასა და ბიზნესში. კურსდამთავრებულებს შეუძლიათ დასაქმდნენ როგორც კერძო კომპანიებში, ისე სამთავრობო სტრუქტურებში, სადაც საჭიროა მათემატიკური მოდელირება, ანალიზი და კომპიუტერული სიმულაცია. თუ კურსდამთავრებული გადაწყვეტს სწავლის გაგრძელებას მაგისტრატურაზე, მის წინაშე იხსნება შესაძლებლობები როგორც მათემატიკის, ისე სხვა მიმართულებებში.",
  },
  opportunities: {
    title: "პროგრამის უპირატესობები",
    items: [
      "პროფესორები TUM-იდან და უცხოეთის სხვა საერთაშორისო უნივერსიტეტებიდან;",
      "სემინარები, პროექტები და ინტერაქტიური სწავლება;",
      "ელექტრონული წვდომა მსოფლიო საბიბლიოთეკო სისტემებზე;",
      "თანამედროვე და მაღალტექნოლოგიური ინფრასტრუქტურა;",
      "სტუდენტზე ორიენტირებული სწავლების მიდგომები და უწყვეტი განათლების პრაქტიკა;",
      "სტაჟირება ადგილობრივ და საერთაშორისო კომპანიებში;",
      "შესაძლებელია ძირითადი სპეციალობად მათემატიკის და დამატებითად — კომპიუტერული მეცნიერების ან მენეჯმენტის არჩევა.",
    ],
  },
  howToApply: {
    title: "როგორ ჩავირიცხო პროგრამაზე?",
    paragraphs: [
      {
        parts: [
          { text: "ქუთაისის საერთაშორისო უნივერსიტეტში, საქართველოს მოქალაქეები ირიცხებიან შეფასებისა და გამოცდების ეროვნული ცენტრის (NAEC) მიერ ორგანიზებული ერთიანი ეროვნული გამოცდების საფუძველზე.", type: "normal" },
        ],
      },
      {
        parts: [
          { text: "საერთაშორისო სტუდენტები, დაინტერესების შემთხვევაში, ეწვიეთ: ", type: "normal" },
          { text: "Admissions", type: "link", url: "#" },
        ],
      },
    ],
  },
};


export const getAboutProgram = (lang: string): ProgramData["aboutProgram"] => {
  return lang === "ka" ? aboutProgramKa : aboutProgramEn;
};