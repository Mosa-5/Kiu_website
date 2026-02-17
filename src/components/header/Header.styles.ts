import { cva } from "class-variance-authority";

export const header = cva(
  `max-lg:hidden flex items-center z-10 justify-center w-full drop-shadow-sm drop-shadow-blue-150 fixed left-1/2 -translate-x-1/2 border-1 h-[80px] max-3xl:h-[68px] transition-all duration-200`,
  {
    variants: {
      scrolled: {
        true: `max-w-full rounded-none top-0 bg-white h-[96px] max-3xl:h-[80px]`,
        false: `max-w-[1680px] max-3xl:max-w-[calc(100%-80px)] rounded-2xl top-[24px] bg-[#FFFFFFE5] shadow-default`,
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }
);

export const innerContainer = cva(
  `flex items-center justify-between max-xl:px-2 px-4 3xl:px-8 w-full max-3xl:max-w-[1380px] max-w-[1680px]`
);

export const logo = cva(` h-[55px] max-3xl:h-[45px] shrink-0`);

export const nav = cva(
  `flex text-xl max-2xl:px-3 max-3xl:text-[15px] w-full max-w-[1105px] max-3xl:max-w-[900px] justify-between font-medium *:text-main`
);

export const navLinkBase = cva(
  `transition-all duration-200 border-y-2 border-y-transparent hover:border-b-main`
);
