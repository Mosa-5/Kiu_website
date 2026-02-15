import { cva } from "class-variance-authority";

export const container = cva("md:hidden sticky top-3/7 z-50 h-0 w-0");

export const sheetContent = cva([
  "w-[230px] sm:w-[300px] h-fit top-1/2 -translate-y-1/2 rounded-r-2xl",
  "border-l-0 border-3 overflow-hidden border-main shadow-2xl",
]);

export const nav = cva("flex flex-col");

export const navButton = cva([
  "w-full text-left hover:cursor-pointer text-main hover:text-blue-900",
  "hover:bg-blue-50 text-base sm:text-lg rounded-md transition-colors",
  "px-3 py-4 font-medium",
]);

export const triggerButton = cva(
  [
    "bg-main rounded-l-none rounded-r-lg h-36 w-10 sm:w-12",
    "flex flex-col items-center justify-center gap-9 shadow-lg transition-all",
    "relative z-50",
  ],
  {
    variants: {
      isOpen: {
        true: "opacity-0 duration-0",
        false: "duration-1000",
      },
    },
  }
);

export const buttonText = cva(
  "transform -rotate-90 whitespace-nowrap text-lg sm:text-xl font-medium tracking-wider"
);
