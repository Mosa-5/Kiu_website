import { cva } from "class-variance-authority";

export const container = cva("w-full max-w-[1680px] m-auto");

export const headerSection = cva(
  "pb-4 sm:pb-8 border-b-3 border-main mb-6 sm:mb-12"
);

export const title = cva(
  "font-semibold text-2xl max-sm:text-center sm:text-[40px] text-main mb-4"
);

export const subtitle = cva(
  "text-base sm:text-lg font-medium text-main flex items-center max-sm:justify-center gap-2"
);
export const smallSvg = cva("max-sm:hidden");

export const contentWrapper = cva(
  "w-full max-sm:flex-col flex gap-6 sm:gap-16 items-center"
);

export const textSection = cva("w-full");

export const textContent = cva(
  "text-sm sm:text-lg space-y-[14px] mb-6 sm:mb-[40px]"
);

export const readMoreButton = cva("h-12 w-full sm:w-40");
