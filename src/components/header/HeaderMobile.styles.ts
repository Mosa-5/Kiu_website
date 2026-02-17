import { cva } from "class-variance-authority";

export const container = cva([
  "flex items-center z-10 justify-center w-full fixed left-1/2 -translate-x-1/2",
  "border-1 h-[67px] transition-all duration-200 max-w-full",
  "border-b-2 border-t-0 border-b-main rounded-none top-0 bg-white lg:hidden",
]);

export const content = cva(["flex items-center justify-between px-4 w-full"]);

export const logo = cva(["w-[113px] h-[35px] "]);
