import { cva } from "class-variance-authority";

export const sheetTitle = cva("text-center text-2xl border-b-2 pb-2");

export const menuContainer = cva("flex flex-col gap-2 items-center text-lg");

export const topBar = cva(
  "flex justify-between w-full border-b-2 gap-3 pb-1.5"
);

export const navLink = cva(
  "bg-mainLight text-white rounded-sm w-full shadow text-center py-1.5"
);
