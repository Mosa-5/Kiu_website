import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8");

export const headingBadge = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const heading = cva("text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium");

export const iconWrapper = cva("text-mainDark");

export const paragraph = cva("mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base");

export const link = cva(
  "text-link hover:text-linkDark underline-offset-2 underline font-medium"
);

export const blueText = cva("text-mainDark font-medium");
