import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  container,
  sheetContent,
  nav,
  navButton,
  triggerButton,
  buttonText,
} from "./index.styles";

interface Section {
  id: string;
  label: string;
}

interface SideSectionsSheetProps {
  sections: Section[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  language?: string;
}

const translations: Record<string, { sections: string }> = {
  en: { sections: "Sections" },
  ka: { sections: "სექციები" },
};

export const SideSectionsSheet: React.FC<SideSectionsSheetProps> = ({
  sections,
  isOpen,
  setIsOpen,
  scrollToSection,
  language = "en",
}) => {
  const t = translations[language] || translations.en;

  return (
    <div className={container()}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          hideCloseButton
          className={sheetContent()}
          style={{ left: 0 }}
        >
          <nav className={nav()}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={navButton()}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </SheetContent>

        <SheetTrigger asChild>
          <Button variant="default" className={triggerButton({ isOpen })}>
            <span
              className={buttonText()}
              style={{ transformOrigin: "center" }}
            >
              {t.sections}
            </span>
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};
