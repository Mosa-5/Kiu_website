import { Link, NavLink, useParams } from "react-router-dom";
import { kiuLogo } from "@/assets";
import LanguageSelect from "./LanguageSelect";
import { useEffect, useState } from "react";
import {
  header,
  innerContainer,
  logo,
  nav,
  navLinkBase,
} from "./Header.styles";
import { useHeaderTranslations } from "./hooks/useHeaderTranslation"; // Import the hook

const Header = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const [scrolled, setScrolled] = useState(false);
  const { t } = useHeaderTranslations(); // Use the hook

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use translated labels from the translation files
  const navLinks = [
    { label: t("nav.about"), path: "/about-us" },
    { label: t("nav.programs"), path: "/programs" },
    { label: t("nav.research"), path: "/" },
    { label: t("nav.projects"), path: "/projects" },
    { label: t("nav.admission"), path: "/admission" },
    { label: t("nav.students"), path: "/" },
    { label: t("nav.news"), path: "/news" },
    { label: t("nav.campus"), path: "/" },
    { label: t("nav.vacancies"), path: "/vacancies" },
  ];

  return (
    <div className={header({ scrolled })}>
      <div className={innerContainer()}>
        <Link to={`/${currentLang}`}>
          <img className={logo()} src={kiuLogo} alt="Kiu logo" />
        </Link>
        <nav className={nav()}>
          {navLinks.map((link) => (
            <NavLink 
              className={navLinkBase()} 
              key={link.label} 
              to={`/${currentLang}${link.path}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <LanguageSelect />
      </div>
    </div>
  );
};

export default Header;