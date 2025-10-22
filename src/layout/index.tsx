import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet, useLocation, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";
import HeaderMobile from "@/components/header/HeaderMobile";

const Layout = () => {
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  // Validate language param
  const validLanguages = ["en", "ka"];
  const isValidLang = lang && validLanguages.includes(lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Change i18n language when URL param changes
    if (isValidLang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // Set lang attribute on html element
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [lang, i18n, isValidLang]);

  // Redirect to default language if invalid
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
    </div>
  );
};

export default Layout;
