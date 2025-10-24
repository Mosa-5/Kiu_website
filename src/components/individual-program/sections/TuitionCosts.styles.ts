import { cva } from "class-variance-authority";

export const section = cva("mb-12 scroll-mt-8");

export const headingContainer = cva(
  "inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const title = cva("text-2xl sm:text-3xl font-medium");

export const icon = cva("text-mainDark");

export const academicYear = cva(
  "text-xl sm:text-2xl font-medium text-main mb-6"
);

export const sectionTitle = cva("text-sm sm:text-lg font-medium mb-4");

export const pointsList = cva("mb-6 text-sm sm:text-lg space-y-2");

export const admissionNote = cva("text-sm sm:text-lg");

export const admissionLink = cva("text-main hover:underline font-medium");
