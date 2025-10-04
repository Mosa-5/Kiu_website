import { cva } from "class-variance-authority";

export const container = cva(
  "relative w-full h-[907px] overflow-hidden flex flex-col items-center"
);

export const heroImage = cva("w-full h-full object-cover mb-[200px]");

export const contentBox = cva(
  "absolute bg-gray-200 top-[635px] w-[1680px] rounded-2xl flex justify-center"
);

export const contentInner = cva(
  "w-[1527px] py-5.5 flex flex-col justify-between"
);

export const title = cva("text-4xl font-semibold text-[#3C70AF]");

export const date = cva("text-[#3C70AF] font-medium text-xl mt-2");

export const backButton = cva([
  "absolute bg-transparent bottom-6 left-[120px] text-[#3C70AF] hover:bg-transparent text-2xl font-medium hover:cursor-pointer",
  "after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-[#3C70AF]",
  "after:transition-all after:duration-200 hover:after:w-4/6",
]);

export const notFound = cva("text-center text-xl mt-10");
