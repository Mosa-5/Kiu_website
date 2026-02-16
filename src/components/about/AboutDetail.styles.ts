import { cva } from "class-variance-authority";

export const container = cva(["max-sm:px-4 font-sans"]);

export const section = cva(["mb-12 sm:max-3xl:mb-8 scroll-mt-8"], {
  variants: {
    isFirst: {
      true: ["scroll-mt-0"],
      false: [],
    },
  },
});

export const sectionHeader = cva([
  "bg-headingBg inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4",
]);

export const sectionTitle = cva(["font-medium text-mainDark"], {
  variants: {
    size: {
      large: ["text-2xl sm:text-3xl sm:max-3xl:text-2xl"],
      medium: ["text-xl sm:max-3xl:text-lg"],
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export const icon = cva(["text-mainDark"]);

export const paragraph = cva(["mb-6 sm:max-3xl:mb-4"], {
  variants: {
    size: {
      small: ["text-sm sm:text-lg sm:max-3xl:text-base"],
      large: ["text-lg sm:text-lg sm:max-3xl:text-base"],
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const signatureContainer = cva([
  "mt-10 sm:max-3xl:mt-8 pl-6 sm:max-3xl:pl-4 border-l-2 border-slate-200",
]);

export const signatureName = cva([
  "text-base sm:max-3xl:text-sm font-semibold text-slate-900 mb-1",
]);

export const signatureTitle = cva(["text-sm sm:max-3xl:text-xs text-slate-600 mb-0.5"]);

export const signatureDate = cva(["text-sm sm:max-3xl:text-xs text-slate-500 mb-3"]);

export const signatureLink = cva([
  "text-sm sm:max-3xl:text-xs text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium",
]);

export const presidentImage = cva([
  "float-right ml-8 sm:max-3xl:ml-6 sm:mb-6 sm:max-3xl:mb-4 w-full max-w-[400px] sm:max-3xl:max-w-[320px] h-[430px] sm:max-3xl:h-[350px]",
]);

export const presidentImageTag = cva(["w-full rounded-lg shadow-lg"]);

export const clearFloat = cva(["clear-both"]);

export const advisoryMemberContainer = cva(["space-y-6 sm:max-3xl:space-y-4"]);

export const advisoryMember = cva([""]);

export const advisoryMemberName = cva(["text-lg sm:max-3xl:text-base font-semibold text-main mb-1"]);

export const advisoryMemberText = cva(["text-sm sm:text-lg sm:max-3xl:text-base"]);

export const richTextLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium",
]);

export const programList = cva(["list-none mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base space-y-2"]);

export const programListItem = cva(["text-link hover:text-linkDark"]);

export const programLink = cva(["underline underline-offset-2 font-medium"]);

export const programIntroText = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const programMasterText = cva(["mb-3 sm:max-3xl:mb-2 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const programFutureText = cva(["mb-3 sm:max-3xl:mb-2 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const futureDisciplinesGrid = cva([
  "grid grid-cols-2 md:grid-cols-3 gap-3 sm:max-3xl:gap-2 mb-6 sm:max-3xl:mb-4",
]);

export const disciplineBadge = cva([
  "px-4 sm:max-3xl:px-3 py-3 sm:max-3xl:py-2 bg-main rounded-md flex justify-center items-center text-center font-medium border-2 text-sm sm:text-lg sm:max-3xl:text-sm border-main pointer-events-none text-white shadow-md",
]);

export const closingText = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base"]);

export const calendarContainer = cva([
  "mb-6 sm:max-3xl:mb-4 max-sm:flex max-sm:justify-center",
]);

export const calendarButton = cva([
  "inline-flex items-center gap-2 px-6 sm:max-3xl:px-4 py-3 sm:max-3xl:py-2.5 bg-mainLight hover:bg-main text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg sm:max-3xl:text-base",
]);

export const calendarButtonArrow = cva(["text-xl sm:max-3xl:text-lg"]);
