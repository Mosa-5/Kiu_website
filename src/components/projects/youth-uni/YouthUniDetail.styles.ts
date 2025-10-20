import { cva } from "class-variance-authority";

export const container = cva(
  "max-w-[1680px] max-sm:px-4 mx-auto bg-white sm:my-28"
);

export const contentWrapper = cva(
  "max-sm:flex-col-reverse max-sm:flex relative"
);

export const imageWrapper = cva(
  "float-right sm:ml-4 mb-4 w-full md:w-1/2 lg:w-[829px] h-fit"
);

export const image = cva("w-full sm:h-[458px] rounded-lg shadow-lg");

export const title = cva("font-semibold text-2xl pb-6 text-mainDark");

export const paragraph = cva(
  "mb-[14px] line-height-[28px] text-lg text-gray-800 leading-[28px]"
);

export const clearFloat = cva("clear-both");

export const notFound = cva("text-center text-xl mt-10");
