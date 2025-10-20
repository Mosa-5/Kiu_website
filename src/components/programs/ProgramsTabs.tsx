import programItems from "@/data/programItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  activeIndicator,
  tabsContainer,
  tabsContent,
  tabsList,
  tabsListWrapper,
  tabsTrigger,
  container,
} from "./ProgramsTabs.styles";
import ProgramsGrid from "./ProgramsGrid";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProgramTranslations } from "../../hooks/useProgramTranslations";

const ProgramTabs = () => {
  const { t } = useProgramTranslations();
  const categories = ["Bachelor", "Single-Cycle", "Master", "Doctoral"];
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("Bachelor");

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

  return (
    <div className={container()}>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className={tabsContainer()}
      >
        <div className={tabsListWrapper()}>
          <TabsList className={tabsList()}>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className={tabsTrigger()}>
                {getTranslatedCategory(cat)}
                <span className={activeIndicator()} />
              </TabsTrigger>
            ))}
          </TabsList>
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
