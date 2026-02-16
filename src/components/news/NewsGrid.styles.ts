import { cva } from "class-variance-authority";

export const grid = cva("grid grid-cols-1 md:grid-cols-4 gap-0 sm:gap-6 sm:max-3xl:gap-4");

export const paginationWrapper = cva("mt-14 sm:max-3xl:mt-10 flex justify-center");

export const paginationButton = cva("hover:cursor-pointer", {
  variants: {
    disabled: {
      true: "pointer-events-none opacity-50",
    },
  },
});
