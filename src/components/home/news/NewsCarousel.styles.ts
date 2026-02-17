import { cva } from "class-variance-authority";

export const carousel = cva("w-full mx-auto max-w-[300px] sm:max-w-[1680px]");

export const carouselContent = cva("py-3");

export const carouselItem = cva("sm:basis-1/3 lg:basis-1/4 pl-4");

export const card = cva(
  "transition-transform group relative duration-400 h-[361px] sm:h-[470px] sm:max-3xl:h-[390px] sm:max-lg:h-[280px] rounded-[16px] w-full p-0 overflow-hidden border shadow-sm cursor-pointer hover:-translate-y-2"
);

export const cardContent = cva("flex flex-col p-0 h-full");

export const hoverBar = cva(
  "absolute bottom-0 left-0 w-full h-[5px] bg-main opacity-0 group-hover:opacity-100 transition-all duration-400"
);

export const imageWrapper = cva("relative w-full h-fit border-b border-main");

export const image = cva("object-cover w-full aspect-[406/282]");

export const contentSection = cva("px-[14px] sm:px-6 sm:max-lg:px-3 py-4 sm:py-8 sm:max-lg:py-3 h-full");

export const date = cva("sm:text-base sm:max-3xl:text-sm sm:max-lg:text-xs text-black font-medium");

export const newsTitle = cva(
  "mt-4 sm:max-lg:mt-2 sm:text-lg sm:max-3xl:text-sm sm:max-lg:text-xs font-medium text-newsTitle leading-[140%]"
);

export const carouselButton = cva("border-2");
