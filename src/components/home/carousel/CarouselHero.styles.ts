import { cva } from "class-variance-authority";

export const container = cva(
  "max-sm:mt-[67px] w-full relative mb-16 sm:mb-36 border-b-3 border-b-main"
);

export const carousel = cva("w-full h-full");

export const carouselContent = cva("w-full h-full -ml-0");

export const carouselItem = cva("w-full h-full pl-0");

export const carouselImage = cva(
  "h-[308px] sm:h-[707px] w-full brightness-75 object-cover"
);

export const dotContainer = cva(
  "flex justify-center items-center gap-2 z-2 absolute left-1/2 -translate-x-1/2 bottom-1/30"
);

export const carouselDot = cva(
  "h-2 w-2 border-1 sm:h-3 sm:w-3 rounded-full sm:border-2 cursor-pointer duration-200",
  {
    variants: {
      active: {
        true: "bg-main border-main",
        // false: "hover:bg-white",
      },
    },
  }
);
