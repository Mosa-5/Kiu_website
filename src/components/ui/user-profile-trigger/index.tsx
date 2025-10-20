import { User } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
      <SelectTrigger
        className={`max-sm:w-full max-sm:flex-1 h-[72px] flex items-center gap-2 justify-center focus-visible:ring-0 border-0 shadow-none text-lg font-medium text-main bg-mainLight [&>span]:text-white rounded-sm ${className}`}
      >
        <User className="size-5" color="white" />
        <span className="text-white">{profileText}</span>
      </SelectTrigger>

      <SelectContent className="w-full bg-mainLight">
        <SelectItem
          className="justify-center text-lg font-medium text-white [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden focus:bg-transparent hover:border-l-white border-x-2 border-x-transparent focus:text-white rounded hover:!bg-main"
          value="website"
        >
          {lmsText}
        </SelectItem>
        <SelectItem
          className="justify-center text-lg font-medium text-white [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden focus:bg-transparent hover:border-l-white border-x-2 border-x-transparent focus:text-white rounded hover:!bg-main"
          value="logout"
        >
          {logoutText}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserProfileSelect;
