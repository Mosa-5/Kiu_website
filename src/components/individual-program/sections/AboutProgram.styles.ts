import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8 scroll-mt-8");

export const headingBadge = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const mainHeading = cva(
  "text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium"
);

export const iconWrapper = cva("text-mainDark");

export const introParagraph = cva("mb-6 sm:max-3xl:mb-4 text-lg sm:max-3xl:text-base text-main font-medium");

export const subheading = cva("text-lg sm:max-3xl:text-base font-medium text-main mb-2");

export const paragraph = cva("mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base");

export const paragraphSmall = cva("mb-2 text-sm sm:text-lg sm:max-3xl:text-base");

export const sectionHeading = cva(
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-medium text-main mb-3 sm:max-3xl:mb-2"
);

export const sectionHeadingWithMargin = cva(
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-medium text-main mb-3 sm:max-3xl:mb-2 mt-6 sm:max-3xl:mt-4"
);

export const list = cva("mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base space-y-1");

export const goalsList = cva("mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base space-y-2");

export const goalNumber = cva("font-medium text-main");

export const outcomeSection = cva("mb-4 sm:max-3xl:mb-3");

export const outcomeSubtitle = cva("font-medium text-sm sm:text-lg sm:max-3xl:text-base mb-2");

export const outcomeList = cva("text-sm sm:text-lg sm:max-3xl:text-base space-y-1 ml-4");

export const paragraphWithParts = cva("mb-4 sm:max-3xl:mb-3 text-sm sm:text-lg sm:max-3xl:text-base");

export const link = cva(
  "text-link hover:text-linkDark underline-offset-2 underline font-medium"
);
