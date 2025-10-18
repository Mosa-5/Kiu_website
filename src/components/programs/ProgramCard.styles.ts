import { cva } from "class-variance-authority";

export const card = cva([
  "group relative max-w-[544px] h-[100px] sm:h-[259px] w-full",
  "sm:border-2 border-y-2 border-main sm:rounded-2xl overflow-hidden",
  "shadow-default bg-cover bg-center hover:cursor-pointer",
]);

export const overlay = cva([
  "absolute inset-0 backdrop-blur-md text-white flex flex-col items-center justify-center",
  "translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-5",
  "text-center rounded-2xl",
]);

export const description = cva("text-md max-w-[80%] text-center");

export const baseContent = cva(
  "absolute inset-0 flex items-center justify-center"
);

export const title = cva(
  "text-white font-semibold text-xl sm:text-2xl text-center backdrop-blur-[1px] flex rounded-full"
);
