import { cva } from "class-variance-authority";

export const section = cva("mb-12 scroll-mt-8");

export const headingContainer = cva(
  "bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const title = cva("text-2xl sm:text-3xl font-medium text-mainDark");

export const icon = cva("text-mainDark");

export const supervisorList = cva("space-y-12");

export const supervisorName = cva(
  "text-xl sm:text-2xl font-medium text-slate-900 mb-4"
);

export const imageWrapper = cva(
  "float-right ml-8 mb-6 w-full sm:w-[476px] sm:h-[430px]"
);

export const image = cva("w-full rounded-lg shadow-lg h-full object-cover");

export const position = cva("text-sm sm:text-lg mb-6");

export const paragraphStyle = cva("mb-6 text-sm sm:text-lg");

export const clearFloat = cva("clear-both");

// Single supervisor specific styles
export const singleSupervisorName = cva(
  "text-2xl font-medium text-slate-900 mb-4"
);

export const singleImageWrapper = cva(
  "float-right ml-8 mb-6 w-full sm:w-[476px] sm:h-[430px]"
);

export const singleImage = cva(
  "w-full rounded-lg shadow-lg h-full object-cover"
);

export const singlePosition = cva("text-lg mb-6");

export const singleParagraph = cva("mb-6 text-lg");
