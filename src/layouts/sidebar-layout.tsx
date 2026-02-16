import { SideSectionsSheet } from "@/components/ui/sections-sidebar";
import SideSections from "@/components/ui/sections-sidebar-new";
import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { useParams } from "react-router-dom";

interface Section {
  id: string;
  label: string;
}

interface SideSectionsLayoutProps extends PropsWithChildren {
  sections: Section[];
}

const SideSectionsLayout: React.FC<SideSectionsLayoutProps> = ({ sections, children }) => {
  const { lang } = useParams<{ lang?: string }>();

  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string, closeMobile = false) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    if (closeMobile) {
      setIsOpen(false);
    }
  }, []);

  const scrollToSectionMobile = useCallback((sectionId: string) => {
    scrollToSection(sectionId, true);
  }, [scrollToSection]);

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 150) };
      });

      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <div className="flex justify-between max-w-[1700px] sm:max-3xl:max-w-[1400px] m-auto md:px-5 gap-7 sm:gap-13 md:gap-10 sm:max-3xl:gap-6">
      <SideSections
        sections={sections}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <SideSectionsSheet
        sections={sections}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSectionMobile}
        language={lang || "en"}
      />

      <div className="max-w-[1254px] sm:max-3xl:max-w-[1050px]">
        {children}
      </div>
    </div>
  );
};

export default SideSectionsLayout;
