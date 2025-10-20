import { kiuLogo } from "@/assets";
import { Link } from "react-router-dom";
import MobileMenu from "../ui/MobileMenu";
import { container, content, logo } from "./HeaderMobile.styles";

const HeaderMobile = () => {
  return (
    <div className={container()}>
      <div className={content()}>
        <Link to="/">
          <img className={logo()} src={kiuLogo} alt="Kiu logo" />
        </Link>
        <MobileMenu />
      </div>
    </div>
  );
};

export default HeaderMobile;
