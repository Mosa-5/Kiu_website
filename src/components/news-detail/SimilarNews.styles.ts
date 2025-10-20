import { cva } from "class-variance-authority";

export const container = cva("mt-14 sm:mt-16 flex flex-col items-center");

export const innerWrapper = cva("max-w-[1680px]");

export const heading = cva(
  "max-sm:text-center text-2xl sm:text-4xl font-semibold text-main mb-6 sm:mb-12"
);

export const carousel = cva("w-full mx-auto max-w-[1680px]");

export const carouselContent = cva("py-3");

export const carouselItem = cva("basis-1/4 pl-4");

export const card = cva(
  "transition-transform group relative duration-400 h-[461px] rounded-[16px] w-full p-0 overflow-hidden border shadow-sm cursor-pointer hover:-translate-y-2"
);

export const cardContent = cva("flex flex-col p-0 h-full");

export const hoverBar = cva(
  "absolute bottom-0 left-0 w-full h-[5px] bg-main opacity-0 group-hover:opacity-100 transition-all duration-400"
);

export const imageWrapper = cva("relative w-full h-fit border-b border-main");

export const image = cva("object-cover w-full aspect-[406/282]");

export const contentSection = cva("px-6 py-8 h-full");

export const date = cva("text-base text-black font-medium");

export const title = cva("mt-4 text-lg font-medium text-mainDark");

export const carouselButton = cva("border-2");
