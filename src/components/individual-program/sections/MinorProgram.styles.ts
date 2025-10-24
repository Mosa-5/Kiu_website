import { cva } from "class-variance-authority";

export const section = cva("mb-12 scroll-mt-8");

export const headingContainer = cva(
  "inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const title = cva("text-2xl sm:text-3xl font-medium");

export const icon = cva("text-mainDark");

export const subtitle = cva("text-lg sm:text-xl font-medium text-main mb-4");

export const link = cva(
  "text-link hover:text-linkDark underline-offset-2 underline"
);

export const text = cva("text-sm sm:text-lg");
