import { cva } from "class-variance-authority";

export const container = cva(["max-sm:px-4 font-sans"]);

export const headerSection = cva(["mb-2 sm:mb-12 sm:max-3xl:mb-8 scroll-mt-8"]);

export const headerBox = cva([
  "bg-[#E3F0FF] inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4",
]);

export const headerTitle = cva([
  "text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium text-mainDark",
]);

export const headerIcon = cva(["text-mainDark"]);

export const headerSubtitle = cva([
  "text-lg sm:text-xl sm:max-3xl:text-lg font-semibold text-main sm:mb-6 sm:max-3xl:mb-4",
]);

export const introSection = cva(["sm:mb-12 sm:max-3xl:mb-8 scroll-mt-8"]);

export const programsSection = cva(["sm:mb-12 sm:max-3xl:mb-8"]);

export const closingSection = cva(["sm:mb-12 sm:max-3xl:mb-8 scroll-mt-8"]);

export const campusSection = cva(["sm:mb-12 sm:max-3xl:mb-8 scroll-mt-8"]);

export const campusTitle = cva([
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-semibold text-main mb-6 sm:max-3xl:mb-4",
]);

export const applySection = cva(["mb-5 sm:mb-12 sm:max-3xl:mb-8 scroll-mt-8"]);

export const applyTitle = cva([
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-semibold text-main mb-3 sm:mb-6 sm:max-3xl:mb-4",
]);

export const applyIntroText = cva(["mb-4 sm:max-3xl:mb-3 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const applyList = cva(["list-none space-y-2"]);

export const applyListItem = cva([""]);

export const applyLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium text-sm sm:text-lg sm:max-3xl:text-base",
]);

export const timelineSection = cva(["mb-12 sm:max-3xl:mb-8 scroll-mt-8"]);

export const timelineTitle = cva([
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-semibold text-main mb-3 sm:mb-6 sm:max-3xl:mb-4",
]);

export const programsIntroText = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);
