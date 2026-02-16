import { cva } from "class-variance-authority";

export const cardContainer = cva([
  "overflow-hidden relative group gap-0 hover:shadow-lg transition-all cursor-pointer max-w-[402px] sm:max-3xl:max-w-[340px]",
  "max-h-[726px] sm:max-3xl:max-h-[620px] border-2 hover:-translate-y-1 duration-200",
]);

export const imageWrapper = cva(
  "relative aspect-[402/314] overflow-hidden border-b-1 border-b-main"
);

export const image = cva("w-full h-full object-cover");

export const cardContentWrapper = cva("p-6 sm:max-3xl:p-4 bg-white h-[221px] sm:max-3xl:h-[190px] overflow-hidden");

export const cardDate = cva("text-base sm:max-3xl:text-sm font-medium text-black mb-3 sm:max-3xl:mb-2");

export const cardTitle = cva(
  "text-lg sm:max-3xl:text-base font-medium mb-4 sm:max-3xl:mb-3 text-mainDark line-clamp-2"
);

export const cardDivider = cva("w-[94px] sm:max-3xl:w-[76px] h-[2px] bg-main mb-4 sm:max-3xl:mb-3");

export const cardDescription = cva(
  "text-base sm:max-3xl:text-sm line-clamp-2 text-gray-700 leading-relaxed"
);

export const cardHoverEffect = cva([
  "absolute bottom-0 left-0 w-full h-[5px] bg-main opacity-0",
  "group-hover:opacity-100 transition-all duration-200",
]);
