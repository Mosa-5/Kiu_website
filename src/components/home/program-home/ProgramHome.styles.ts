import { cva } from "class-variance-authority";

export const containerVariants = cva("flex items-center justify-center");

export const wrapperVariants = cva("max-w-[1680px] w-full relative");

export const headerSectionVariants = cva(
  "w-full flex justify-center mb-6 sm:mb-10"
);

export const titleVariants = cva(
  "text-2xl sm:text-[40px] text-main font-semibold w-fit rounded-xl py-1 px-5"
);

export const gridVariants = cva("grid sm:grid-cols-2 gap-2 sm:gap-6");

export const programImageVariants = cva(
  "rounded-[8px] hover:cursor-pointer hover:-translate-y-1 transition-all duration-200"
);
