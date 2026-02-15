import { cva } from "class-variance-authority";

export const container = cva(
  "max-md:hidden sticky top-40 z-40 w-[315px] shrink-0 h-fit"
);

export const nav = cva("flex flex-col gap-3");

export const navTitle = cva("text-xl px-3 pb-4 font-bold text-[#1B3D6E] text-[25px] w-full");

export const navButton = cva(
  "w-full text-left px-3 py-3 text-base sm:text-lg font-normal rounded-md transition-colors",
  {
    variants: {
      active: {
        true: "text-white bg-main ",
        false: "text-main hover:bg-blue-50 hover:text-[#1B3D6E] hover:cursor-pointer active:bg-blue-50 duration-200",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
