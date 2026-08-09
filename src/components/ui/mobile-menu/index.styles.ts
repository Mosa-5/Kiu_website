import { cva } from "class-variance-authority";

export const sheetTitle = cva("text-center text-2xl border-b-2 pb-2");

export const menuContainer = cva("flex flex-col gap-1");

export const topBar = cva(
  "flex justify-center w-full border-b-2 gap-3 pb-4 mb-2"
);

export const navLink = cva(
  [
    "text-base font-semibold uppercase tracking-wider px-4 py-4 rounded-md",
    "transition-colors",
  ],
  {
    variants: {
      active: {
        true: "text-mainDark bg-blue-50",
        false: "text-main hover:text-mainDark hover:bg-blue-50",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
