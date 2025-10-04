import { NavLink } from "react-router-dom";
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

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About KIU", path: "/" },
    { label: "Programs", path: "/" },
    { label: "Research", path: "/" },
    { label: "Projects", path: "/" },
    { label: "Admission", path: "/" },
    { label: "Students", path: "/" },
    { label: "News", path: "/" },
    { label: "Campus", path: "/" },
    { label: "Vacancies", path: "/" },
  ];

  return (
    <div className={header({ scrolled })}>
      <div className={innerContainer()}>
        <img className={logo()} src={kiuLogo} alt="Kiu logo" />
        <nav className={nav()}>
          {navLinks.map((link) => (
            <NavLink className={navLinkBase()} key={link.label} to={link.path}>
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
