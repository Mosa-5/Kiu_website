import { cva } from "class-variance-authority";

export const container = cva("w-full max-w-[1680px] m-auto");

export const headerSection = cva("pb-8 border-b-3 border-main mb-12");

export const title = cva("font-semibold text-[40px] text-main mb-4");

export const subtitle = cva(
  "text-lg font-medium text-main flex items-center gap-2"
);

export const contentWrapper = cva("w-full flex gap-16 items-center");

export const textSection = cva("w-full");

export const textContent = cva("text-lg space-y-[14px] mb-[40px]");

export const readMoreButton = cva("h-12 w-40");
