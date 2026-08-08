import { cva } from "class-variance-authority";

export const container = cva(["max-sm:px-4 font-sans"]);

export const section = cva(["mb-12 sm:max-3xl:mb-8 scroll-mt-8"], {
  variants: {
    isFirst: {
      true: ["scroll-mt-0"],
      false: ["border-t border-slate-200 pt-10 sm:max-3xl:pt-8"],
    },
  },
  defaultVariants: {
    isFirst: false,
  },
});

export const sectionHeaderRow = cva([
  "flex items-center gap-3 sm:max-3xl:gap-2 mb-6 sm:max-3xl:mb-4",
]);

export const sectionContent = cva(["sm:pl-12 sm:max-3xl:pl-10"]);

export const sectionIndex = cva([
  "hidden sm:flex items-center justify-center w-9 h-9 sm:max-3xl:w-8 sm:max-3xl:h-8 rounded-full bg-headingBg border border-mainLight/30 shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:max-3xl:[&>svg]:w-3.5 sm:max-3xl:[&>svg]:h-3.5",
]);

export const sectionTitle = cva([
  "text-2xl sm:text-3xl sm:max-3xl:text-2xl font-semibold text-mainDark",
]);

export const sectionSubtitle = cva([
  "text-lg sm:text-xl sm:max-3xl:text-lg font-semibold text-main mb-4 sm:mb-6 sm:max-3xl:mb-4",
]);

export const paragraph = cva([
  "mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base max-w-[90ch]",
]);

export const richTextLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium",
]);

export const programGroup = cva(["mb-8 sm:max-3xl:mb-6"]);

export const programGroupTitle = cva([
  "mb-3 sm:max-3xl:mb-2 text-lg sm:max-3xl:text-base font-semibold text-mainDark",
]);

export const programGroupList = cva([
  "list-disc marker:text-mainLight pl-5 space-y-1.5 max-w-[90ch]",
]);

export const programGroupItem = cva([
  "text-sm sm:text-lg sm:max-3xl:text-base text-gray-800",
]);

export const applyList = cva(["list-none space-y-2"]);

export const applyListItem = cva([""]);
