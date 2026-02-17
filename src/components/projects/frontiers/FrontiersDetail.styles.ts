import { cva } from "class-variance-authority";

export const container = cva([
  "max-w-[1680px] sm:max-3xl:max-w-[1400px] max-sm:px-4 sm:px-6 mx-auto sm:py-10 sm:max-3xl:py-8 font-sans",
]);

export const bannerImage = cva([
  "brightness-75 max-sm:hidden mb-10 sm:max-3xl:mb-8 rounded-xl",
]);
export const sectionHeader = cva([
  "bg-headingBg inline-flex items-center gap-4 sm:max-3xl:gap-3 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4",
]);

export const sectionTitle = cva([
  "text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium text-mainDark",
]);

export const sectionIcon = cva(["text-mainDark"]);

export const sectionIconMain = cva(["text-main"]);

export const paragraph = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const richTextLink = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const richTextHighlight = cva(["text-main"]);

export const subsectionTitle = cva([
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-medium text-main mb-3 sm:max-3xl:mb-2",
]);

export const subsectionTitleSmall = cva(["text-lg sm:max-3xl:text-base font-medium text-main mb-3 sm:max-3xl:mb-2"]);

export const subsectionTitleSmaller = cva([
  "text-sm sm:text-xl sm:max-3xl:text-lg font-medium text-main mb-3 sm:max-3xl:mb-2",
]);

export const listDisc = cva(["list-disc pl-5 mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const listDiscLarge = cva(["list-disc pl-5 mb-6 sm:max-3xl:mb-4 text-lg sm:max-3xl:text-base"]);

export const listItem = cva([""]);

export const paragraphSmall = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const accommodationText = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const registrationContent = cva(["mb-2 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const registrationHighlight = cva(["text-main"]);

export const registrationLink = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const registrationLinksContainer = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const registrationLinkItem = cva(["mb-1"]);

export const registrationLinkItemHover = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const registrationMainLink = cva([
  "mb-6 sm:max-3xl:mb-4 text-xl sm:text-2xl sm:max-3xl:text-xl text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const feesTitle = cva(["text-base sm:max-3xl:text-sm font-medium text-gray-800 mb-2 mt-2"]);

export const feesList = cva(["list-disc pl-5 mb-2 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const feesNote = cva(["text-sm sm:text-lg sm:max-3xl:text-base mb-6 sm:max-3xl:mb-4"]);

export const committeeTitle = cva(["text-base sm:max-3xl:text-sm font-medium text-main mb-2"]);

export const speakerLink = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const speakersList = cva([
  "list-disc pl-5 mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base space-y-1",
]);

export const speakersDescription = cva(["mb-3 sm:max-3xl:mb-2 text-md sm:text-lg sm:max-3xl:text-base"]);
