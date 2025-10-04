import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { flagUS, flagGeo, globeIcon } from "@/assets";
import { useState } from "react";
import { trigger, content, item } from "./LanguageSelect.styles";

const LanguageSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <Select
      defaultValue="eng"
      onValueChange={(value) => setSelectedValue(value)}
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
        <SelectItem className={item()} value="eng">
          <img src={flagUS} alt="usa flag" />
          ENG
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
