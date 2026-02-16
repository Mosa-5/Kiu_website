import { cva } from "class-variance-authority";

export const container = cva(
  "relative w-full h-[240px] sm:h-[707px] sm:max-3xl:h-[500px] flex flex-col mb-[120px] sm:mb-[162px] sm:max-3xl:mb-[120px] items-center bg-black"
);

export const heroImage = cva("w-full h-full object-cover brightness-75");

export const contentBox = cva(
  "absolute bg-slate-200 border border-[#D0D0D0] top-[199px] sm:top-[635px] sm:max-3xl:top-[430px] w-[344px] sm:w-[1680px] sm:max-3xl:w-[1400px] rounded-xl flex justify-center"
);

export const contentInner = cva(
  "max-sm:px-4 w-full max-w-[1527px] sm:max-3xl:max-w-[1280px] py-4 sm:py-5.5 sm:max-3xl:py-4 flex flex-col justify-between"
);

export const title = cva("text-base sm:text-4xl sm:max-3xl:text-3xl font-semibold text-main");

export const date = cva("text-main font-medium text-sm sm:text-xl sm:max-3xl:text-lg mt-2");

export const notFound = cva("text-center text-xl mt-10");
