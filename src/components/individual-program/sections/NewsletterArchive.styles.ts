import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8");

export const headingContainer = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const title = cva("text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium");

export const icon = cva("text-mainDark");

export const newsletterList = cva("list-disc space-y-3 sm:max-3xl:space-y-2 space-x-3");

export const newsletterLink = cva([
  "inline-block max-sm:w-full px-4 sm:max-3xl:px-3 py-3 max-sm:text-center sm:py-2",
  "border shadow-lg border-main hover:border-mainDark rounded-full",
  "text-main hover:bg-blue-50 transition-colors text-md sm:max-3xl:text-sm hover:text-mainDark font-medium",
]);
