import { cva } from "class-variance-authority";

export const container = cva("mx-auto relative max-w-[970px] md:max-3xl:max-w-[750px] md:max-lg:max-w-[500px]");

export const carousel = cva("w-full h-full");

export const carouselContent = cva("w-full h-full ml-0");

export const carouselItem = cva(
  "w-full h-full flex justify-center px-1 md:pl-0"
);

export const carouselImage = cva(
  "w-full h-[286px] md:h-[458px] md:max-3xl:h-[360px] md:max-lg:h-[260px] object-cover rounded-[8px] border-2 border-main max-w-[950px] md:max-3xl:max-w-[730px] md:max-lg:max-w-[480px]"
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
