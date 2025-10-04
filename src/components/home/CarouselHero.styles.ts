import { cva } from "class-variance-authority";

export const container = cva("w-full h-[707px] relative");

export const carousel = cva("w-full h-full");

export const carouselContent = cva("w-full h-full -ml-0");

export const carouselItem = cva("w-full h-full pl-0");

export const carouselImage = cva("h-[707px] w-full");

export const dotContainer = cva(
  "flex justify-center items-center gap-2 z-2 absolute left-1/2 -translate-x-1/2 bottom-1/30"
);

export const carouselDot = cva(
  "h-3 w-3 rounded-full border-2 cursor-pointer duration-200",
  {
    variants: {
      active: {
        true: "bg-main border-main",
        false: "hover:bg-white",
      },
    },
  }
);
