import { cva } from "class-variance-authority";

export const containerVariants = cva("flex items-center justify-center");

export const wrapperVariants = cva("max-w-[1680px] sm:max-3xl:max-w-[1400px] w-full relative");

export const headerSectionVariants = cva(
  "w-full flex justify-center mb-6 sm:mb-10 sm:max-3xl:mb-7"
);

export const titleVariants = cva(
  "text-2xl sm:text-[40px] sm:max-3xl:text-[34px] text-main font-semibold w-fit rounded-xl"
);

export const gridVariants = cva("grid sm:grid-cols-2 gap-2 sm:gap-6 sm:max-3xl:gap-4");

export const programImageVariants = cva(
  "rounded-[8px] hover:cursor-pointer hover:-translate-y-1 transition-all duration-200"
);
