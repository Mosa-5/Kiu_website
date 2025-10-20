import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    <div className="sticky top-3/7 z-50 h-0 w-0">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          hideCloseButton
          className="w-[230px] sm:w-[300px] h-fit top-1/2 -translate-y-1/2 rounded-r-2xl border-l-0 border-3 overflow-hidden border-main shadow-2xl"
          style={{ left: 0 }}
        >
          <nav className="flex flex-col">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left hover:cursor-pointer text-main hover:text-blue-900 hover:bg-blue-50 text-base sm:text-lg rounded-md transition-colors px-3 py-4 font-medium"
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
                bg-main rounded-l-none rounded-r-lg h-36 w-10 sm:w-12 
                flex flex-col items-center justify-center gap-9 shadow-lg transition-all
                ${isOpen ? "opacity-0 duration-0" : "duration-1000"} 
                relative z-50
            `}
          >
            <span
              className="transform -rotate-90 whitespace-nowrap text-lg sm:text-xl font-medium tracking-wider"
              style={{ transformOrigin: "center" }}
            >
              Sections
            </span>
            {/* <ChevronRight
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            /> */}
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};
