import { cva } from "class-variance-authority";

export const container = cva("w-full py-[40px] bg-[#D9D9D940]");

export const innerWrapper = cva(
  "mx-auto flex flex-col items-center justify-center max-w-[1680px]"
);

export const headerSection = cva("text-center w-full mb-[48px]");

export const title = cva("text-main text-4xl font-semibold");

export const carousel = cva("w-full mx-auto max-w-[1680px]");

export const carouselContent = cva("py-8 -ml-4");

export const carouselItem = cva(
  "pl-4 flex-[0_0_33.333%] flex items-center justify-center"
);

export const card = cva([
  "relative w-full max-w-[672px] h-[309px] rounded-[16px] overflow-hidden",
  "border-2s border-main shadow-sm cursor-pointer",
  "transition-all duration-500 ease-out shadow-sm",
  "hover:-translate-y-2",
]);

export const cardContent = cva("w-full h-full p-0");

export const image = cva("w-full h-full object-cover");

export const carouselButton = cva("border-2");

export const prevButton = cva("border-2 -left-4");

export const nextButton = cva("border-2 -right-4");
