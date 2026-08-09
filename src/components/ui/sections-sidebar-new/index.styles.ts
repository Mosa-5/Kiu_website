import { cva } from "class-variance-authority";

export const container = cva("shrink-0 h-fit", {
  variants: {
    variant: {
      // Sticky column next to the page content — desktop only.
      sidebar: "max-lg:hidden sticky top-40 z-40 w-[315px] sm:max-3xl:w-[240px]",
      // Same list, boxed and placed inline at the top of the page — mobile/tablet only.
      boxed: "lg:hidden w-full border border-gray-200 rounded-xl p-4 sm:p-5 mb-8",
    },
  },
  defaultVariants: {
    variant: "sidebar",
  },
});

// Mobile (boxed variant, < lg) uses a tight gap so each button's own
// padding — not empty space between them — is what makes up the tap
// target. Desktop (sidebar variant, lg+) keeps its original spacing.
export const nav = cva("flex flex-col gap-1 lg:gap-3 lg:max-3xl:gap-2");

export const navTitle = cva("text-xl px-3 sm:max-3xl:px-2 pb-4 sm:max-3xl:pb-3 font-bold text-[#1B3D6E] text-[25px] sm:max-3xl:text-[20px] w-full");

export const navButton = cva(
  "w-full text-left px-3 lg:max-3xl:px-2 py-4 lg:py-3 lg:max-3xl:py-2 text-base sm:text-lg lg:max-3xl:text-sm font-normal rounded-md transition-colors",
  {
    variants: {
      active: {
        true: "text-white bg-main ",
        false: "text-main hover:bg-blue-50 hover:text-[#1B3D6E] hover:cursor-pointer active:bg-blue-50 duration-200",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
