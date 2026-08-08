import { cva } from "class-variance-authority";

export const container = cva(["max-sm:px-4 font-sans"]);

export const section = cva(["mb-12 sm:max-3xl:mb-8 scroll-mt-8"], {
  variants: {
    isFirst: {
      true: ["scroll-mt-0"],
      false: [
        "border-t border-slate-200 pt-10 sm:max-3xl:pt-8",
      ],
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

export const sectionTitle = cva(["font-semibold text-mainDark"], {
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

export const paragraph = cva(["mb-6 sm:max-3xl:mb-4 max-w-[90ch]"], {
  variants: {
    size: {
      small: ["text-sm sm:text-lg sm:max-3xl:text-base"],
      large: ["text-lg sm:text-lg sm:max-3xl:text-base"],
    },
    quote: {
      true: ["italic text-slate-700"],
      false: [],
    },
  },
  defaultVariants: {
    size: "small",
    quote: false,
  },
});

export const pullQuote = cva([
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-semibold text-mainDark leading-snug mb-6 sm:max-3xl:mb-4 max-w-[90ch]",
]);

export const quoteBlock = cva([
  "border-l-2 border-slate-200 pl-6 sm:max-3xl:pl-4",
]);

export const signatureName = cva([
  "text-base sm:max-3xl:text-sm font-semibold text-slate-900 mb-1",
]);

export const signatureTitle = cva(["text-sm sm:max-3xl:text-xs text-slate-600 mb-0.5"]);

export const signatureDate = cva(["text-sm sm:max-3xl:text-xs text-slate-500 mb-3"]);

export const signatureLink = cva([
  "text-sm sm:max-3xl:text-xs text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium",
]);

export const signatureByline = cva([
  "flex items-start gap-3 sm:max-3xl:gap-2.5 mt-10 sm:max-3xl:mt-8",
]);

export const signatureAvatar = cva([
  "flex items-center justify-center w-10 h-10 sm:max-3xl:w-9 sm:max-3xl:h-9 rounded-full bg-mainDark text-white text-sm sm:max-3xl:text-xs font-semibold shrink-0",
]);

export const signatureAvatarImage = cva([
  "w-10 h-10 sm:max-3xl:w-9 sm:max-3xl:h-9 rounded-full object-cover shrink-0",
]);

export const signatureMeta = cva([
  "flex flex-wrap items-center gap-x-1.5 text-sm sm:max-3xl:text-xs text-slate-500",
]);

export const advisoryMemberContainer = cva([
  "grid sm:grid-cols-2 gap-4 sm:max-3xl:gap-3",
]);

export const advisoryMember = cva([
  "bg-white border border-slate-200 rounded-lg p-5 sm:max-3xl:p-4 shadow-sm hover:shadow-md hover:border-mainLight/40 transition-all",
]);

export const advisoryMemberName = cva(["text-lg sm:max-3xl:text-base font-semibold text-main mb-1"]);

export const advisoryMemberText = cva(["text-sm sm:text-lg sm:max-3xl:text-base max-w-[90ch]"]);

export const richTextLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium",
]);

export const programList = cva([
  "list-disc marker:text-mainLight pl-5 space-y-2 mb-6 sm:max-3xl:mb-4 max-w-[90ch]",
]);

export const programListItem = cva(["leading-relaxed"]);

export const programLink = cva([
  "text-link hover:text-linkDark font-medium underline underline-offset-2 text-sm sm:text-lg sm:max-3xl:text-base",
]);

export const programIntroText = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base max-w-[90ch]"]);

export const programMasterText = cva(["mb-3 sm:max-3xl:mb-2 text-sm sm:text-lg sm:max-3xl:text-base max-w-[90ch]"]);

export const programFutureText = cva(["mb-3 sm:max-3xl:mb-2 text-sm sm:text-lg sm:max-3xl:text-base max-w-[90ch]"]);

export const futureDisciplinesText = cva([
  "mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base font-medium text-mainDark max-w-[90ch]",
]);

export const futureDisciplinesDot = cva(["text-slate-400 font-normal"]);

export const closingText = cva(["mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base max-w-[90ch]"]);

export const calendarContainer = cva([
  "max-sm:flex max-sm:justify-center",
]);

export const calendarButton = cva([
  "inline-flex items-center gap-2 px-6 sm:max-3xl:px-4 py-3 sm:max-3xl:py-2.5 bg-mainLight hover:bg-main text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg sm:max-3xl:text-base",
]);

export const calendarButtonArrow = cva(["text-xl sm:max-3xl:text-lg"]);
