import { cva } from "class-variance-authority";

export const cardContainer = cva(
  "overflow-hidden relative group hover:shadow-lg transition-all cursor-pointer max-w-[544px] max-h-[726px] border-2 hover:-translate-y-1 duration-200"
);

export const imageWrapper = cva(
  "relative aspect-[544/425] overflow-hidden border-b-1 border-b-[#3C70AF]"
);

export const image = cva("w-full h-full object-cover");

export const cardContentWrapper = cva("p-6 bg-white h-[300px] overflow-hidden");

export const cardDate = cva("text-base font-medium text-black mb-3");

export const cardTitle = cva("text-2xl font-medium mb-4 text-[#1b3d6e]");

export const cardDivider = cva("w-[94px] h-[2px] bg-[#3C70AF] mb-4");

export const cardDescription = cva("text-base text-gray-700 leading-relaxed");

export const cardHoverEffect = cva([
  "absolute bottom-0 left-0 w-full h-[5px] bg-[#3C70AF] opacity-0",
  "group-hover:opacity-100 transition-all duration-200",
]);
// export const arrowRight = cva("ml-auto mr-3 mb-2");
