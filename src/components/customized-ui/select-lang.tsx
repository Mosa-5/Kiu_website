import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import globeIcon from "@/assets/globe-icon.svg";
import flagGeo from "@/assets/georgia-flag.svg"
import flagUS from "@/assets/usa-flag.svg"
import { useState } from "react";

const LanguageSelect = () => {

   const [selectedValue, setSelectedValue] = useState<string>();

  return (
   <Select defaultValue="eng" onValueChange={(value) => setSelectedValue(value)}>
  <SelectTrigger className="w-[118px] h-[72px] flex items-center gap-2 focus-visible:ring-0 border-0 shadow-none text-lg font-[500] text-[#3C70AF] [&>svg:last-child]:hidden justify-center">
    <img src={globeIcon} alt="globe icon" />
    {/* Show only text, no flag */}
    <SelectValue>
      {selectedValue === 'ka' ? 'GEO' : 'ENG'}
    </SelectValue>
  </SelectTrigger>

  <SelectContent className="w-[118px] font-[500] text-[#3C70AF]">
    <SelectItem className="border-x-2 border-transparent rounded-none hover:border-l-[#3C70AF] focus:text-inherit text-lg flex justify-center [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden" value="ka">
      <img src={flagGeo} alt="georgia flag" />GEO
    </SelectItem>
    <SelectItem className="border-x-2 border-transparent rounded-none hover:border-l-[#3C70AF] focus:text-inherit text-lg flex justify-center [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden" value="eng">
      <img src={flagUS} alt="usa flag"/>ENG
    </SelectItem>
  </SelectContent>
</Select>
  );
};

export default LanguageSelect;
