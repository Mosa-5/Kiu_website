import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import newsItems from "@/data/newsItems";
import {
  container,
  tabsContainer,
  headerWrapper,
  tabsListWrapper,
  tabsList,
  tabsTrigger,
  activeIndicator,
  searchWrapper,
  searchIcon,
  searchInput,
  tabsContent,
} from "./SectionSwitcher.styles";

const SectionSwitcher = () => {
  const categories = [
    "All",
    "Campus",
    "Bachelor's",
    "Single-Cycle",
    "Master's",
    "Doctoral",
  ];

  return (
    <div className={container()}>
      <Tabs defaultValue="All" className={tabsContainer()}>
        <div className={headerWrapper()}>
          <div className={tabsListWrapper()}>
            <TabsList className={tabsList()}>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className={tabsTrigger()}>
                  {cat}
                  <span className={activeIndicator()} />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className={searchWrapper()}>
            <Search className={searchIcon()} />
            <Input placeholder="Search" className={searchInput()} />
          </div>
        </div>

        {categories.map((cat) => {
          const filtered =
            cat === "All"
              ? newsItems
              : newsItems.filter((item) => item.category === cat);

          return (
            <TabsContent key={cat} value={cat} className={tabsContent()}>
              <NewsGrid items={filtered} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default SectionSwitcher;
