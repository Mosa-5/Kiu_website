import { cva } from "class-variance-authority";

export const section = cva("mb-12 scroll-mt-8");

export const headingBadge = cva(
  "bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const mainHeading = cva(
  "text-2xl sm:text-3xl font-medium text-mainDark"
);

export const iconWrapper = cva("text-mainDark");

export const introParagraph = cva("mb-6 text-lg text-main font-medium");

export const subheading = cva("text-lg font-medium text-main mb-2");

export const paragraph = cva("mb-6 text-sm sm:text-lg");

export const paragraphSmall = cva("mb-2 text-sm sm:text-lg");

export const sectionHeading = cva(
  "text-xl sm:text-2xl font-medium text-main mb-3"
);

export const sectionHeadingWithMargin = cva(
  "text-xl sm:text-2xl font-medium text-main mb-3 mt-6"
);

export const list = cva("mb-6 text-sm sm:text-lg space-y-1");

export const goalsList = cva("mb-6 text-sm sm:text-lg space-y-2");

export const goalNumber = cva("font-medium text-main");

export const outcomeSection = cva("mb-4");

export const outcomeSubtitle = cva("font-medium text-sm sm:text-lg mb-2");

export const outcomeList = cva("text-sm sm:text-lg space-y-1 ml-4");

export const paragraphWithParts = cva("mb-4 text-sm sm:text-lg");

export const link = cva(
  "text-link hover:text-linkDark underline-offset-2 underline font-medium"
);
