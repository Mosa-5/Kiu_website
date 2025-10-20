import { useState, useEffect } from "react";
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
import { useNewsTranslations } from "@/components/news-detail/hooks/useNewsTranslations";

const SectionSwitcher = () => {
  const { t } = useNewsTranslations();

  const [items, setItems] = useState(getNewsItems());

  // Update items when language changes
  useEffect(() => {
    setItems(getNewsItems());
  }, [t]); // react to t change (language)

  // English keys for filtering
  const categoryKeys = [
    "All",
    "Campus",
    "Bachelor's",
    "Single-Cycle",
    "Master's",
    "Doctoral",
  ];

  // Get translated labels using useNewsTranslations
  const categoryLabels = categoryKeys.map((key) => t(`categories.${key}`));

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
            />
          </div>
        </div>

        {categoryKeys.map((key) => {
          const filtered =
            key === "All"
              ? items
              : items.filter((item) => item.category === key);

          return (
            <TabsContent key={key} value={key} className={tabsContent()}>
              <NewsGrid items={filtered} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default SectionSwitcher;
