import { cva } from "class-variance-authority";

export const container = cva("mt-36 px-[120px]");

export const tabsContainer = cva("w-full gap-12");

export const headerWrapper = cva(
  "flex flex-row justify-between h-12 space-x-[120px]"
);

export const tabsListWrapper = cva(
  "flex items-center justify-between border-b-2 border-gray-200 w-full h-[45px]"
);

export const tabsList = cva("flex gap-16 bg-transparent p-0 w-full");

export const tabsTrigger = cva([
  "relative rounded-none border-none bg-transparent px-0 pb-2 text-[22px] font-semibold text-black",
  "data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:after:opacity-100",
  "after:block after:opacity-0 after:absolute after:-bottom-[5px] after:left-0 after:h-1 after:w-full after:bg-main",
  "after:transition-opacity after:duration-200",
  "hover:after:opacity-100 hover:cursor-pointer",
]);
export const activeIndicator = cva(
  "absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-200 data-[state=active]:block hidden"
);

export const searchWrapper = cva(
  "relative min-w-[402px] h-12 mr-auto flex items-center"
);

export const searchIcon = cva(
  "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-mainLight"
);

export const searchInput = cva([
  "pl-10 text-black font-medium h-full text-xl",
  "placeholder:text-mainLight",
  "border-[2px] border-mainLight focus:border-mainLight focus:ring-1 focus:ring-mainLight",
  "shadow-sm",
]);

export const tabsContent = cva("");
