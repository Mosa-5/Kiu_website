import { cva } from "class-variance-authority";

export const container = cva(
  "max-w-[1680px] sm:max-3xl:max-w-[1400px] max-sm:px-4 mx-auto bg-white sm:my-28 sm:max-3xl:my-20"
);

export const contentWrapper = cva(
  "max-sm:flex-col-reverse max-sm:flex relative"
);

export const imageWrapper = cva(
  "float-right sm:ml-4 mb-4 w-full md:w-1/2 lg:w-[829px] sm:max-3xl:lg:w-[650px] h-fit"
);

export const image = cva("w-full sm:h-[458px] sm:max-3xl:h-[360px] rounded-lg shadow-lg");

export const title = cva("font-semibold text-2xl sm:max-3xl:text-xl pb-6 sm:max-3xl:pb-4 text-main");

export const paragraph = cva(
  "mb-[14px] sm:max-3xl:mb-3 line-height-[28px] text-lg sm:max-3xl:text-base text-black leading-[28px] sm:max-3xl:leading-[24px]"
);

export const clearFloat = cva("clear-both");

export const notFound = cva("text-center text-xl mt-10");
