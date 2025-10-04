import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] mx-auto bg-white");

export const contentWrapper = cva("relative");

export const imageWrapper = cva(
  "float-right ml-4 mb-4 w-full md:w-1/2 lg:w-[686px] h-fit"
);

export const image = cva(
  "w-full h-auto rounded-lg shadow-lg border-2 border-[#3C70AF]"
);

export const paragraph = cva(
  "mb-4 text-xl font-medium text-gray-800 leading-relaxed"
);

export const clearFloat = cva("clear-both");

export const notFound = cva("text-center text-xl mt-10");
