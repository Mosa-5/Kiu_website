import { cva } from "class-variance-authority";

export const container = cva("mt-14 sm:mt-16 sm:max-3xl:mt-12 flex flex-col items-center");

export const innerWrapper = cva("max-w-[1680px] sm:max-3xl:max-w-[1400px]");

export const heading = cva(
  "max-sm:text-center text-2xl sm:text-4xl sm:max-3xl:text-3xl font-semibold text-main mb-6 sm:mb-12 sm:max-3xl:mb-8"
);
