import { cva } from "class-variance-authority";

export const container = cva(
  "w-full relative mb-16 sm:mb-36 sm:max-3xl:mb-24 border-b-3 border-b-main bg-black"
);

export const carousel = cva("w-full h-full");

export const carouselContent = cva("w-full h-full -ml-0");

export const carouselItem = cva("w-full h-full pl-0");

export const carouselImage = cva(
  "h-[308px] sm:h-[707px] sm:max-3xl:h-[550px] w-full brightness-70 object-cover"
);

export const dotContainer = cva(
  "flex justify-center items-center gap-2 max-3xl:gap-1.5 absolute left-1/2 -translate-x-1/2 bottom-1/30"
);

export const carouselDot = cva(
  "h-3 w-3 max-3xl:h-2.5 max-3xl:w-2.5 rounded-full border-2 duration-200 hover:cursor-pointer",
  {
    variants: {
      active: {
        true: "bg-main border-main",
        false: "hover:bg-white",
      },
    },
  }
);
