import { cva } from "class-variance-authority";

export const selectTrigger = cva([
  "max-sm:w-full max-sm:flex-1 h-[72px] flex items-center gap-2 justify-center",
  "focus-visible:ring-0 border-0 shadow-none text-lg text-main",
  "bg-mainLight [&>span]:text-white rounded-sm",
]);

export const iconWrapper = cva("size-5");

export const userName = cva("text-white font-medium");

export const selectContent = cva("w-full bg-mainLight");

export const selectItem = cva([
  "justify-center text-lg text-white",
  "[&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden",
  "focus:bg-transparent hover:border-l-white border-x-2 border-x-transparent",
  "focus:text-white rounded hover:!bg-main",
]);
