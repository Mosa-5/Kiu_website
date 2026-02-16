import { cva } from "class-variance-authority";

export const section = cva("mb-12 sm:max-3xl:mb-8 scroll-mt-8");

export const headingBadge = cva(
  "inline-flex items-center gap-3 sm:max-3xl:gap-2 px-4 sm:max-3xl:px-3 py-2 sm:max-3xl:py-1.5 rounded mb-6 sm:max-3xl:mb-4"
);

export const mainHeading = cva(
  "text-2xl sm:text-3xl sm:max-3xl:text-2xl font-medium"
);

export const iconWrapper = cva("text-mainDark");

export const subsectionWrapper = cva("mb-10 sm:max-3xl:mb-7");

export const subsectionTitle = cva(
  "text-xl sm:text-2xl sm:max-3xl:text-xl font-medium text-main mb-6 sm:max-3xl:mb-4"
);

export const grid = cva("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:max-3xl:gap-4");

export const memberCard = cva([
  "flex items-center hover:cursor-pointer border border-gray-200 rounded-lg",
  "shadow-sm hover:shadow-md transition-shadow",
]);

export const memberImage = cva("w-[105px] h-[105px] sm:max-3xl:w-[90px] sm:max-3xl:h-[90px] object-cover rounded-l-md");

export const memberInfo = cva("ml-4 sm:max-3xl:ml-3");

export const memberName = cva(
  "font-medium text-lg sm:max-3xl:text-base text-gray-900 leading-tight"
);

export const memberTitle = cva("text-gray-700 text-sm sm:max-3xl:text-xs mt-1");
