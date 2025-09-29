import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NewsGrid from "./news-grid";
import newsItems from "@/data/newsItems";

const SectionSwitcher = () => {
  const categories = ["All", "Campus", "Bachelor's", "Single-Cycle", "Master's", "Doctoral"];

  return (
    <div className="mt-36 px-[120px]">
      <Tabs defaultValue="All" className="w-full">
        <div className="flex flex-row justify-between">
          <div className="flex items-center justify-between border-b border-gray-300 w-[920px] h-[45px]">
            <TabsList className="flex space-x-6 bg-transparent p-0 gap-10 w-full">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="relative rounded-none border-none bg-transparent px-0 pb-2 text-2xl font-semibold text-black data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:after:block after:hidden after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-[#3C70AF]"
                >
                  {cat}
                  <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-200 data-[state=active]:block hidden" />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="relative w-80 mr-88">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        {categories.map((cat) => {
          const filtered =
            cat === "All" ? newsItems : newsItems.filter((item) => item.category === cat);

          return (
            <TabsContent key={cat} value={cat} className="mt-8">
              <NewsGrid items={filtered} />
            </TabsContent>
          );
        })}
      </Tabs>
      
    </div>
  );
};

export default SectionSwitcher;
