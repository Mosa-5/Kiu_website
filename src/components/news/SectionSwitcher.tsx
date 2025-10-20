import { useState, useEffect, useMemo } from "react";
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

  return (
    <div className={container()}>
      <Tabs defaultValue="All" className={tabsContainer()}>
        <div className={headerWrapper()}>
          <div className={tabsListWrapper()}>
            <TabsList className={tabsList()}>
              {categoryKeys.map((cat, index) => (
                <TabsTrigger key={cat} value={cat} className={tabsTrigger()}>
                  {categoryLabels[index]}
                </TabsTrigger>
              ))}
            </TabsList>
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
