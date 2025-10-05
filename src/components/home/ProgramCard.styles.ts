import { cva } from "class-variance-authority";

export const card = cva([
  "group relative max-w-[544px] h-[259px] w-full",
  "border-2 border-[#3C70AF] rounded-2xl overflow-hidden",
  "shadow-[2px_4px_4px_0px_#00000040] bg-cover bg-center hover:cursor-pointer",
]);

export const overlay = cva([
  "absolute inset-0 bg-[#3C70AF]/95 text-white flex flex-col items-center justify-center",
  "translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-5",
  "text-center rounded-2xl",
]);

export const description = cva("text-md max-w-[80%] text-center");

export const baseContent = cva(
  "absolute inset-0 flex items-center justify-center"
);

export const title = cva(
  "text-white font-semibold text-2xl text-center backdrop-blur-[1px] flex rounded-full"
);
