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

export const sectionTitle = cva(["font-semibold text-2xl sm:text-3xl sm:max-3xl:text-2xl text-mainDark"]);

export const paragraph = cva(["mb-[14px] sm:max-3xl:mb-3 text-sm sm:text-lg sm:max-3xl:text-base text-gray-800 max-w-[90ch]"]);

export const link = cva(["text-link hover:text-linkDark underline underline-offset-2"]);

export const mediaLayout = cva([
  "sm:grid sm:grid-cols-[420px_1fr] sm:max-3xl:grid-cols-[340px_1fr] gap-8 sm:max-3xl:gap-6 items-start",
]);

export const mediaImage = cva([
  "mb-6 sm:mb-0 w-full h-[220px] sm:h-[280px] sm:max-3xl:h-[230px]",
]);

export const mediaImageTag = cva([
  "w-full h-full object-cover rounded-lg shadow-lg",
]);

export const bulletList = cva(["ml-4 sm:ml-5 mb-4 sm:mb-6 sm:max-3xl:mb-5 space-y-2 max-w-[90ch]"]);

export const listItem = cva(["text-sm sm:text-lg sm:max-3xl:text-base text-gray-800 list-disc"]);

export const yearWrapper = cva([
  "mt-6 sm:max-3xl:mt-4 border-l-2 border-slate-200 pl-5 sm:max-3xl:pl-4",
]);

export const yearTitle = cva(["font-semibold text-lg sm:max-3xl:text-base text-mainDark mb-2"]);

export const conferenceSection = cva(["text-sm sm:text-lg sm:max-3xl:text-base text-gray-800 mb-1"]);
