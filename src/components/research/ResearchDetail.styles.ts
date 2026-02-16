import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] sm:max-3xl:max-w-[1400px] max-sm:px-4 sm:px-10 mx-auto bg-white");

export const contentWrapper = cva("max-sm:flex-col max-sm:flex relative");

export const introWrapper = cva("max-sm:flex-col-reverse max-sm:flex relative");

export const imageWrapper = cva(
  "float-right sm:ml-4 sm:max-3xl:ml-3 mb-4 w-full md:w-1/2 lg:w-[685px] sm:max-3xl:lg:w-[540px] h-fit"
);

export const image = cva(
  "w-full sm:h-[302px] sm:max-3xl:h-[240px] rounded-lg shadow-lg object-cover"
);

export const paragraph = cva("mb-[14px] sm:max-3xl:mb-3 text-sm sm:text-lg sm:max-3xl:text-base text-gray-800");

export const clearFloat = cva("clear-both");

export const sectionTitle = cva("font-semibold text-2xl sm:max-3xl:text-xl text-main mb-5 sm:max-3xl:mb-4 mt-8 sm:max-3xl:mt-6");

export const bulletList = cva("ml-4 sm:ml-5 mb-4 sm:mb-20 sm:max-3xl:mb-14");

export const listItem = cva("mb-2 text-sm sm:text-lg sm:max-3xl:text-base text-gray-800 list-disc");

export const newsletterlink = cva(
  "text-link hover:text-linkDark underline underline-offset-2"
);

export const htcImageWrapper = cva(
  "float-left sm:mr-4 sm:max-3xl:mr-3 mb-4 w-full md:w-1/2 lg:w-[685px] sm:max-3xl:lg:w-[540px] h-fit"
);

export const htcSectionWrapper = cva(
  "max-sm:flex-col-reverse max-sm:flex relative"
);

export const protonSection = cva("sm:mt-12 sm:max-3xl:mt-8");

export const publicationsSection = cva("sm:mt-12 sm:max-3xl:mt-8");

export const yearWrapper = cva("mt-6 sm:max-3xl:mt-4");

export const overflowHidden = cva("overflow-hidden");

export const link = cva(
  "text-link hover:text-linkDark underline underline-offset-2"
);
