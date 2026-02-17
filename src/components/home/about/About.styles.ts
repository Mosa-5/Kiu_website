import { cva } from "class-variance-authority";

export const container = cva(
  "max-md:flex-col-reverse md:max-w-[1494px] md:max-3xl:max-w-[1200px] md:max-lg:max-w-[95%] flex justify-between items-center gap-6 md:gap-[90px] md:max-3xl:gap-12 md:max-lg:gap-6 mx-auto md:mb-[181px] md:max-3xl:mb-32 md:max-lg:mb-20"
);

export const imageSection = cva(
  "w-full max-w-[613px] md:max-3xl:max-w-[450px] md:max-lg:max-w-[300px] flex flex-shrink-0 justify-center md:justify-end"
);

export const imageWrapper = cva(
  "max-md:hidden relative *:border-2 *:border-main *:shadow-[4px_4px_4px_0px_#00000040] *:rounded-full"
);

export const mainImage = cva("max-w-[515px] md:max-3xl:max-w-[380px] md:max-lg:max-w-[260px]");

export const topImage = cva("absolute max-w-[227px] md:max-3xl:max-w-[170px] md:max-lg:max-w-[120px] top-[-10px] left-[-80px] md:max-3xl:left-[-60px] md:max-lg:left-[-40px]");

export const bottomImage = cva(
  "absolute max-w-[291px] md:max-3xl:max-w-[220px] md:max-lg:max-w-[150px] bottom-[-90px] md:max-3xl:bottom-[-70px] md:max-lg:bottom-[-50px] left-[-90px] md:max-3xl:left-[-70px] md:max-lg:left-[-50px]"
);

export const mainMobile = cva(
  "rounded-[8px] shadow-[2px_4px_4px_0px_#00000040] md:hidden w-full max-w-[500px] mx-auto"
);

export const mainTitle = cva("text-main font-semibold text-2xl md:text-[40px] md:max-3xl:text-[34px] md:max-lg:text-2xl");

export const subtitle = cva(
  "text-main font-medium text-[16px] md:text-2xl md:max-3xl:text-xl md:max-lg:text-base mb-6 md:mb-10 md:max-3xl:mb-8 md:max-lg:mb-4"
);

export const textContent = cva("text-sm md:text-lg md:max-3xl:text-base md:max-lg:text-sm space-y-4 md:max-lg:space-y-2 mb-6 md:mb-10 md:max-3xl:mb-8 md:max-lg:mb-4");

export const campusLink = cva(
  "text-link hover:text-linkDark font-medium underline underline-offset-2"
);

export const readMoreButton = cva(
  "max-md:w-full bg-mainLight w-40 max-3xl:w-36 h-12 max-3xl:h-10 shadow-[2px_3px_4px_0px_#00000040] font-medium text-lg max-3xl:text-base hover:bg-main hover:cursor-pointer"
);
