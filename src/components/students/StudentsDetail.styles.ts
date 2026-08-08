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

export const sectionTitle = cva(["font-semibold text-mainDark"], {
  variants: {
    size: {
      large: ["text-2xl sm:text-3xl sm:max-3xl:text-2xl"],
      medium: ["text-xl sm:max-3xl:text-lg mb-4 sm:max-3xl:mb-3"],
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
    bold: {
      true: ["font-semibold"],
      false: [],
    },
    centered: {
      true: ["text-center mx-auto"],
      false: [],
    },
  },
  defaultVariants: {
    size: "small",
    bold: false,
    centered: false,
  },
});

export const richTextLink = cva([
  "text-link underline underline-offset-2 hover:text-linkDark font-medium",
]);

export const programList = cva([
  "list-disc marker:text-mainLight pl-5 mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base space-y-2 max-w-[90ch]",
]);

// Same treatment for genuinely sequential content (<ol> — application
// steps, ranked criteria) where numbering carries meaning a bullet would lose.
export const orderedList = cva([
  "list-decimal marker:text-mainLight pl-5 mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base space-y-2 max-w-[90ch]",
]);

// Compact items (link + phone on two lines) that should hug their content.
export const programListItem = cva(["w-fit"]);

// Plain wrapping text items (criteria, requirements, ordered steps).
export const listItemText = cva([""]);

export const programLink = cva([
  "underline underline-offset-2 font-medium text-link hover:text-linkDark",
]);

export const legalDirectoryList = cva(["space-y-3 sm:max-3xl:space-y-2"]);

export const legalDirectorySpecialLink = cva("w-fit block");
export const legalDirectorySpecial = cva(
  "px-4 sm:max-3xl:px-3 py-2.5 sm:max-3xl:py-2 font-medium border-link flex items-center gap-2 text-link hover:text-linkDark hover:border-linkDark border-2 rounded-md shadow-sm sm:max-3xl:text-sm"
);

// Erasmus "call" subsections — each university call reuses this small
// vocabulary instead of one-off inline style={{}} blocks.
export const callBlock = cva(["mt-10 sm:max-3xl:mt-8"]);

export const callTitle = cva([
  "text-xl sm:max-3xl:text-lg font-semibold text-main text-center mb-4 sm:max-3xl:mb-3",
]);

export const callImageWrapper = cva(["text-center mt-8 sm:max-3xl:mt-6"]);

export const callImage = cva(["max-w-full h-auto rounded-lg"], {
  variants: {
    bordered: {
      true: ["border-2 border-main"],
      false: [],
    },
  },
  defaultVariants: {
    bordered: false,
  },
});

export const projectBlock = cva(["mt-6 sm:max-3xl:mt-4"]);
