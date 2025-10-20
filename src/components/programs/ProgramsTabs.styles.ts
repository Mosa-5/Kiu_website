import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] m-auto");

export const tabsContainer = cva("w-full gap-12");

export const tabsListWrapper = cva(
  "flex max-sm:px-4 items-center border-0 sm:border-b-2 border-gray-200 w-full sm:h-[45px]"
);

export const tabsList = cva(
  "max-sm:grid max-sm:grid-cols-2 max-sm:h-full gap-1 sm:flex sm:gap-16 bg-transparent p-0 w-full"
);

export const tabsTrigger = cva([
  "max-sm:after:hidden  border-1 border-gray-200 max-sm:bg-gray-100 max-sm:data-[state=active]:bg-main max-sm:shadow-md max-sm:data-[state=active]:border-main max-sm:rounded-sm relative rounded-none sm:border-none bg-transparent px-0 py-1.5 sm:pb-2 text-lg sm:text-[22px] font-semibold text-black",
  "data-[state=active]:text-white sm:data-[state=active]:text-black data-[state=inactive]:text-gray-500 data-[state=active]:shadow-none data-[state=active]:after:opacity-100",
  "after:block after:opacity-0 after:absolute after:-bottom-[5px] after:left-0 after:h-1 after:w-full after:bg-main",
  "after:transition-opacity after:duration-200",
  "hover:after:opacity-100 hover:cursor-pointer",
]);

export const activeIndicator = cva(
  "absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-200 data-[state=active]:block hidden"
);

export const tabsContent = cva("");
