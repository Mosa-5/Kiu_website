import { cva } from "class-variance-authority";

export const sectionDescription = cva("bg-gradient-to-b from-background");

export const sectionVideo = cva("py-16 md:py-20 bg-background");

export const container = cva("mx-auto px-4 md:px-6 lg:px-8 flex justify-start");

export const contentWrapper = cva("max-w-6xl mx-auto");

export const animateFadeIn = cva("animate-fade-in");

export const paragraph = cva(
  "text-base sm:text-lg leading-relaxed text-foreground mb-12"
);

export const grid = cva("grid grid-cols-1 md:grid-cols-2 gap-6 mt-12");

export const featureCard = cva(
  "flex items-start space-x-4 p-6 rounded-lg border-2 border-headingBg"
);

export const featureIconWrapper = cva(
  "flex-shrink-0 w-12 h-12 rounded-full bg-headingBg flex items-center justify-center"
);

export const featureIcon = cva("w-6 h-6 text-primary");

export const featureTitle = cva("font-semibold text-foreground mb-1");

export const featureDescription = cva("text-sm text-muted-foreground flex");

export const videoSectionWrapper = cva(
  "flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto"
);

export const dormitoryWrapper = cva(
  "flex flex-col max-w-lg lg:h-full sm:gap-2"
);

export const dormitoryHeader = cva("flex items-center space-x-3 mb-4");

export const dormitoryIconWrapper = cva(
  "w-12 h-12 rounded-full bg-headingBg flex items-center justify-center"
);

export const dormitoryIcon = cva("w-6 h-6 text-primary");

export const dormitoryTitle = cva(
  "text-2xl md:text-3xl font-bold text-foreground"
);

export const dormitoryDescription = cva("mb-6 leading-relaxed");

export const buttonClass = cva("group w-fit max-sm:w-full h-12");

export const buttonIcon = cva("ml-2 h-4 w-4");

export const iframeWrapper = cva(
  "relative aspect-video w-full flex justify-center items-center max-w-xl rounded-xl overflow-hidden shadow-md"
);

export const iframeInner = cva("w-full h-full");
