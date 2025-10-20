import { cva } from "class-variance-authority";

export const container = cva("mx-auto relative max-w-[970px]");

export const carousel = cva("w-full h-full");

export const carouselContent = cva("w-full h-full ml-0");

export const carouselItem = cva(
  "w-full h-full flex justify-center px-1 sm:pl-0 hover:cursor-pointer"
);

export const carouselImage = cva(
  "w-full h-[286px] sm:h-[458px] object-cover rounded-[8px] border-2 border-main max-w-[950px]"
);

export const dotContainer = cva(
  "mt-4 flex items-center justify-center gap-2 absolute bottom-1/30 left-1/2 -translate-x-1/2"
);

export const dot = cva("h-3 w-3 rounded-full border-2 hover:cursor-pointer", {
  variants: {
    active: {
      true: "border-main bg-main",
      false: "hover:bg-border",
    },
  },
});
