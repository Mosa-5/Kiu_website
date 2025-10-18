import { cva } from "class-variance-authority";

// export const container = cva("py-8");

export const grid = cva("grid grid-cols-1 md:grid-cols-4 gap-0 sm:gap-6");

export const paginationWrapper = cva("mt-14 flex justify-center");

export const paginationButton = cva("hover:cursor-pointer", {
  variants: {
    disabled: {
      true: "pointer-events-none opacity-50",
    },
  },
});
