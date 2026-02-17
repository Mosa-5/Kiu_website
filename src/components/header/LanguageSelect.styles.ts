import { cva } from "class-variance-authority";

export const trigger = cva(`
  w-full max-sm:flex-1 max-xl:lg:w-[80px] max-3xl:xl:w-[100px] h-[72px] max-3xl:h-[56px] flex items-center gap-2 justify-center focus-visible:ring-0 border-0 shadow-none text-lg max-3xl:text-base font-medium
  text-main [&>svg:last-child]:hidden max-lg:bg-mainLight max-lg:text-white max-sm:rounded-sm
`);

export const content = cva(`
  w-full min-w-0 font-[500] text-white sm:text-main max-sm:bg-mainLight
`);

export const item = cva(`
  border-x-2 border-transparent hover:border-l-main max-sm:hover:border-l-white max-sm:hover:bg-main rounded focus:text-inherit text-lg flex justify-center
  [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden max-sm:focus:bg-main
`);
