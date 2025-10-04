import { cva } from "class-variance-authority";

export const container = cva("mt-16 mb-40 flex flex-col items-center");

export const innerWrapper = cva("max-w-[1680px]");

export const heading = cva("text-4xl font-semibold text-[#3C70AF] mb-12");

export const grid = cva("grid grid-cols-1 md:grid-cols-3 gap-6");

export const card = cva([
  "bg-white relative group rounded-xl border-2 hover:-translate-y-1 shadow-sm overflow-hidden",
  "hover:shadow-md transition-all duration-200 cursor-pointer max-w-[540px] h-full",
]);

export const hoverBar = cva(
  "absolute bottom-0 left-0 w-full h-[5px] bg-[#3C70AF] opacity-0 group-hover:opacity-100 transition-all duration-200"
);

export const imageWrapper = cva("relative overflow-hidden");

export const image = cva(
  "object-cover w-full max-h-[420px] border-b-1 border-b-[#3C70AF]"
);

export const cardContent = cva("px-6 pt-8 pb-12 min-h-2");

export const date = cva("text-lg text-black font-medium");

export const title = cva("mt-4 text-2xl font-medium text-[#1b3d6e]");
