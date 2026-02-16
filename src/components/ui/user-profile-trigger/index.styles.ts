import { cva } from "class-variance-authority";

export const selectTrigger = cva([
  "max-sm:w-full max-sm:flex-1  px-3 max-3xl:px-2 py-[5px] text-sm flex items-center gap-2 justify-center hover:cursor-pointer",
  "focus-visible:ring-0 border-0 shadow-none text-lg max-3xl:text-base text-main",
  "bg-mainLight [&>span]:text-white rounded-sm",
]);

export const iconWrapper = cva("size-5");
export const chevronDown = cva("size-4 text-white max-sm:hidden");
export const userName = cva("text-white font-medium");

export const selectContent = cva("w-full max-w-full bg-mainLight");

export const selectItem = cva([
  "justify-center text-lg text-white hover:cursor-pointer",
  "[&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden",
  "focus:bg-transparent hover:border-l-white border-x-2 border-x-transparent",
  "focus:text-white rounded hover:!bg-main",
]);
