import { cva } from "class-variance-authority";

export const container = cva(
  "relative w-full h-[240px] sm:h-[707px] flex flex-col mb-[120px] sm:mb-[162px] items-center" //mb-[96px]
);

export const heroImage = cva("w-full h-full object-cover brightness-75");

export const contentBox = cva(
  "absolute bg-slate-200 border border-[#D0D0D0] top-[199px] sm:top-[635px] w-[344px] sm:w-[1680px] rounded-xl flex justify-center"
);

export const contentInner = cva(
  "max-sm:px-4 w-full max-w-[1527px] py-4 sm:py-5.5 flex flex-col justify-between"
);

export const title = cva("text-base sm:text-4xl font-semibold text-main");

export const date = cva("text-main font-medium text-sm sm:text-xl mt-2");

export const notFound = cva("text-center text-xl mt-10");
