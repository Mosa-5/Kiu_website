import { cva } from "class-variance-authority";

export const container = cva(["flex max-sm:flex-col sm:gap-6 sm:px-[120px]"]);

export const projectCard = cva([
  "relative max-sm:rounded-none max-sm:border-0 max-sm:border-y-2 hover:-translate-y-1 duration-200 sm:aspect-[550/260] h-40 sm:h-65 rounded-2xl overflow-hidden group cursor-pointer shadow-[2px_4px_4px_rgba(0,0,0,0.25)] border-2 border-[#3C70AF]",
]);

export const projectImage = cva(["w-full h-full object-cover"]);

export const projectOverlay = cva([
  "absolute inset-0 bg-gradient-to-br to-blue-900/60",
]);

export const projectContent = cva([
  "absolute inset-0 flex items-center justify-center",
]);

export const projectTitle = cva([
  "text-white text-xl sm:text-2xl font-semibold text-center backdrop-blur-[1px] bg-main px-5 py-1 flex rounded-lg",
]);
