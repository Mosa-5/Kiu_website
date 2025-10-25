import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] mx-auto bg-white");

export const contentWrapper = cva(
  "max-sm:flex max-sm:flex-col-reverse relative"
);

export const imageWrapper = cva(
  "w-full md:float-right md:ml-4 md:mb-4 md:w-1/2 lg:w-[686px] h-fit"
);

export const image = cva("w-full h-auto rounded-lg shadow-lg");

export const paragraph = cva(
  "mb-4 text-sm sm:text-xl font-medium text-gray-800 leading-[26px] sm:leading-[31px]"
);

export const clearFloat = cva("clear-both");

export const notFound = cva("text-center text-xl mt-10");

export const backButton = cva([
  "max-sm:hidden relative bg-transparent text-main hover:bg-transparent text-2xl font-medium hover:cursor-pointer",
  "after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-main",
  "after:transition-all after:duration-200 hover:after:w-4/6 shadow-none mb-12",
]);
