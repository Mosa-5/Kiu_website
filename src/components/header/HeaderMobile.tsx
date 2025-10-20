import { kiuLogo } from "@/assets";
import { Link } from "react-router-dom";
import MobileMenu from "../ui/MobileMenu";

const HeaderMobile = () => {
  return (
    <div
      className="flex items-center z-10 justify-center w-full fixed left-1/2 
    -translate-x-1/2 border-1 h-[67px] transition-all duration-200 max-w-full 
    border-b-2 border-t-0 border-b-main rounded-none top-0 bg-white sm:hidden"
    >
      <div className="flex items-center justify-between px-4 w-full ">
        <Link to="/">
          <img className="w-[113px] h-[35px]" src={kiuLogo} alt="Kiu logo" />
        </Link>
        <MobileMenu />
      </div>
    </div>
  );
};

export default HeaderMobile;
