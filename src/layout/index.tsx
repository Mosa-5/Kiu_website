import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet, useLocation, useParams, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";
import HeaderMobile from "@/components/header/HeaderMobile";
import Chatbot from "@/components/chatbot/Chatbot";

const Layout = () => {
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  // Track previous path without language
  const prevPathRef = useRef<string | null>(null);

  const validLanguages = ["en", "ka"];
  const isValidLang = lang && validLanguages.includes(lang);

  useEffect(() => {
    const currentPathWithoutLang = location.pathname.replace(/^\/(en|ka)/, "");

    // Scroll to top on first load or when route changes
    if (
      prevPathRef.current === null ||
      prevPathRef.current !== currentPathWithoutLang
    ) {
      window.scrollTo(0, 0);
      prevPathRef.current = currentPathWithoutLang;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isValidLang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // Set lang attribute on html element
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [lang, i18n, isValidLang]);

  if (!isValidLang) {
    return <Navigate to="/en" replace />;
  }

  return (
    <div className="min-h-screen">
      <SeoHead />
      <Header />
      <HeaderMobile />
      <div className="max-sm:mt-[67px]">
        <Outlet />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
