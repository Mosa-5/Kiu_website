import { cva } from "class-variance-authority";

export const trigger = cva(`
  w-5/11 sm:w-[118px] h-[72px] flex items-center gap-2 justify-center focus-visible:ring-0 border-0 shadow-none text-lg font-medium
  text-main [&>svg:last-child]:hidden max-sm:bg-mainLight max-sm:text-white max-sm:rounded-sm
`);

export const content = cva(`
  w-full min-w-0 font-[500] text-white sm:text-main max-sm:bg-mainLight
`);

export const item = cva(`
  border-x-2 border-transparent rounded-none hover:border-l-main max-sm:data-[state=checked]:bg-main rounded-sm focus:text-inherit text-lg flex justify-center
  [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden
`);
