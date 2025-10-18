import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] m-auto");

export const tabsContainer = cva("w-full gap-12");

export const headerWrapper = cva(
  "max-sm:flex-col-reverse flex justify-between sm:h-12 gap-6 sm:gap-[120px]"
);

export const tabsListWrapper = cva(
  "flex items-center justify-between max-sm:border-0 border-b-2 border-gray-200 w-full sm:h-[45px]"
);

export const tabsList = cva(
  "max-sm:grid max-sm:grid-cols-2 max-sm:h-full gap-x-1 gap-y-1 sm:flex sm:gap-16 bg-transparent p-0 w-full"
);

export const tabsTrigger = cva([
  "max-sm:after:hidden  border-1 border-gray-200 max-sm:bg-gray-100 max-sm:data-[state=active]:bg-main max-sm:shadow-md max-sm:data-[state=active]:border-main max-sm:rounded-md relative rounded-none sm:border-none bg-transparent px-0 py-1.5 sm:pb-2 text-[22px] font-semibold text-black",
  "data-[state=active]:text-white sm:data-[state=active]:text-black data-[state=inactive]:text-gray-500 data-[state=active]:shadow-none data-[state=active]:after:opacity-100",
  "after:block after:opacity-0 after:absolute after:-bottom-[5px] after:left-0 after:h-1 after:w-full after:bg-main",
  "after:transition-opacity after:duration-200",
  "hover:after:opacity-100 hover:cursor-pointer",
]);

export const searchWrapper = cva(
  "relative max-sm:w-full sm:min-w-[402px] h-12 mr-auto flex items-center"
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
