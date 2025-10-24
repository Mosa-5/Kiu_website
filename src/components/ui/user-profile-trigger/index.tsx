import { ChevronDownIcon, User } from "lucide-react";
import {
  selectTrigger,
  iconWrapper,
  userName,
  selectContent,
  selectItem,
  chevronDown,
} from "./index.styles";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

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
  const openLMS = () => {
    window.open("https://lms.kiu.edu.ge", "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(selectTrigger(), className)}>
        <User className={iconWrapper()} color="white" />
        <span className={userName()}>{profileText}</span>
        <ChevronDownIcon className={chevronDown()} />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        style={{ width: "var(--radix-dropdown-menu-trigger-width)" }}
        className={selectContent()}
      >
        <DropdownMenuItem onClick={openLMS} className={selectItem()}>
          {lmsText}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout} className={selectItem()}>
          {logoutText}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileSelect;
