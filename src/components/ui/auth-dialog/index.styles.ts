import { cva } from "class-variance-authority";

export const triggerButton = cva([
  "flex max-sm:w-5/11 items-center gap-2 px-4 max-3xl:px-3 py-4 max-3xl:py-3 h-9.5 max-3xl:h-8 shadow-none rounded-sm sm:rounded-md",
  "bg-mainLight text-white hover:bg-main transition-colors text-base max-3xl:text-sm font-medium",
]);

export const dialogContent = cva("sm:max-w-lg sm:max-3xl:max-w-md border-3 border-main sm:p-8 sm:max-3xl:p-6");

export const dialogTitle = cva("sm:text-3xl sm:max-3xl:text-2xl font-bold text-main text-center");

export const form = cva("sm:space-y-5 sm:max-3xl:space-y-4");

export const label = cva("block sm:text-base sm:max-3xl:text-sm font-medium text-gray-700 sm:mb-2 sm:max-3xl:mb-1");

export const input = cva([
  "w-full sm:px-4 sm:py-3 sm:max-3xl:px-3 sm:max-3xl:py-2 border border-gray-300 rounded-md",
  "focus:outline-none focus:ring-2 focus:ring-main sm:text-base sm:max-3xl:text-sm",
]);

export const errorMessage = cva("text-red-600 text-sm bg-red-50 p-2 rounded");

export const successMessage = cva(
  "text-green-600 text-sm bg-green-50 p-2 rounded"
);

export const submitButton = cva(
  "w-full text-white sm:py-6 sm:max-3xl:py-5 sm:text-lg sm:max-3xl:text-base rounded-md transition-colors font-medium cursor-pointer"
);

export const toggleContainer = cva("mt-4 text-center sm:text-base sm:max-3xl:text-sm");

export const toggleButton = cva(
  "text-main hover:underline font-medium cursor-pointer"
);
