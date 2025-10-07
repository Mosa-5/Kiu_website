import { cva } from "class-variance-authority";

export const container = cva(
  "max-w-[1494px] flex justify-between items-center gap-[90px] m-auto mb-[181px]"
);

export const imageSection = cva("w-[613px] flex flex-shrink-0 justify-end");

export const imageWrapper = cva(
  "relative *:border-2 *:border-main *:shadow-[4px_4px_4px_0px_#00000040] *:rounded-full"
);

export const mainImage = cva("max-w-[515px]");

export const topImage = cva("absolute max-w-[227px] top-[-10px] left-[-80px]");

export const bottomImage = cva(
  "absolute max-w-[291px] bottom-[-90px] left-[-90px]"
);

export const mainTitle = cva("text-main font-semibold text-[40px]");

export const subtitle = cva("text-main font-medium text-2xl mb-10");

export const textContent = cva("text-lg space-y-4 mb-10");

export const campusLink = cva(
  "text-main font-medium underline underline-offset-5"
);

export const readMoreButton = cva(
  "bg-mainLight w-40 h-12 shadow-[2px_3px_4px_0px_#00000040] font-medium text-lg hover:bg-main hover:cursor-pointer"
);
