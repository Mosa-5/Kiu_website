import type { ProgramData } from "../types";

const newsletterArchiveEn: ProgramData["newsletterArchive"] = {
  title: "SMCS Newsletter Archive",
  description: "Browse our collection of newsletters by date",
  newsletters: [
    { text: "SMCS Newsletter, September 2024", url: "/newsletters/smcs-newsletter-september-2024.pdf" },
    { text: "SMCS Newsletter, Spring 2024", url: "/newsletters/smcs-newsletter-spring-2024.pdf" },
    { text: "SMCS Newsletter, January-February-March 2024", url: "/newsletters/smcs-newsletter-jan-feb-mar-2024.pdf" },
    { text: "SMCS Newsletter, October-November-December 2023", url: "/newsletters/smcs-newsletter-oct-nov-dec-2023.pdf" },
    { text: "SMCS Newsletter, September 2023", url: "/newsletters/smcs-newsletter-september-2023.pdf" },
    { text: "SMCS Newsletter, Spring 2023", url: "/newsletters/smcs-newsletter-spring-2023.pdf" },
    { text: "SMCS Newsletter, November-December 2022", url: "/newsletters/smcs-newsletter-nov-dec-2022.pdf" },
    { text: "SMCS Newsletter, September-October 2022", url: "/newsletters/smcs-newsletter-sep-oct-2022.pdf" },
    { text: "SMCS Newsletter, June-July-August 2022", url: "/newsletters/smcs-newsletter-jun-jul-aug-2022.pdf" },
    { text: "SMCS Newsletter, April-May 2022", url: "/newsletters/smcs-newsletter-apr-may-2022.pdf" },
    { text: "SMCS Newsletter, March 2022", url: "/newsletters/smcs-newsletter-march-2022.pdf" },
    { text: "SMCS Newsletter, January-February 2022", url: "/newsletters/smcs-newsletter-jan-feb-2022.pdf" },
    { text: "SMCS Newsletter, November-December 2021", url: "/newsletters/smcs-newsletter-nov-dec-2021.pdf" },
    { text: "SMCS Newsletter, September-October 2021", url: "/newsletters/smcs-newsletter-sep-oct-2021.pdf" },
    { text: "SMCS Newsletter, July 2021", url: "/newsletters/smcs-newsletter-july-2021.pdf" },
    { text: "SMCS Newsletter, June 2021", url: "/newsletters/smcs-newsletter-june-2021.pdf" },
    { text: "SMCS Newsletter, April 2021", url: "/newsletters/smcs-newsletter-april-2021.pdf" },
    { text: "SMCS Newsletter, March 2021", url: "/newsletters/smcs-newsletter-march-2021.pdf" },
    { text: "SMCS Newsletter, May 2021", url: "/newsletters/smcs-newsletter-may-2021.pdf" },
  ],
};

const newsletterArchiveKa: ProgramData["newsletterArchive"] = {
  title: "SMCS საინფორმაციო ბიულეტენის არქივი",
  description: "მოინახულეთ ჩვენი საინფორმაციო ბიულეტენების კოლექცია თარიღის მიხედვით",
  newsletters: [
    { text: "SMCS საინფორმაციო ბიულეტენი, სექტემბერი 2024", url: "/newsletters/smcs-newsletter-september-2024.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, გაზაფხული 2024", url: "/newsletters/smcs-newsletter-spring-2024.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, იანვარი-თებერვალი-მარტი 2024", url: "/newsletters/smcs-newsletter-jan-feb-mar-2024.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, ოქტომბერი-ნოემბერი-დეკემბერი 2023", url: "/newsletters/smcs-newsletter-oct-nov-dec-2023.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, სექტემბერი 2023", url: "/newsletters/smcs-newsletter-september-2023.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, გაზაფხული 2023", url: "/newsletters/smcs-newsletter-spring-2023.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, ნოემბერი-დეკემბერი 2022", url: "/newsletters/smcs-newsletter-nov-dec-2022.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, სექტემბერი-ოქტომბერი 2022", url: "/newsletters/smcs-newsletter-sep-oct-2022.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, ივნისი-ივლისი-აგვისტო 2022", url: "/newsletters/smcs-newsletter-jun-jul-aug-2022.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, აპრილი-მაისი 2022", url: "/newsletters/smcs-newsletter-apr-may-2022.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, მარტი 2022", url: "/newsletters/smcs-newsletter-march-2022.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, იანვარი-თებერვალი 2022", url: "/newsletters/smcs-newsletter-jan-feb-2022.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, ნოემბერი-დეკემბერი 2021", url: "/newsletters/smcs-newsletter-nov-dec-2021.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, სექტემბერი-ოქტომბერი 2021", url: "/newsletters/smcs-newsletter-sep-oct-2021.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, ივლისი 2021", url: "/newsletters/smcs-newsletter-july-2021.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, ივნისი 2021", url: "/newsletters/smcs-newsletter-june-2021.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, აპრილი 2021", url: "/newsletters/smcs-newsletter-april-2021.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, მარტი 2021", url: "/newsletters/smcs-newsletter-march-2021.pdf" },
    { text: "SMCS საინფორმაციო ბიულეტენი, მაისი 2021", url: "/newsletters/smcs-newsletter-may-2021.pdf" },
  ],
};

export const getNewsletterArchive = (lang: string): ProgramData["newsletterArchive"] => {
  return lang === "ka" ? newsletterArchiveKa : newsletterArchiveEn;
};
