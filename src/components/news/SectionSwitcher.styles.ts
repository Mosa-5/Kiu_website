import { cva } from "class-variance-authority";

export const container = cva("mt-36 px-[120px]");

export const tabsContainer = cva("w-full");

export const headerWrapper = cva("flex flex-row justify-between h-12");

export const tabsListWrapper = cva(
  "flex items-center justify-between border-b border-gray-300 w-[920px] h-[45px]"
);

export const tabsList = cva("flex space-x-6 bg-transparent p-0 gap-10 w-full");

export const tabsTrigger = cva([
  "relative rounded-none border-none bg-transparent px-0 pb-2 text-2xl font-semibold text-black",
  "data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:after:opacity-100",
  "after:block after:opacity-0 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-[#3C70AF]",
  "after:transition-opacity after:duration-200",
  "hover:after:opacity-100 hover:cursor-pointer",
]);
export const activeIndicator = cva(
  "absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-200 data-[state=active]:block hidden"
);

export const searchWrapper = cva(
  "relative w-80 h-12 mr-auto ml-20 flex items-center"
);

export const searchIcon = cva(
  "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4879B4]"
);

export const searchInput = cva([
  "pl-10 text-black font-medium h-full text-xl",
  "placeholder:text-[#4879B4]",
  "border border-[#4879B4] focus:border-[#4879B4] focus:ring-1 focus:ring-[#4879B4]",
  "shadow-[2px_3px_4px_0px_rgba(72,121,180,0.3)]",
]);

export const tabsContent = cva("mt-8");
