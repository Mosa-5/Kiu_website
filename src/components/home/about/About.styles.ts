import { cva } from "class-variance-authority";

export const container = cva(
  "max-sm:flex-col-reverse sm:max-w-[1494px] sm:max-3xl:max-w-[1200px] flex justify-between items-center gap-6 sm:gap-[90px] sm:max-3xl:gap-12 mx-auto sm:mb-[181px] sm:max-3xl:mb-32"
);

export const imageSection = cva(
  "w-full max-w-[613px] sm:max-3xl:max-w-[450px] flex flex-shrink-0 justify-center sm:justify-end"
);

export const imageWrapper = cva(
  "max-sm:hidden relative *:border-2 *:border-main *:shadow-[4px_4px_4px_0px_#00000040] *:rounded-full"
);

export const mainImage = cva("max-w-[515px] sm:max-3xl:max-w-[380px]");

export const topImage = cva("absolute max-w-[227px] sm:max-3xl:max-w-[170px] top-[-10px] left-[-80px] sm:max-3xl:left-[-60px]");

export const bottomImage = cva(
  "absolute max-w-[291px] sm:max-3xl:max-w-[220px] bottom-[-90px] sm:max-3xl:bottom-[-70px] left-[-90px] sm:max-3xl:left-[-70px]"
);

export const mainMobile = cva(
  "rounded-[8px] shadow-[2px_4px_4px_0px_#00000040] sm:hidden"
);

export const mainTitle = cva("text-main font-semibold text-2xl sm:text-[40px] sm:max-3xl:text-[34px]");

export const subtitle = cva(
  "text-main font-medium text-[16px] sm:text-2xl sm:max-3xl:text-xl mb-6 sm:mb-10 sm:max-3xl:mb-8"
);

export const textContent = cva("text-sm sm:text-lg sm:max-3xl:text-base space-y-4 mb-6 sm:mb-10 sm:max-3xl:mb-8");

export const campusLink = cva(
  "text-link hover:text-linkDark font-medium underline underline-offset-2"
);

export const readMoreButton = cva(
  "max-sm:w-full bg-mainLight w-40 max-3xl:w-36 h-12 max-3xl:h-10 shadow-[2px_3px_4px_0px_#00000040] font-medium text-lg max-3xl:text-base hover:bg-main hover:cursor-pointer"
);
