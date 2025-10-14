import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; 
import { ChevronLeft } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface SideSectionsSheetProps {
  sections: Section[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const SideSectionsSheet: React.FC<SideSectionsSheetProps> = ({
  sections,
  isOpen,
  setIsOpen,
  scrollToSection,
}) => {
  return (
    <div className="sticky left-0 top-1/2 -translate-y-1/2 z-50 h-0">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          hideCloseButton
          className="w-[380px] h-fit top-1/2 -translate-y-1/2 rounded-r-2xl border-0 shadow-2xl"
          style={{ left: 0 }}
        >
          <nav className="flex flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left text-main hover:text-blue-900 hover:bg-blue-50 text-2xl rounded-md transition-colors p-6 font-medium"
              >
                {section.label}
              </button>
            ))}
          </nav>
        </SheetContent>

        <SheetTrigger asChild>
          <Button
            variant="default"
           className={`
                bg-main hover:bg-blue-900 rounded-l-none rounded-r-lg h-36 w-12 
                flex flex-col items-center justify-center gap-9 shadow-lg transition-all
                ${isOpen ? "duration-500" : "duration-300"} 
                relative z-50
            `}
          >
            <span
              className="transform -rotate-90 whitespace-nowrap text-lg font-medium tracking-wider mt-7"
              style={{ transformOrigin: "center" }}
            >
              Sections
            </span>
            <ChevronLeft
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};
