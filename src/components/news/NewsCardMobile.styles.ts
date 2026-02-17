import { cva } from "class-variance-authority";

export const card = cva([
  "overflow-hidden relative group gap-0 sm:hover:shadow-lg transition-all px-1.5 cursor-pointer",
  "w-full h-30 shadow-none border-x-0 rounded-none border-t-0 sm:hover:bg-mainLight",
  "duration-200 flex flex-row py-4 border-b border-b-[#D6D6D6]",
]);

export const image = cva("w-32 h-full object-cover rounded-md aspect-[4/3] shrink-0");

export const cardContent = cva("flex flex-col justify-center w-full");

export const date = cva("text-xs");

export const title = cva("text-sm font-medium line-clamp-3");
