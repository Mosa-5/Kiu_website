import programItems from "@/data/programItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  activeIndicator,
  headerWrapper,
  tabsContainer,
  tabsContent,
  tabsList,
  tabsListWrapper,
  tabsTrigger,
  container,
  sectionName,
} from "./Programs.styles";

import ProgramsGrid from "./programsGrid";

const Programs = () => {
  const categories = ["Bachelor's", "Single-Cycle", "Master's", "Doctoral"];

  return (
    <div className={container()}>
      <h2 className={sectionName()}>Programs</h2>

      <Tabs defaultValue="Bachelor's" className={tabsContainer()}>
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
        </div>

        {categories.map((cat) => {
          const filtered =
            cat === "All"
              ? programItems
              : programItems.filter((item) => item.category === cat);

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

export default Programs;
