import { cva } from "class-variance-authority";

export const section = cva("mb-12");

export const headingContainer = cva(
  "bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const title = cva("text-2xl sm:text-3xl font-medium text-mainDark");

export const icon = cva("text-mainDark");

export const newsletterList = cva("list-disc space-y-3 space-x-3");

export const newsletterLink = cva([
  "inline-block max-sm:w-full px-4 py-3 max-sm:text-center sm:py-2",
  "border shadow-lg border-main hover:border-mainDark rounded-full",
  "text-main hover:bg-blue-50 transition-colors text-md hover:text-mainDark font-medium",
]);
