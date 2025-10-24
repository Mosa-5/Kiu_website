import { cva } from "class-variance-authority";

export const container = cva("max-w-[1680px] max-sm:px-4 mx-auto bg-white");

export const contentWrapper = cva("max-sm:flex-col max-sm:flex relative");

export const introWrapper = cva("max-sm:flex-col-reverse max-sm:flex relative");

export const imageWrapper = cva(
  "float-right sm:ml-4 mb-4 w-full md:w-1/2 lg:w-[685px] h-fit"
);

export const image = cva(
  "w-full sm:h-[302px] rounded-lg shadow-lg object-cover"
);

export const paragraph = cva("mb-[14px] text-sm sm:text-lg text-gray-800");

export const clearFloat = cva("clear-both");

export const sectionTitle = cva("font-semibold text-2xl text-main mb-5 mt-8");

export const bulletList = cva("ml-4 sm:ml-5 mb-4 sm:mb-20");

export const listItem = cva("mb-2 text-sm sm:text-lg text-gray-800 list-disc");

export const newsletterlink = cva(
  "text-link hover:text-linkDark underline underline-offset-2"
);

export const htcImageWrapper = cva(
  "float-left sm:mr-4 mb-4 w-full md:w-1/2 lg:w-[685px] h-fit"
);

export const htcSectionWrapper = cva(
  "max-sm:flex-col-reverse max-sm:flex relative"
);

export const protonSection = cva("sm:mt-12");

export const publicationsSection = cva("sm:mt-12");

export const yearWrapper = cva("mt-6");

export const overflowHidden = cva("overflow-hidden");

export const link = cva(
  "text-link hover:text-linkDark underline underline-offset-2"
);
