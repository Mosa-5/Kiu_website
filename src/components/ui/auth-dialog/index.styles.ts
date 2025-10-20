import { cva } from "class-variance-authority";

export const triggerButton = cva([
  "flex max-sm:w-5/11 items-center gap-2 px-4 py-4 h-9.5 shadow-none rounded-sm sm:rounded-md",
  "bg-mainLight text-white hover:bg-main transition-colors text-base font-medium",
]);

export const dialogContent = cva("sm:max-w-md border-3 border-main");

export const dialogTitle = cva("text-2xl font-bold text-main text-center");

export const form = cva("space-y-4");

export const label = cva("block text-sm font-medium text-gray-700 mb-1");

export const input = cva([
  "w-full px-3 py-2 border border-gray-300 rounded-md",
  "focus:outline-none focus:ring-2 focus:ring-main",
]);

export const errorMessage = cva("text-red-600 text-sm bg-red-50 p-2 rounded");

export const successMessage = cva(
  "text-green-600 text-sm bg-green-50 p-2 rounded"
);

export const submitButton = cva(
  "w-full text-white py-5 rounded-md transition-colors font-medium cursor-pointer"
);

export const toggleContainer = cva("mt-4 text-center text-sm");

export const toggleButton = cva(
  "text-main hover:underline font-medium cursor-pointer"
);
