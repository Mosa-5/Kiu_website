import { useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

type Lng = "en" | "ka";

const seoMap: Record<Lng, Record<string, { title: string; description: string; keywords: string }>> = {
  en: {
    home: {
      title: "Kutaisi International University - KIU",
      description: "Kutaisi International University (KIU) offers world-class education in Computer Science, Mathematics, and Management. Study in Georgia with international partnerships.",
      keywords: "Kutaisi International University, KIU, study in Georgia, Computer Science, Mathematics, Management, international university, TUM partnership"
    },
    about: {
      title: "About Us - Kutaisi International University",
      description: "Learn about KIU's mission, vision, and international partnerships. Discover our state-of-the-art campus and world-class faculty members.",
      keywords: "KIU about, university campus, international faculty, TUM partnership, Wolfgang Herrmann, education in Georgia"
    },
    programs: {
      title: "Academic Programs - Kutaisi International University",
      description: "Explore Bachelor's and Master's degree programs in Computer Science, Mathematics, Management, Psychology, and Design at KIU.",
      keywords: "Bachelor programs, Master programs, Computer Science degree, Mathematics degree, Management degree, KIU programs"
    },
    admission: {
      title: "Admission - Kutaisi International University",
      description: "Apply to KIU. Learn about admission requirements, application process, and deadlines for Georgian and international students.",
      keywords: "KIU admission, apply to KIU, international students, admission requirements, study in Georgia"
    },
    news: {
      title: "News & Events - Kutaisi International University",
      description: "Stay updated with the latest news, events, and announcements from Kutaisi International University.",
      keywords: "KIU news, university events, academic news, student activities, Georgia education news"
    },
    projects: {
      title: "Projects - Kutaisi International University",
      description: "Discover KIU's innovative projects including Advancing the Frontiers conference and Youth University program.",
      keywords: "KIU projects, research projects, youth university, innovation, academic conferences"
    },
    vacancies: {
      title: "Vacancies - Kutaisi International University",
      description: "Join our team! Explore academic and administrative job opportunities at Kutaisi International University.",
      keywords: "KIU jobs, academic positions, university careers, teaching jobs Georgia, work at KIU"
    }
  },
  ka: {
    home: {
      title: "ქუთაისის საერთაშორისო უნივერსიტეტი - KIU",
      description: "ქუთაისის საერთაშორისო უნივერსიტეტი (KIU) გთავაზობთ მსოფლიო დონის განათლებას კომპიუტერულ მეცნიერებებში, მათემატიკასა და მენეჯმენტში. სწავლობა საქართველოში საერთაშორისო პარტნიორობებით.",
      keywords: "ქუთაისის საერთაშორისო უნივერსიტეტი, KIU, სწავლა საქართველოში, კომპიუტერული მეცნიერებები, მათემატიკა, მენეჯმენტი, საერთაშორისო უნივერსიტეტი, TUM პარტნიორობა"
    },
    about: {
      title: "ჩვენ შესახებ - ქუთაისის საერთაშორისო უნივერსიტეტი",
      description: "გაეცანით KIU-ს მისიას, ხედვას და საერთაშორისო პარტნიორობებს. აღმოაჩინეთ ჩვენი თანამედროვე კამპუსი და მსოფლიო დონის ფაკულტეტი.",
      keywords: "KIU შესახებ, უნივერსიტეტის კამპუსი, საერთაშორისო ფაკულტეტი, TUM პარტნიორობა, ვოლფგანგ ჰერმანი, განათლება საქართველოში"
    },
    programs: {
      title: "აკადემიური პროგრამები - ქუთაისის საერთაშორისო უნივერსიტეტი",
      description: "გაეცანით ბაკალავრიატისა და მაგისტრატურის პროგრამებს კომპიუტერულ მეცნიერებებში, მათემატიკაში, მენეჯმენტში, ფსიქოლოგიასა და დიზაინში KIU-ში.",
      keywords: "ბაკალავრიატის პროგრამები, მაგისტრატურის პროგრამები, კომპიუტერული მეცნიერებები, მათემატიკის ხარისხი, მენეჯმენტის ხარისხი, KIU პროგრამები"
    },
    admission: {
      title: "მიღება - ქუთაისის საერთაშორისო უნივერსიტეტი",
      description: "მოაწყვეთ განაცხადი KIU-ში. გაეცანით მიღების მოთხოვნებს, განაცხადის პროცესს და ვადებს ქართველი და საერთაშორისო სტუდენტებისთვის.",
      keywords: "KIU მიღება, განაცხადი KIU-ში, საერთაშორისო სტუდენტები, მიღების მოთხოვნები, სწავლა საქართველოში"
    },
    news: {
      title: "სიახლეები და ღონისძიებები - ქუთაისის საერთაშორისო უნივერსიტეტი",
      description: "იყავით ინფორმირებული უახლესი სიახლეებით, ღონისძიებებითა და განცხადებებით ქუთაისის საერთაშორისო უნივერსიტეტიდან.",
      keywords: "KIU სიახლეები, უნივერსიტეტის ღონისძიებები, აკადემიური სიახლეები, სტუდენტური აქტივობები, საქართველოს განათლების სიახლეები"
    },
    projects: {
      title: "პროექტები - ქუთაისის საერთაშორისო უნივერსიტეტი",
      description: "აღმოაჩინეთ KIU-ს ინოვაციური პროექტები, მათ შორის საზღვრების გადალახვის კონფერენცია და ახალგაზრდული უნივერსიტეტის პროგრამა.",
      keywords: "KIU პროექტები, კვლევითი პროექტები, ახალგაზრდული უნივერსიტეტი, ინოვაცია, აკადემიური კონფერენციები"
    },
    vacancies: {
      title: "ვაკანსიები - ქუთაისის საერთაშორისო უნივერსიტეტი",
      description: "შემოუერთდით ჩვენს გუნდს! გაეცანით აკადემიურ და ადმინისტრაციულ სამუშაო შესაძლებლობებს ქუთაისის საერთაშორისო უნივერსიტეტში.",
      keywords: "KIU სამუშაო, აკადემიური პოზიციები, უნივერსიტეტის კარიერა, სასწავლო სამუშაოები საქართველო, მუშაობა KIU-ში"
    }
  }
};

export default function SeoHead() {
  const { lang } = useParams();
  const location = useLocation();
  const { i18n } = useTranslation();

  const currentLang = (lang === "en" || lang === "ka") ? lang : "en";

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang, i18n]);

  const segments = location.pathname.split("/").filter(Boolean);
  const pageKey = segments[1] || "home";

  const seo = seoMap[currentLang]?.[pageKey] ?? seoMap[currentLang].home;

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
    </>
  );
}
