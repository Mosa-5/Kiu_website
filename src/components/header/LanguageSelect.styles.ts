import { cva } from "class-variance-authority";

export const trigger = cva(`
  w-[118px] h-[72px] flex items-center gap-2 justify-center focus-visible:ring-0 border-0 shadow-none text-lg font-medium
  text-main [&>svg:last-child]:hidden
`);

export const content = cva(`
  w-[118px] font-[500] text-main
`);

export const item = cva(`
  border-x-2 border-transparent rounded-none hover:border-l-main focus:text-inherit text-lg flex justify-center
  [&>span[data-slot=select-item-indicator]]:hidden [&>span.absolute]:hidden
`);
