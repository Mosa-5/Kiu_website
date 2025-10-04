import { Link } from "react-router-dom";
import kiuLogo from "@/assets/kiu-logo.svg";
import LanguageSelect from "../customized-ui/select-lang";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-50 flex items-center justify-center fixed left-1/2 -translate-x-1/2 border-1  rounded-2xl w-full h-[80px] bg-[#FFFFFFE5] transition-all duration-200 ${
        scrolled
          ? "max-w-full border-b-2 border-t-0 border-b-[#3C70AF] rounded-none top-[0px] bg-white"
          : "max-w-[1680px] top-[24px] shadow-[2px_4px_4px_0px_#00000040] "
      }`}
    >
      <div className="flex items-center bg-none justify-between max-w-[1680px] px-4 w-full">
        <img className="w-[178px] h-[55px]" src={kiuLogo} alt="Kiu logo" />
        <nav className="flex *:text-[#3C70AF] text-xl w-full max-w-[1105px] justify-between font-[500] *:border-y-2 *:border-y-transparent *:hover:border-b-[#3C70AF] *:transition-all *:duration-200">
          <Link to="/">About KIU</Link>
          <Link to="/">Programs</Link>
          <Link to="/">Research</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Admission</Link>
          <Link to="/">Students</Link>
          <Link to="/news">News</Link>
          <Link to="/">Campus</Link>
          <Link to="/">Vacancies</Link>
        </nav>
        <LanguageSelect />
      </div>
    </div>
  );
};

export default Header;
