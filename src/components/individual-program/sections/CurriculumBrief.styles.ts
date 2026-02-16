import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8 scroll-mt-8");

export const headingBadge = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const mainHeading = cva(
  "text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium"
);

export const iconWrapper = cva("text-mainDark");

export const introParagraph = cva(
  "mb-6 sm:max-3xl:mb-4 text-xl sm:text-2xl sm:max-3xl:text-xl text-main font-medium"
);

export const grid = cva("grid md:grid-cols-3 gap-8 sm:max-3xl:gap-5 mb-6 sm:max-3xl:mb-4");

export const subsectionTitle = cva(
  "text-lg sm:text-xl sm:max-3xl:text-lg font-medium text-main mb-3 sm:max-3xl:mb-2"
);

export const subsectionTitleSmall = cva("text-lg sm:max-3xl:text-base font-medium text-main mb-3 sm:max-3xl:mb-2");

export const list = cva("text-sm sm:text-lg sm:max-3xl:text-base space-y-1");

export const listLarge = cva("text-lg sm:max-3xl:text-base space-y-1");

export const studyPlanLink = cva(
  "text-main hover:underline font-medium text-lg sm:max-3xl:text-base"
);
