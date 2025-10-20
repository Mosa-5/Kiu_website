import { cva } from "class-variance-authority";

export const section = cva("mb-12 scroll-mt-8");

export const headingBadge = cva(
  "bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6"
);

export const mainHeading = cva(
  "text-2xl sm:text-3xl font-medium text-mainDark"
);

export const iconWrapper = cva("text-mainDark");

export const subsectionWrapper = cva("mb-10");

export const subsectionTitle = cva(
  "text-xl sm:text-2xl font-medium text-main mb-6"
);

export const grid = cva("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6");

export const memberCard = cva([
  "flex items-center hover:cursor-pointer border border-gray-200 rounded-lg",
  "shadow-sm hover:shadow-md transition-shadow",
]);

export const memberImage = cva("w-[105px] h-[105px] object-cover rounded-l-md");

export const memberInfo = cva("ml-4");

export const memberName = cva(
  "font-medium text-lg text-gray-900 leading-tight"
);

export const memberTitle = cva("text-gray-700 text-sm mt-1");
