import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8 scroll-mt-8");

export const headingContainer = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const title = cva("text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium");

export const icon = cva("text-mainDark");

export const supervisorList = cva("space-y-12 sm:max-3xl:space-y-8");

export const supervisorName = cva(
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-medium text-slate-900 mb-4 sm:max-3xl:mb-3"
);

export const imageWrapper = cva(
  "float-right ml-8 sm:max-3xl:ml-6 mb-6 sm:max-3xl:mb-4 w-full sm:w-[476px] sm:h-[430px] sm:max-3xl:w-[380px] sm:max-3xl:h-[340px]"
);

export const image = cva("w-full rounded-lg shadow-lg h-full object-cover");

export const position = cva("text-sm sm:text-lg sm:max-3xl:text-base mb-6 sm:max-3xl:mb-4");

export const paragraphStyle = cva("mb-6 sm:max-3xl:mb-4 text-sm sm:text-lg sm:max-3xl:text-base");

export const clearFloat = cva("clear-both");

// Single supervisor specific styles
export const singleSupervisorName = cva(
  "text-2xl sm:max-3xl:text-xl font-medium text-slate-900 mb-4 sm:max-3xl:mb-3"
);

export const singleImageWrapper = cva(
  "float-right ml-8 sm:max-3xl:ml-6 mb-6 sm:max-3xl:mb-4 w-full sm:w-[476px] sm:h-[430px] sm:max-3xl:w-[380px] sm:max-3xl:h-[340px]"
);

export const singleImage = cva(
  "w-full rounded-lg shadow-lg h-full object-cover"
);

export const singlePosition = cva("text-lg sm:max-3xl:text-base mb-6 sm:max-3xl:mb-4");

export const singleParagraph = cva("mb-6 sm:max-3xl:mb-4 text-lg sm:max-3xl:text-base");
