import { cva } from "class-variance-authority";

export const section = cva("mb-12 scroll-mt-8");

export const headingBadge = cva(
  "inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const mainHeading = cva(
  "text-2xl sm:text-3xl font-medium"
);

export const iconWrapper = cva("text-mainDark");

export const introParagraph = cva(
  "mb-6 text-xl sm:text-2xl text-main font-medium"
);

export const grid = cva("grid md:grid-cols-3 gap-8 mb-6");

export const subsectionTitle = cva(
  "text-lg sm:text-xl font-medium text-main mb-3"
);

export const subsectionTitleSmall = cva("text-lg font-medium text-main mb-3");

export const list = cva("text-sm sm:text-lg space-y-1");

export const listLarge = cva("text-lg space-y-1");

export const studyPlanLink = cva(
  "text-main hover:underline font-medium text-lg"
);
