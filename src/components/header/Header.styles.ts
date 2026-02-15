import { cva } from "class-variance-authority";

export const header = cva(
  `max-sm:hidden flex items-center z-10 justify-center w-full drop-shadow-sm drop-shadow-blue-150 fixed left-1/2 -translate-x-1/2 border-1 h-[80px] transition-all duration-200`,
  {
    variants: {
      scrolled: {
        true: `max-w-full rounded-none top-0 bg-white h-[96px]`,
        false: `max-w-[1680px] rounded-2xl top-[24px] bg-[#FFFFFFE5] shadow-default`,
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }
);

export const innerContainer = cva(
  `flex items-center justify-between px-4 w-full max-w-[1680px]`
);

export const logo = cva(` h-[55px]`);

export const nav = cva(
  `flex text-xl w-full max-w-[1105px] justify-between font-medium *:text-main`
);

export const navLinkBase = cva(
  `transition-all duration-200 border-y-2 border-y-transparent hover:border-b-main`
);
