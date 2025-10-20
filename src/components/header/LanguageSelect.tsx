import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { flagUS, flagGeo, globeIcon } from "@/assets";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { trigger, content, item } from "./LanguageSelect.styles";

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const [selectedValue, setSelectedValue] = useState<string>(lang || "en");

  useEffect(() => {
    if (lang) {
      setSelectedValue(lang);
    }
  }, [lang]);

  const handleLanguageChange = (newLang: string) => {
    setSelectedValue(newLang);
    
    i18n.changeLanguage(newLang);
    
    const pathParts = location.pathname.split('/').filter(Boolean);
    
    if (pathParts.length > 0) {
      pathParts[0] = newLang;
      navigate(`/${pathParts.join('/')}`, { replace: true });
    } else {
      navigate(`/${newLang}`, { replace: true });
    }
  };

  return (
    <Select
      value={selectedValue}
      onValueChange={handleLanguageChange}
    >
      <SelectTrigger className={trigger()} aria-label="language switcher">
        <img src={globeIcon} alt="globe icon" />
        <SelectValue>{selectedValue === "ka" ? "GEO" : "ENG"}</SelectValue>
      </SelectTrigger>

      <SelectContent className={content()}>
        <SelectItem className={item()} value="ka" aria-label="Ka select">
          <img src={flagGeo} alt="georgia flag" />
          GEO
        </SelectItem>
        <SelectItem className={item()} value="en" aria-label="En select">
          <img src={flagUS} alt="usa flag" />
          ENG
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;