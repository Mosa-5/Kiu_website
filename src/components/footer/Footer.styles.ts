import { cva } from "class-variance-authority";

export const footerContainer = cva("w-full bg-[#192735] mt-36");

export const footerContent = cva(
  "sm:h-[403px] px-4 sm:px-[120px] pb-12 pt-8 sm:py-[80px]"
);

export const footerInner = cva(
  "max-sm:flex-col max-sm:gap-8 flex w-full justify-between items-start"
);

export const linksContainer = cva(
  "flex max-sm:flex-col max-w-[686px] gap-7 sm:gap-[77px]"
);

export const linkSection = cva("whitespace-nowrap");

export const footerLogo = cva("max-sm:w-[113px]");

export const sectionTitle = cva(
  "font-medium text-2xl sm:text-[32px] text-[#FAF9F6] mb-5 sm:mb-[32px] whitespace-normal"
);

export const linksList = cva("text-sm flex flex-col gap-[16px] text-[#FAF9F6]");

export const contactList = cva(
  "text-sm flex flex-col gap-[16px] text-[#FAF9F6] *:flex *:items-center *:gap-[12px]"
);

export const emailLink = cva("border-b-1");

export const footerBottom = cva(
  "sm:h-[72px] p-4 sm:px-[120px] sm:py-[24px] w-full bg-[#15222E]"
);

export const footerBottomInner = cva(
  "max-sm:flex-col max-sm:gap-6 flex w-full justify-between items-center"
);

export const copyrightText = cva(
  "text-sm min-w-[248.5px] text-center text-[#FAF9F6]"
);

export const socialLinks = cva("flex gap-6");
