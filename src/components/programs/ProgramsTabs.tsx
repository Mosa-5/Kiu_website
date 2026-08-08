import programItems from "@/data/programItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  tabsContainer,
  tabsContent,
  tabsList,
  tabsListWrapper,
  tabsTrigger,
  slidingIndicator,
  container,
} from "./ProgramsTabs.styles";
import ProgramsGrid from "./ProgramsGrid";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useProgramTranslations } from "../../hooks/useProgramTranslations";

const ProgramTabs = () => {
  const { t } = useProgramTranslations();
  const categories = ["Bachelor", "Single-Cycle", "Master", "Doctoral"];
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("Bachelor");

  const tabsListWrapperRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && categories.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  const getTranslatedCategory = (category: string) => {
    return t(`categories.${category}`);
  };

  const updateIndicator = useCallback(() => {
    const wrapperEl = tabsListWrapperRef.current;
    if (!wrapperEl) return;

    const activeEl = wrapperEl.querySelector<HTMLElement>(
      '[data-state="active"]'
    );
    if (!activeEl) return;

    const wrapperRect = wrapperEl.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    setIndicatorStyle({
      left: activeRect.left - wrapperRect.left,
      width: activeRect.width,
    });
  }, []);

  // Recompute on tab change / language change (label widths differ per
  // language) before paint, so the indicator never flashes at a stale size.
  useLayoutEffect(() => {
    updateIndicator();
  }, [activeTab, t, updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <div className={container()}>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className={tabsContainer()}
      >
        <div className={tabsListWrapper()} ref={tabsListWrapperRef}>
          <TabsList className={tabsList()}>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className={tabsTrigger()}>
                {getTranslatedCategory(cat)}
              </TabsTrigger>
            ))}
          </TabsList>

          <span
            className={slidingIndicator()}
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
            }}
            aria-hidden="true"
          />
        </div>

        {categories.map((cat) => {
          const filtered = programItems.filter((item) => item.category === cat);

          return (
            <TabsContent key={cat} value={cat} className={tabsContent()}>
              <ProgramsGrid items={filtered} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ProgramTabs;
