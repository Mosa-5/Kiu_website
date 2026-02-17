import { cva } from "class-variance-authority";

export const innerWrapper = cva(
  "mx-auto flex flex-col items-center justify-center max-w-[1680px] md:max-3xl:max-w-[1400px] md:max-3xl:px-10"
);

export const headerSection = cva(
  "flex justify-center md:justify-between items-center w-full mb-6 md:mb-12 md:max-3xl:mb-8"
);

export const title = cva("text-main text-2xl md:text-4xl md:max-3xl:text-[30px] md:max-lg:text-[24px] font-semibold");

export const seeAllButtonDesktop = cva(
  "max-md:hidden w-[160px] max-3xl:w-[136px] h-[48px] max-3xl:h-[40px] text-lg max-3xl:text-base font-semibold text-mainLight bg-white border-mainLight border-2 shadow-[2px_3px_4px_0px_#00000040] hover:cursor-pointer"
);

export const seeAllButtonMobile = cva(
  "md:hidden mb-2 mt-4 w-[160px] h-[48px] text-lg font-semibold text-mainLight bg-white border-mainLight border-2 shadow-[2px_3px_4px_0px_#00000040] hover:cursor-pointer"
);

export const carousel = cva("w-full mx-auto max-w-[300px] md:max-w-[1680px]");

export const carouselContent = cva("py-3");

export const carouselItem = cva("md:basis-1/4 md:max-3xl:basis-1/3 pl-4");

export const card = cva(
  "transition-transform group relative duration-400 h-[361px] md:h-[461px] md:max-3xl:h-[380px] rounded-[16px] w-full p-0 overflow-hidden border shadow-sm cursor-pointer hover:-translate-y-2"
);

export const cardContent = cva("flex flex-col p-0 h-full");

export const hoverBar = cva(
  "absolute bottom-0 left-0 w-full h-[5px] bg-main opacity-0 group-hover:opacity-100 transition-all duration-400"
);

export const imageWrapper = cva("relative w-full h-fit border-b border-main");

export const image = cva("object-cover w-full aspect-[406/282]");

export const contentSection = cva("px-[14px] md:px-6 md:max-3xl:px-4 py-4 md:py-8 md:max-3xl:py-5 h-full");

export const date = cva("text-sm md:text-base md:max-3xl:text-sm text-black font-medium");

export const newsTitle = cva(
  "mt-4 text-base md:text-lg md:max-3xl:text-sm font-medium text-newsTitle"
);

export const carouselButton = cva("border-2");
