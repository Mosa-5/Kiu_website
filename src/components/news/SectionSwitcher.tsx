import { useState, useEffect, useMemo, useCallback, useLayoutEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import {
  container,
  tabsContainer,
  headerWrapper,
  tabsListWrapper,
  tabsList,
  tabsTrigger,
  slidingIndicator,
  searchWrapper,
  searchIcon,
  searchInput,
  tabsContent,
} from "./SectionSwitcher.styles";
import { getNewsItems } from "@/data/newsItems";
import { useNewsTranslations } from "@/hooks/useNewsTranslations";

const SectionSwitcher = () => {
  const { t } = useNewsTranslations();

  const [items, setItems] = useState(getNewsItems());
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const tabsListWrapperRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    setItems(getNewsItems());
  }, [t]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const categoryKeys = [
    "All",
    "Campus",
    "Bachelor's",
    "Single-Cycle",
    "Master's",
    "Doctoral",
  ];

  const categoryLabels = categoryKeys.map((key) => t(`categories.${key}`));

  // Filter items based on debounced search query
  const filteredItems = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return items;
    }

    const query = debouncedSearchQuery.toLowerCase();
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query)
      );
    });
  }, [items, debouncedSearchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
        onValueChange={setActiveTab}
        className={tabsContainer()}
      >
        <div className={headerWrapper()}>
          <div className={tabsListWrapper()} ref={tabsListWrapperRef}>
            <TabsList className={tabsList()}>
              {categoryKeys.map((cat, index) => (
                <TabsTrigger key={cat} value={cat} className={tabsTrigger()}>
                  {categoryLabels[index]}
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

          <div className={searchWrapper()}>
            <Search className={searchIcon()} />
            <Input
              placeholder={t("searchPlaceholder")}
              className={searchInput()}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {categoryKeys.map((key) => {
          const categoryFiltered =
            key === "All"
              ? filteredItems
              : filteredItems.filter((item) => item.category === key);

          return (
            <TabsContent key={key} value={key} className={tabsContent()}>
              <NewsGrid items={categoryFiltered} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default SectionSwitcher;
