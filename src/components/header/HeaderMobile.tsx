import { kiuLogo } from "@/assets";
import { Link } from "react-router-dom";
import MobileMenu from "../ui/mobile-menu";
import { container, content, logo } from "./HeaderMobile.styles";

const HeaderMobile = () => {
  return (
    <div className={container()}>
      <div className={content()}>
        <Link to="/" aria-label="Home" title="Home">
          <img
            className={logo()}
            src={kiuLogo}
            alt="Kiu logo"
            fetchPriority="high"
          />
        </Link>
        <MobileMenu />
      </div>
    </div>
  );
};

export default HeaderMobile;
