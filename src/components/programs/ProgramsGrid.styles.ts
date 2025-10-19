import { cva } from "class-variance-authority";

export const grid = cva("grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-8");

export const emptyState = cva("flex items-center justify-center py-12");

export const emptyStateText = cva("text-xl text-gray-600 font-medium");
