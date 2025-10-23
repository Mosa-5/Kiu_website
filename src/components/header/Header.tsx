import { Link, NavLink, useParams } from "react-router-dom";
import { kiuLogo, kiuGeoLogo } from "@/assets";
import LanguageSelect from "./LanguageSelect";
import { useEffect, useState } from "react";
import {
  header,
  innerContainer,
  logo,
  nav,
  navLinkBase,
} from "./Header.styles";
import { useHeaderTranslations } from "../../hooks/hooksHeader/useHeaderTranslation";
import { useAuth } from "../../hooks/hooksHeader/useAuth";
import AuthDialog from "../ui/auth-dialog";
import UserProfileSelect from "../ui/user-profile-trigger";

const Header = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const [scrolled, setScrolled] = useState(false);
  const { t } = useHeaderTranslations();
  const { isAuthenticated, currentUser, logout } = useAuth();

  const getLogo = () => {
    return currentLang === "ka" ? kiuGeoLogo : kiuLogo;
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.about"), path: "/about-us" },
    { label: t("nav.programs"), path: "/programs" },
    { label: t("nav.research"), path: "/" },
    { label: t("nav.projects"), path: "/projects" },
    { label: t("nav.admission"), path: "/admission" },
    { label: t("nav.students"), path: "/" },
    { label: t("nav.news"), path: "/news" },
    { label: t("nav.campus"), path: "/campus" },
    { label: t("nav.vacancies"), path: "/vacancies" },
  ];

  return (
    <>
      <div className={header({ scrolled })}>
        <div className={innerContainer()}>
          <Link to={`/${currentLang}`} aria-label="Home">
            <img className={logo()} src={getLogo()} alt="Kiu logo" />
          </Link>

          <nav className={nav()}>
            {navLinks.map((link) => (
              <NavLink
                className={navLinkBase()}
                key={link.label}
                to={`/${currentLang}${link.path}`}
                aria-label="Navigation button"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center">
            {isAuthenticated && currentUser ? (
              <UserProfileSelect
                userName={currentUser.name}
                onLogout={logout}
                lmsText={t("auth.goToLMS")}
                logoutText={t("auth.logout")}
                profileText={t("auth.profile")}
              />
            ) : (
              <AuthDialog buttonText={t("auth.login")} />
            )}

            <LanguageSelect />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
