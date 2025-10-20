import { Link, NavLink, useParams } from "react-router-dom";
import { kiuLogo, kiuGeoLogo } from "@/assets";
import LanguageSelect from "./LanguageSelect";
import { useEffect, useState } from "react";
import { LogIn, User } from "lucide-react";
import {
  header,
  innerContainer,
  logo,
  nav,
  navLinkBase,
} from "./Header.styles";
import { useHeaderTranslations } from "../../hooks/hooksHeader/useHeaderTranslation";
import { useAuth } from "../../hooks/hooksHeader/useAuth";
import { AuthModal } from "./AuthModal";
import { Button } from "../ui/button";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";

const Header = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
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
    { label: t("nav.campus"), path: "/" },
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
              <Select
                defaultValue=""
                onValueChange={(value) => {
                  if (value === "website") {
                    window.open("https://lms.kiu.edu.ge", "_blank");
                  } else if (value === "logout") {
                    logout();
                  }
                }}
              >
                <SelectTrigger className="flex items-center gap-2 px-4 py-2 bg-main text-white rounded-md hover:bg-mainDark transition-colors text-sm font-medium [&>span]:text-white">
                  <User size={18} color="white" />
                  <SelectValue placeholder={currentUser.name} />
                </SelectTrigger>

                <SelectContent className="w-48">
                  <SelectItem value="website">{t("auth.goToLMS")}</SelectItem>
                  <SelectItem value="logout">{t("auth.logout")}</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <Button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 px-4 py-4 h-9.5 shadow-none rounded-lg bg-main text-white hover:bg-mainDark transition-colors text-base font-medium"
                aria-label={t("auth.login")}
              >
                <LogIn size={18} />
                <span className="hidden md:inline">{t("auth.login")}</span>
              </Button>
            )}

            <LanguageSelect />
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Header;
