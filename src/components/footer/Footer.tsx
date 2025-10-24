import {
  emailIcon,
  phoneIcon,
  mapIcon,
  kiuWhiteLogo,
  ytIcon,
  lkIcon,
  fbIcon,
} from "@/assets";
import {
  footerContainer,
  footerContent,
  footerInner,
  linksContainer,
  linkSection,
  sectionTitle,
  linksList,
  contactList,
  emailLink,
  footerBottom,
  footerBottomInner,
  copyrightText,
  socialLinks,
  footerLogo,
} from "./Footer.styles";
import { useFooterTranslations } from "../../hooks/useFooterTranslations";

const USEFUL_LINKS = [
  { href: "https://mes.gov.ge/", label: "MESCS" },
  { href: "https://www.tum.de/", label: "Technical University of Munich" },
  { href: "https://www.naec.ge/", label: "NAEC" },
  { href: "https://www.naec.ge/", label: "NCEQE" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/KutaisiInternationalUniversity/",
    icon: fbIcon,
    alt: "facebook icon",
  },
  {
    href: "https://www.linkedin.com/school/%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%98%E1%83%A1%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%94%E1%83%A0%E1%83%97%E1%83%90%E1%83%A8%E1%83%9D%E1%83%A0%E1%83%98%E1%83%A1%E1%83%9D-%E1%83%A3%E1%83%9C%E1%83%98%E1%83%95%E1%83%94%E1%83%A0%E1%83%A1%E1%83%98%E1%83%A2%E1%83%94%E1%83%A2%E1%83%98-kutaisi-international-university/posts/?feedView=all",
    icon: lkIcon,
    alt: "linkedin icon",
  },
  {
    href: "https://www.youtube.com/@KutaisiInternationalUniversity",
    icon: ytIcon,
    alt: "youtube icon",
  },
];

const Footer = () => {
  const { t } = useFooterTranslations();
  const CONTACT_INFO = [
    {
      icon: mapIcon,
      alt: "map icon",
      text: t("contactInfo.address"),
    },
    { icon: phoneIcon, alt: "phone icon", text: "(+995) 577 477197" },
  ];

  return (
    <footer className={footerContainer()}>
      <div className={footerContent()}>
        <div className={footerInner()}>
          <img
            className={footerLogo()}
            src={kiuWhiteLogo}
            alt="Kutaisi International University logo"
          />

          <div className={linksContainer()}>
            {/* useful links section */}
            <div className={linkSection()}>
              <h2 className={sectionTitle()}>{t("usefulLinks")}</h2>
              <ul className={linksList()}>
                {USEFUL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Footer link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact us section */}
            <div>
              <h2 className={sectionTitle()}>{t("contactUs")}</h2>
              <ul className={contactList()}>
                {CONTACT_INFO.map((contact) => (
                  <li key={contact.alt}>
                    <img src={contact.icon} alt={contact.alt} />
                    {contact.text}
                  </li>
                ))}
                <li>
                  <img src={emailIcon} alt="email icon" />
                  <a className={emailLink()} href="mailto:info@kiu.edu.ge" aria-label="email">
                    info@kiu.edu.ge
                  </a>
                </li>
                <li>{t("contactInfo.intlEmail")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom section */}
      <div className={footerBottom()}>
        <div className={footerBottomInner()}>
          <span className={copyrightText()}>{t("copyright")}</span>

          <nav className={socialLinks()} aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </nav>

          <span className={copyrightText()}>
            Hosted on{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={emailLink()}
              aria-label="Hosted on"
            >
              Vercel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
