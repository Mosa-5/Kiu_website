import { cva } from "class-variance-authority";

export const container = cva(
  "max-w-[1680px] max-sm:px-4 mx-auto bg-white sm:my-28"
);

export const contentWrapper = cva(
  "max-sm:flex-col-reverse max-sm:flex relative"
);

export const imageWrapper = cva(
  "float-right sm:ml-4 mb-4 w-full md:w-1/2 lg:w-[829px] h-fit"
);

export const image = cva("w-full sm:h-[458px] rounded-lg shadow-lg object-cover");

export const paragraph = cva(
  "mb-[14px] text-lg text-gray-800 leading-[28px]"
);

export const clearFloat = cva("clear-both");

export const sectionTitle = cva(
  "font-semibold text-2xl text-main mb-5 mt-8"
);

export const bulletList = cva("ml-9 mb-4");

export const listItem = cva(
  "mb-2 text-base text-gray-800 leading-[28px] list-disc"
);

export const newsletterlink = cva(
  "text-main hover:underline"
);

export const htcImageWrapper = cva(
  "float-left sm:mr-4 mb-4 w-full md:w-1/2 lg:w-[829px] h-fit"
);

export const protonImageWrapper = cva(
  "float-right sm:ml-4 mb-4 w-full md:w-1/3 lg:w-[300px] h-fit"
);

export const protonImage = cva(
  "w-full h-auto rounded-lg"
);

export const link = cva(
  "text-[#0066cc] hover:underline"
);