import { cva } from "class-variance-authority";

export const container = cva("w-full py-[40px] bg-[#D9D9D940]");

export const innerWrapper = cva(
  "mx-auto flex flex-col items-center justify-center max-w-[1680px] sm:max-3xl:max-w-[1400px] sm:max-3xl:px-10"
);

export const headerSection = cva("text-center w-full mb-6 sm:mb-[48px] sm:max-3xl:mb-8");

export const title = cva("text-main text-2xl sm:text-4xl sm:max-3xl:text-[30px] font-semibold");

export const carousel = cva("w-full mx-auto max-w-[1680px]");

export const carouselContent = cva("pb-8 sm:py-8 -ml-4");

export const carouselItem = cva(
  "pl-4  sm:flex-[0_0_33.333%] flex items-center justify-center"
);

export const card = cva([
  "relative w-full max-w-[672px] h-[185px] sm:h-[309px] sm:max-3xl:h-[250px] rounded-lg sm:rounded-[16px] overflow-hidden",
  "border-2s border-main shadow-sm cursor-pointer",
  "transition-all duration-500 ease-out shadow-sm",
  "hover:-translate-y-2",
]);

export const cardContent = cva("w-full h-full p-0");

export const image = cva("w-full h-full object-cover");

export const carouselButton = cva("border-2");

export const prevButton = cva(
  "border-2 max-sm:w-12 max-sm:h-12 max-sm:left-1/3 max-sm:top-[100%] max-sm:-translate-x-1/2"
);

export const nextButton = cva(
  "border-2 max-sm:w-12 max-sm:h-12 max-sm:right-1/3 max-sm:top-[100%] max-sm:translate-x-1/2"
);

export const counter = cva(
  "sm:hidden text-lg absolute left-1/2 -bottom-3 -translate-x-1/2 text-main font-semibold text-center"
);

// Video container styles
export const videoContainer = cva(
  "relative w-full h-full group cursor-pointer"
);

export const thumbnailWrapper = cva("relative w-full h-full");

export const playOverlay = cva(
  "absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all"
);

export const playButton = cva(
  "w-20 h-20 opacity-90 group-hover:opacity-100 group-hover:scale-105 duration-200 transition-all"
);

export const playButtonPolygon = cva("fill-none stroke-white");

export const playButtonCircle = cva("fill-none stroke-white");

export const videoTitle = cva(
  "mt-4 text-white absolute bottom-0 opacity-0 group-hover:bottom-3 group-hover:opacity-100 duration-200 text-center px-4 py-1 backdrop-blur-sm rounded-md text-sm font-medium"
);

export const thumbnailImage = cva("absolute inset-0");

export const loadingContainer = cva(
  "absolute inset-0 flex items-center justify-center bg-black/40 z-10"
);

export const loadingSpinner = cva(
  "w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"
);

export const videoIframe = cva("w-full h-full relative z-20");
