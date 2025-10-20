import { cva } from "class-variance-authority";

export const container = cva(["max-w-[1680px] max-sm:px-4 mx-auto font-sans"]);

export const headerSection = cva(["mb-2 sm:mb-12"]);

export const headerBox = cva([
  "bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6",
]);

export const headerTitle = cva([
  "text-2xl sm:text-3xl font-medium text-mainDark",
]);

export const headerIcon = cva(["text-mainDark"]);

export const headerSubtitle = cva([
  "text-lg sm:text-xl font-semibold text-main sm:mb-6",
]);

export const introSection = cva(["sm:mb-12"]);

export const programsSection = cva(["sm:mb-12"]);

export const closingSection = cva(["sm:mb-12"]);

export const campusSection = cva(["sm:mb-12"]);

export const campusTitle = cva([
  "text-xl sm:text-2xl font-semibold text-main mb-6",
]);

export const applySection = cva(["mb-5 sm:mb-12"]);

export const applyTitle = cva([
  "text-xl sm:text-2xl font-semibold text-main mb-3 sm:mb-6",
]);

export const applyIntroText = cva(["mb-4 text-sm sm:text-lg"]);

export const applyList = cva(["list-none space-y-2"]);

export const applyListItem = cva([""]);

export const applyLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium text-sm sm:text-lg",
]);

export const timelineSection = cva(["mb-12"]);

export const timelineTitle = cva([
  "text-xl sm:text-2xl font-semibold text-main mb-3 sm:mb-6",
]);

export const programsIntroText = cva(["mb-6 text-sm sm:text-lg"]);
