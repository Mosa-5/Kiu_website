import { cva } from "class-variance-authority";

export const container = cva(["max-w-[1680px] max-sm:px-4 mx-auto"]);

export const section = cva(["mb-12"]);

export const introHeader = cva([
  "bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6",
]);

export const introTitle = cva([
  "text-2xl sm:text-3xl font-medium text-mainDark",
]);

export const icon = cva(["text-mainDark"]);

export const sectionTitle = cva([
  "text-xl sm:text-2xl font-semibold text-main mb-6",
]);

export const sectionSubtitle = cva([
  "text-xl sm:text-2xl font-semibold text-main mb-6",
]);

export const paragraph = cva(["mb-6 text-sm sm:text-lg"]);

export const paragraphSmall = cva(["mb-4 text-sm sm:text-lg"]);

export const richTextLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium",
]);

export const programsIntro = cva(["mb-6 text-sm sm:text-lg"]);

export const programGrid = cva([
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",
]);

export const programGridContainer = cva(["mb-8"]);

export const programBadge = cva([
  "px-4 py-3 bg-main rounded-md text-center font-medium text-white shadow-md min-h-[60px] flex items-center justify-center",
]);

export const programLabel = cva(["mb-4 max-sm:text-center text-lg"]);

export const applyList = cva(["list-none space-y-2"]);

export const applyListItem = cva([""]);

export const applyLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium text-sm sm:text-lg",
]);

export const timelineParagraph = cva(["mb-4 text-sm sm:text-lg"]);
