import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] sm:max-3xl:max-w-[1400px] mx-auto bg-white");

export const contentWrapper = cva(
  "max-sm:flex max-sm:flex-col-reverse relative"
);

export const imageWrapper = cva(
  "w-full md:float-right md:ml-4 md:mb-4 md:w-[45%] lg:w-[686px] sm:max-3xl:lg:w-[540px] h-fit"
);

export const image = cva("w-full h-auto rounded-lg shadow-lg");

export const paragraph = cva(
  "mb-4 sm:max-3xl:mb-3 text-sm sm:text-base lg:text-xl sm:max-3xl:lg:text-lg font-medium text-gray-800 leading-[26px] sm:leading-[27px] lg:leading-[31px] sm:max-3xl:lg:leading-[27px]"
);

export const clearFloat = cva("clear-both");

export const notFound = cva("text-center text-xl mt-10");

export const backButton = cva([
  "max-sm:hidden relative bg-transparent text-main hover:bg-transparent text-2xl sm:max-3xl:text-xl font-medium hover:cursor-pointer",
  "after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-main",
  "after:transition-all after:duration-200 hover:after:w-4/6 shadow-none mb-12 sm:max-3xl:mb-8",
]);
