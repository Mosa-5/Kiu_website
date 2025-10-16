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
import { trigger, content, item } from "./LanguageSelect.styles";

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [selectedValue, setSelectedValue] = useState<string>(i18n.language || "en");

  useEffect(() => {
    // Sync with current i18n language on mount
    setSelectedValue(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (value: string) => {
    setSelectedValue(value);
    i18n.changeLanguage(value);
  };

  return (
    <Select
      value={selectedValue}
      onValueChange={handleLanguageChange}
    >
      <SelectTrigger className={trigger()}>
        <img src={globeIcon} alt="globe icon" />
        <SelectValue>{selectedValue === "ka" ? "GEO" : "ENG"}</SelectValue>
      </SelectTrigger>

      <SelectContent className={content()}>
        <SelectItem className={item()} value="ka">
          <img src={flagGeo} alt="georgia flag" />
          GEO
        </SelectItem>
        <SelectItem className={item()} value="en">
          <img src={flagUS} alt="usa flag" />
          ENG
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;