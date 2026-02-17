import { cva } from "class-variance-authority";

export const container = cva("w-full max-w-[1680px] md:max-3xl:max-w-[1400px] m-auto");

export const headerSection = cva(
  "pb-4 md:pb-8 md:max-3xl:pb-6 border-b-3 border-main mb-6 md:mb-12 md:max-3xl:mb-8"
);

export const title = cva(
  "font-semibold text-2xl max-md:text-center md:text-[40px] md:max-3xl:text-[30px] md:max-lg:text-[24px] text-main mb-4 md:max-3xl:mb-3"
);

export const subtitle = cva(
  "text-base md:text-lg md:max-3xl:text-sm font-medium text-main flex items-center max-md:justify-center gap-2"
);
export const smallSvg = cva("max-md:hidden");

export const contentWrapper = cva(
  "w-full max-md:flex-col flex gap-6 md:gap-16 md:max-3xl:gap-10 items-start lg:items-center"
);

export const textSection = cva("w-full");

export const textContent = cva(
  "text-sm md:text-lg md:max-3xl:text-sm space-y-[14px] mb-6 md:mb-[40px] md:max-3xl:mb-6"
);

export const readMoreButton = cva("h-12 md:max-3xl:h-10 w-full md:w-40 md:max-3xl:w-36 md:max-3xl:text-base");
