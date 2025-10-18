import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeaderMobile from "@/components/header/HeaderMobile";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
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
