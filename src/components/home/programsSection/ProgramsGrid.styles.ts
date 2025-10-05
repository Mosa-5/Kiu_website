import { cva } from "class-variance-authority";

export const container = cva("py-8");

export const grid = cva("grid grid-cols-1 md:grid-cols-3 gap-8");

export const paginationWrapper = cva("mt-8 flex justify-center");

export const paginationButton = cva("hover:cursor-pointer", {
  variants: {
    disabled: {
      true: "pointer-events-none opacity-50",
    },
  },
});
