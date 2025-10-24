import { cva } from "class-variance-authority";

export const container = cva(["max-w-[1680px] max-sm:px-4 mx-auto font-sans"]);

export const section = cva(["mb-12 scroll-mt-8"], {
  variants: {
    isFirst: {
      true: ["scroll-mt-0"],
      false: [],
    },
  },
});

export const sectionHeader = cva(
  ["bg-headingBg items-center gap-3 px-4 py-2 rounded mb-6"],
  {
    variants: {
      centered: {
        true: ["flex w-fit mx-auto"],
        false: ["inline-flex"],
      },
    },
    defaultVariants: {
      centered: false,
    },
  }
);

export const sectionTitle = cva(["font-medium text-mainDark"], {
  variants: {
    size: {
      large: ["text-2xl sm:text-3xl"],
      medium: ["text-xl"],
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export const icon = cva(["text-mainDark"]);

export const paragraph = cva(["mb-6"], {
  variants: {
    size: {
      small: ["text-sm sm:text-lg"],
      large: ["text-lg sm:text-lg"],
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const signatureContainer = cva([
  "mt-10 pl-6 border-l-2 border-slate-200",
]);

export const signatureName = cva([
  "text-base font-semibold text-slate-900 mb-1",
]);

export const signatureTitle = cva(["text-sm text-slate-600 mb-0.5"]);

export const signatureDate = cva(["text-sm text-slate-500 mb-3"]);

export const signatureLink = cva([
  "text-sm text-link underline underline-offset-2 hover:text-linkDark transition-colors font-medium",
]);

export const presidentImage = cva([
  "float-right ml-8 sm:mb-6 w-full max-w-[400px] h-[430px]",
]);

export const presidentImageTag = cva(["w-full rounded-lg shadow-lg"]);

export const clearFloat = cva(["clear-both"]);

export const advisoryMemberContainer = cva(["space-y-6"]);

export const advisoryMember = cva([""]);

export const advisoryMemberName = cva(["text-lg font-semibold text-main mb-1"]);

export const advisoryMemberText = cva(["text-sm sm:text-lg"]);

export const richTextLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium",
]);

export const programList = cva(["list-none mb-6 text-sm sm:text-lg space-y-4"]);

export const programListItem = cva(["w-fit"]);

export const programLink = cva([
  "underline underline-offset-2 font-medium text-link hover:text-linkDark",
]);

export const legalDirectorySpecialLink = cva("w-fit");
export const legalDirectorySpecial = cva(
  "px-4 py-2.5 font-medium border-link flex items-center gap-2 text-link hover:text-linkDark hover:border-linkDark border-2 rounded-md shadow-sm"
);

export const programIntroText = cva(["mb-6 text-sm sm:text-lg"]);

export const programMasterText = cva(["mb-3 text-sm sm:text-lg"]);

export const programFutureText = cva(["mb-3 text-sm sm:text-lg"]);

export const futureDisciplinesGrid = cva([
  "grid grid-cols-2 md:grid-cols-3 gap-3 mb-6",
]);

export const disciplineBadge = cva([
  "px-4 py-3 bg-main rounded-md flex justify-center items-center text-center font-medium border-2 text-sm sm:text-lg border-main pointer-events-none text-white shadow-md",
]);

export const closingText = cva(["mb-6 text-sm sm:text-lg"]);

export const calendarContainer = cva([
  "mb-6 max-sm:flex max-sm:justify-center",
]);

export const calendarButton = cva([
  "inline-flex items-center gap-2 px-6 py-3 bg-mainLight hover:bg-main text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg",
]);

export const calendarButtonArrow = cva(["text-xl"]);

export const sectioncalendar = cva(
  ["mb-12 scroll-mt-8 flex items-center justify-center flex-col"],
  {
    variants: {
      isFirst: {
        true: ["scroll-mt-0"],
        false: [],
      },
    },
  }
);
