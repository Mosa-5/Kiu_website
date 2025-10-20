import { User } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  selectTrigger,
  iconWrapper,
  userName,
  selectContent,
  selectItem,
} from "./index.styles";
import { cn } from "@/lib/utils";

interface UserProfileSelectProps {
  userName?: string;
  profileText?: string;
  onLogout: () => void;
  lmsText: string;
  logoutText: string;
  className?: string;
}

const UserProfileSelect = ({
  onLogout,
  lmsText,
  logoutText,
  profileText,
  className = "",
}: UserProfileSelectProps) => {
  const handleValueChange = (value: string) => {
    if (value === "website") {
      window.open("https://lms.kiu.edu.ge", "_blank");
    } else if (value === "logout") {
      onLogout();
    }
  };

  return (
    <Select defaultValue="" onValueChange={handleValueChange}>
      <SelectTrigger className={cn(selectTrigger(), className)}>
        <User className={iconWrapper()} color="white" />
        <span className={userName()}>{profileText}</span>
      </SelectTrigger>

      <SelectContent className={selectContent()}>
        <SelectItem className={selectItem()} value="website">
          {lmsText}
        </SelectItem>
        <SelectItem className={selectItem()} value="logout">
          {logoutText}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserProfileSelect;
