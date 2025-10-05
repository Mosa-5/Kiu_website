import { cva } from "class-variance-authority";

export const sectionName = cva("text-[40px] font-semibold text-main mb-20");

export const container = cva("max-w-[1680px] m-auto");

export const tabsContainer = cva("w-full");

export const headerWrapper = cva("flex flex-row justify-between h-12");

export const tabsListWrapper = cva(
  "flex items-center border-b border-gray-300 w-full h-[45px]"
);

export const tabsList = cva("flex space-x-6 bg-transparent p-0 gap-10");

export const tabsTrigger = cva([
  "relative rounded-none border-none bg-transparent px-0 pb-2 text-2xl font-semibold text-black",
  "data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:after:opacity-100",
  "after:block after:opacity-0 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-main",
  "after:transition-opacity after:duration-200",
  "hover:after:opacity-100 hover:cursor-pointer",
]);
export const activeIndicator = cva(
  "absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-200 data-[state=active]:block hidden"
);

export const tabsContent = cva("mt-8");
