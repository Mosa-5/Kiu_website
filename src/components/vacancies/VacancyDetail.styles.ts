import { cva } from "class-variance-authority";

export const container = cva("min-h-screen max-sm:px-4");

export const sectionWrapper = cva("scroll-mt-8 mb-12 sm:max-3xl:mb-8 pb-12 sm:max-3xl:pb-8 border-b border-gray-200 last:border-b-0 last:pb-0");

export const sectionCard = cva("rounded-lg shadow-xl p-8 sm:max-3xl:p-6 border-2");

export const sectionHeading = cva(
  "text-xl sm:text-3xl sm:max-3xl:text-2xl font-semibold text-main mb-6 sm:max-3xl:mb-4"
);

export const emptyState = cva(
  "text-center py-12 sm:max-3xl:py-8 text-muted-foreground text-base sm:text-lg sm:max-3xl:text-base"
);

export const vacancyItem = cva(
  "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:max-3xl:p-4 rounded-lg border border-gray-200 hover:border-main/40 transition-colors"
);

export const vacancyInfo = cva("flex flex-col gap-1");

export const vacancyTitle = cva("text-base sm:text-lg sm:max-3xl:text-base font-semibold text-foreground");

export const vacancyMeta = cva("flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:max-3xl:text-xs text-muted-foreground");

export const vacancyBadge = cva(
  "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
  {
    variants: {
      status: {
        open: "bg-green-50 text-green-700 border border-green-200",
        closed: "bg-gray-100 text-gray-600 border border-gray-200",
      },
    },
  }
);

export const vacancyList = cva("flex flex-col gap-4 sm:max-3xl:gap-3");

export const innerContainer = cva("rounded-lg shadow-xl p-8 sm:max-3xl:p-6 border-2");

export const headerSection = cva("mb-8 sm:max-3xl:mb-6");

export const headerBadge = cva(
  "bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const heading = cva("text-xl sm:text-3xl sm:max-3xl:text-2xl font-medium text-mainDark");

export const iconWrapper = cva("text-mainDark");

export const introParagraph = cva("text-base sm:text-lg sm:max-3xl:text-base mb-2");

export const emailLink = cva(
  "text-link hover:text-linkDark cursor-pointer underline-offset-2 underline"
);

export const descriptionParagraph = cva("text-base sm:text-lg sm:max-3xl:text-base mb-3");

export const detailsLink = cva(
  "flex items-center gap-2 text-base sm:text-lg sm:max-3xl:text-base text-link hover:text-linkDark cursor-pointer underline-offset-2 underline"
);

export const formSection = cva("");

export const sectionTitle = cva(
  "text-lg sm:text-xl font-semibold text-main mb-6 pb-2 border-b border-gray-200"
);

export const grid = cva("grid grid-cols-1 md:grid-cols-2 gap-6 mb-6");

export const fieldWrapper = cva("mb-6");

export const label = cva("block text-md font-medium mb-2");

export const input = cva(
  "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
);

export const errorText = cva("text-md text-red-500 mt-1");

export const scopeHeading = cva(
  "text-lg sm:text-xl max-sm:text-center font-semibold text-main"
);

export const scopeSection = cva("mb-8 sm:max-3xl:mb-6 mt-12 sm:max-3xl:mt-8");

export const subsectionTitle = cva(
  "text-lg max-sm:text-center font-semibold text-main mb-3"
);

export const buttonGroup = cva("flex flex-wrap gap-3");

export const optionButton = cva(
  "px-4 py-2 rounded-full border max-sm:w-full text-base font-medium transition-colors",
  {
    variants: {
      selected: {
        true: "bg-blue-100 border-main text-mainDark font-medium",
        false: "border-gray-300 hover:border-gray-400",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
  }
);

export const fieldsHeading = cva(
  "text-xl font-semibold max-sm:text-center text-main mb-4"
);

export const mathTitle = cva("font-medium max-sm:text-center mb-3");

export const subjectButtonGroup = cva("flex flex-wrap gap-3 mb-6");

export const submitContainer = cva("flex flex-col items-center gap-3");

export const statusMessage = cva("w-full p-3 border rounded text-sm", {
  variants: {
    status: {
      success: "bg-green-50 border-green-200 text-green-700",
      error: "bg-red-50 border-red-200 text-red-700",
    },
  },
});

export const submitButton = cva("w-full max-w-60 py-6 font-medium", {
  variants: {
    submitting: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
});
