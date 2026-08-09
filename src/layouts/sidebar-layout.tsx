import SideSections from "@/components/ui/sections-sidebar-new";
import { useCallback, useEffect, useMemo, useRef, useState, type PropsWithChildren } from "react";

interface Section {
  id: string;
  label: string;
}

interface SideSectionsLayoutProps extends PropsWithChildren {
  sections: Section[];
}

// Ease-in-out cubic — gives the programmatic scroll a consistent, gentle
// feel across browsers instead of relying on native `behavior: "smooth"`,
// which varies in speed/easing from browser to browser.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const SideSectionsLayout: React.FC<SideSectionsLayoutProps> = ({ sections, children }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // While a click-triggered scroll animation is running, the scroll listener
  // below must not fight it for control of `activeSection` — that's what
  // caused the nav highlight to flicker through intermediate sections.
  const isAutoScrollingRef = useRef(false);
  const scrollAnimationRef = useRef<number | null>(null);

  const animateScrollTo = useCallback((targetY: number, duration = 600) => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    isAutoScrollingRef.current = true;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(step);
      } else {
        scrollAnimationRef.current = null;
        isAutoScrollingRef.current = false;
      }
    };

    scrollAnimationRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollAnimationRef.current !== null) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    animateScrollTo(elementPosition - offset);
  }, [animateScrollTo]);

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;

      // Skip while we're auto-scrolling to a clicked section — otherwise
      // the section closest to the viewport mid-transit briefly wins and
      // the highlight flickers before settling on the intended target.
      if (isAutoScrollingRef.current) return;

      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 150) };
      });

      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <div className="flex justify-between max-w-[1700px] sm:max-3xl:max-w-[1400px] m-auto lg:px-5 sm:max-lg:pr-4 gap-7 sm:gap-13 md:gap-10 sm:max-3xl:gap-6">
      <SideSections
        sections={sections}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <div className="w-full min-w-0 max-w-[1254px] sm:max-3xl:max-w-[1050px]">
        {/* Same list, same styling as the desktop sidebar — just boxed and
            placed inline at the top of the page instead of a sticky column. */}
        <SideSections
          sections={sections}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          variant="boxed"
        />

        {children}
      </div>
    </div>
  );
};

export default SideSectionsLayout;
