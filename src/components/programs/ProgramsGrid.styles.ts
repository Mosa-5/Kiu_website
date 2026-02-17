import { cva } from "class-variance-authority";

export const grid = cva("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8 sm:max-3xl:gap-5");

export const emptyState = cva("flex items-center justify-center py-12");

export const emptyStateText = cva("text-xl sm:max-3xl:text-lg text-gray-600 font-medium");
