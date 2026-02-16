import { cva } from "class-variance-authority";

export const container = cva("w-full max-w-[1680px] sm:max-3xl:max-w-[1400px] m-auto");

export const headerSection = cva(
  "pb-4 sm:pb-8 sm:max-3xl:pb-6 border-b-3 border-main mb-6 sm:mb-12 sm:max-3xl:mb-8"
);

export const title = cva(
  "font-semibold text-2xl max-sm:text-center sm:text-[40px] sm:max-3xl:text-[30px] text-main mb-4 sm:max-3xl:mb-3"
);

export const subtitle = cva(
  "text-base sm:text-lg sm:max-3xl:text-sm font-medium text-main flex items-center max-sm:justify-center gap-2"
);
export const smallSvg = cva("max-sm:hidden");

export const contentWrapper = cva(
  "w-full max-sm:flex-col flex gap-6 sm:gap-16 sm:max-3xl:gap-10 items-center"
);

export const textSection = cva("w-full");

export const textContent = cva(
  "text-sm sm:text-lg sm:max-3xl:text-sm space-y-[14px] mb-6 sm:mb-[40px] sm:max-3xl:mb-6"
);

export const readMoreButton = cva("h-12 sm:max-3xl:h-10 w-full sm:w-40 sm:max-3xl:w-36 sm:max-3xl:text-base");
