import { cva } from "class-variance-authority";

export const heroContainer = cva(
  "relative w-full h-[707px] overflow-hidden mb-36 border-b-2 border-main"
);

export const heroImage = cva("w-full h-full object-cover brightness-75");

export const contentWrapper = cva("absolute bottom-8 left-[120px] text-white");

export const contentWrapperNew = cva(
  "absolute bottom-8 left-[120px] text-white"
);

export const title = cva("text-4xl font-semibold pl-2.5");

export const homeButton = cva([
  "bg-transparent relative text-white hover:bg-transparent text-[18px] font-semibold hover:cursor-pointer",
  "after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-white shadow-none",
  "after:transition-all after:duration-200 hover:after:w-full",
]);
