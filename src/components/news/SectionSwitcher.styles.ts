import { cva } from "class-variance-authority";

export const container = cva("");

export const tabsContainer = cva("w-full gap-12 sm:max-3xl:gap-8");

export const headerWrapper = cva(
  "max-lg:flex-col-reverse flex justify-between lg:h-12 sm:max-3xl:lg:h-10 gap-6 lg:gap-8 sm:max-3xl:lg:gap-16"
);

export const tabsListWrapper = cva(
  "relative flex items-center justify-between border-0 w-full max-w-[1100px] lg:border-b-2 border-gray-200 lg:h-[45px] sm:max-3xl:lg:h-[38px]"
);

export const tabsList = cva(
  "max-lg:grid max-lg:grid-cols-2 md:max-lg:grid-cols-3 max-lg:h-full gap-1 lg:flex lg:gap-16 sm:max-3xl:lg:gap-10 bg-transparent p-0 w-full"
);

export const tabsTrigger = cva([
  "border-1 border-gray-200 max-lg:bg-gray-100 max-lg:data-[state=active]:bg-main max-lg:shadow-md max-lg:data-[state=active]:border-main max-lg:rounded-sm relative rounded-none lg:border-none bg-transparent px-0 py-1.5 lg:pb-2 text-lg lg:text-[22px] sm:max-3xl:lg:text-lg font-semibold text-black",
  "data-[state=active]:text-white lg:data-[state=active]:text-black data-[state=inactive]:text-gray-500 data-[state=active]:shadow-none",
  "transition-colors duration-200",
  "hover:cursor-pointer",
]);

// Single shared underline that slides/resizes to match the active trigger,
// instead of each trigger fading its own underline in and out.
export const slidingIndicator = cva(
  "hidden lg:block absolute -bottom-[2px] left-0 h-[3px] rounded-full bg-main transition-[transform,width] duration-300 ease-out"
);

export const searchWrapper = cva(
  "relative w-full lg:max-w-[400px] h-11 lg:h-12 sm:max-3xl:lg:h-10 flex items-center"
);

export const searchIcon = cva(
  "absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 sm:h-5 sm:w-5 sm:max-3xl:h-4.5 sm:max-3xl:w-4.5 text-mainLight"
);

export const searchInput = cva([
  "pl-10 text-black font-medium w-full h-full text-lg sm:text-xl sm:max-3xl:text-lg",
  "placeholder:text-mainLight",
  "border-[2px] border-mainLight focus:border-mainLight focus:ring-1 focus:ring-mainLight",
  "shadow-sm",
]);

export const tabsContent = cva("");
