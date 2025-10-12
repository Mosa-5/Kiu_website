import { cva } from "class-variance-authority";

export const container = cva("w-full py-[40px] bg-[#D9D9D940]");

export const innerWrapper = cva(
  "mx-auto flex flex-col items-center justify-center max-w-[1680px]"
);

export const headerSection = cva(
  "flex justify-between items-center w-full mb-[48px]"
);

export const title = cva("text-main text-4xl font-semibold");

export const seeAllButton = cva(
  "w-[160px] h-[48px] text-lg font-semibold text-mainLight bg-white border-mainLight border-2 shadow-[2px_3px_4px_0px_#00000040] hover:cursor-pointer"
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

export const newsTitle = cva("mt-4 text-lg font-medium text-newsTitle");

export const carouselButton = cva("border-2");
