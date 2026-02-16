import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8 scroll-mt-8");

export const headingContainer = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const title = cva("text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium");

export const icon = cva("text-mainDark");

export const subtitle = cva("text-lg sm:text-xl sm:max-3xl:text-lg font-medium text-main mb-4 sm:max-3xl:mb-3");

export const link = cva(
  "text-link hover:text-linkDark underline-offset-2 underline"
);

export const text = cva("text-sm sm:text-lg sm:max-3xl:text-base");
