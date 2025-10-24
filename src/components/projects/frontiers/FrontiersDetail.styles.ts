import { cva } from "class-variance-authority";

export const container = cva([
  "max-w-[1680px] max-sm:px-4 mx-auto sm:py-10 font-sans",
]);

export const bannerImage = cva([
  "brightness-75 max-sm:hidden mb-10  rounded-xl",
]);
export const sectionHeader = cva([
  "bg-headingBg inline-flex items-center gap-4 px-4 py-2 rounded mb-6",
]);

export const sectionTitle = cva([
  "text-2xl sm:text-3xl font-medium text-mainDark",
]);

export const sectionIcon = cva(["text-mainDark"]);

export const sectionIconMain = cva(["text-main"]);

export const paragraph = cva(["mb-6 text-sm sm:text-lg"]);

export const richTextLink = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const richTextHighlight = cva(["text-main"]);

export const subsectionTitle = cva([
  "text-xl sm:text-2xl font-medium text-main mb-3",
]);

export const subsectionTitleSmall = cva(["text-lg font-medium text-main mb-3"]);

export const subsectionTitleSmaller = cva([
  "text-sm sm:text-xl font-medium text-main mb-3",
]);

export const listDisc = cva(["list-disc pl-5 mb-6 text-sm sm:text-lg"]);

export const listDiscLarge = cva(["list-disc pl-5 mb-6 text-lg"]);

export const listItem = cva([""]);

export const paragraphSmall = cva(["mb-6 text-sm sm:text-lg"]);

export const accommodationText = cva(["mb-6 text-sm sm:text-lg"]);

export const registrationContent = cva(["mb-2 text-sm sm:text-lg"]);

export const registrationHighlight = cva(["text-main"]);

export const registrationLink = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const registrationLinksContainer = cva(["mb-6 text-sm sm:text-lg"]);

export const registrationLinkItem = cva(["mb-1"]);

export const registrationLinkItemHover = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const registrationMainLink = cva([
  "mb-6 text-xl sm:text-2xl text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const feesTitle = cva(["text-base font-medium text-gray-800 mb-2 mt-2"]);

export const feesList = cva(["list-disc pl-5 mb-2 text-sm sm:text-lg"]);

export const feesNote = cva(["text-sm sm:text-lg mb-6"]);

export const committeeTitle = cva(["text-base font-medium text-main mb-2"]);

export const speakerLink = cva([
  "text-link hover:text-linkDark underline-offset-2 underline font-medium",
]);

export const speakersList = cva([
  "list-disc pl-5 mb-6 text-sm sm:text-lg space-y-1",
]);

export const speakersDescription = cva(["mb-3 text-md sm:text-lg"]);
