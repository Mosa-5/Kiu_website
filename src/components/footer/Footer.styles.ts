import { cva } from "class-variance-authority";

export const footerContainer = cva("w-full bg-[#192735]");

export const footerContent = cva("h-[403px] px-[120px] py-[80px]");

export const footerInner = cva("flex w-full justify-between items-start");

export const linksContainer = cva("flex max-w-[686px] gap-[77px]");

export const linkSection = cva("whitespace-nowrap");

export const sectionTitle = cva(
  "font-[500] text-[32px] text-[#FAF9F6] mb-[32px] whitespace-normal"
);

export const linksList = cva("text-sm flex flex-col gap-[16px] text-[#FAF9F6]");

export const contactList = cva(
  "text-sm flex flex-col gap-[16px] text-[#FAF9F6] *:flex *:items-center *:gap-[12px]"
);

export const emailLink = cva("border-b-1");

export const footerBottom = cva(
  "h-[72px] px-[120px] py-[24px] w-full bg-[#15222E]"
);

export const footerBottomInner = cva(
  "flex w-full justify-between items-center"
);

export const copyrightText = cva("text-sm text-[#FAF9F6]");

export const socialLinks = cva("flex gap-6");
