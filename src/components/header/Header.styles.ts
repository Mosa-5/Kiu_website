import { cva } from "class-variance-authority";

export const header = cva(
  `flex items-center z-10 justify-center w-full fixed left-1/2 -translate-x-1/2 border-1 h-[80px] transition-all duration-200`,
  {
    variants: {
      scrolled: {
        true: `max-w-full border-b-2 border-t-0 border-b-main rounded-none top-0 bg-white`,
        false: `max-w-[1680px] rounded-2xl top-[24px] bg-[#FFFFFFE5] shadow-[2px_4px_4px_0px_#00000040]`,
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

export const logo = cva(`w-[178px] h-[55px]`);

export const nav = cva(
  `flex text-xl w-full max-w-[1105px] justify-between font-medium *:text-main`
);

export const navLinkBase = cva(
  `transition-all duration-200 border-y-2 border-y-transparent hover:border-b-main`
);
