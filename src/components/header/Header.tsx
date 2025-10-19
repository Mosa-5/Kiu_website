import { Link, NavLink, useParams } from "react-router-dom";
import { kiuLogo } from "@/assets";
import LanguageSelect from "./LanguageSelect";
import { useEffect, useState } from "react";
import { LogIn, LogOut, User } from "lucide-react";
import {
  header,
  innerContainer,
  logo,
  nav,
  navLinkBase,
} from "./Header.styles";
import { useHeaderTranslations } from "./hooks/useHeaderTranslation";
import { useAuth } from "./hooks/useAuth";
import { AuthModal } from "./AuthModal";

const Header = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useHeaderTranslations();
  const { isAuthenticated, currentUser, logout } = useAuth();

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
          
          <div className="flex items-center gap-3">
            {isAuthenticated && currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-mainDark">
                  <User size={18} />
                  <span className="hidden md:inline">{currentUser.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-medium"
                >
                  <LogOut size={18} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-main text-white rounded-md hover:bg-mainDark transition-colors text-sm font-medium"
              >
                <LogIn size={18} />
                <span className="hidden md:inline">Login</span>
              </button>
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