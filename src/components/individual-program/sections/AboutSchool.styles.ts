import { cva } from "class-variance-authority";

export const section = cva("mb-12");

export const headingBadge = cva(
  "inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const heading = cva("text-2xl sm:text-3xl font-medium");

export const iconWrapper = cva("text-mainDark");

export const paragraph = cva("mb-6 text-sm sm:text-lg");

export const link = cva(
  "text-link hover:text-linkDark underline-offset-2 underline font-medium"
);

export const blueText = cva("text-mainDark font-medium");
