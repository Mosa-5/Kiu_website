import { cva } from "class-variance-authority";

export const containerVariants = cva("flex items-center justify-center");

export const wrapperVariants = cva("max-w-[1680px] md:max-3xl:max-w-[1400px] w-full relative");

export const headerSectionVariants = cva(
  "w-full flex justify-center mb-6 md:mb-10 md:max-3xl:mb-7"
);

export const titleVariants = cva(
  "text-2xl md:text-[40px] md:max-3xl:text-[34px] md:max-lg:text-[24px] text-main font-semibold w-fit rounded-xl"
);

export const gridVariants = cva("grid md:grid-cols-2 gap-2 md:gap-6 md:max-3xl:gap-4");

export const programImageVariants = cva(
  "rounded-[8px] hover:cursor-pointer hover:-translate-y-1 transition-all duration-200"
);
