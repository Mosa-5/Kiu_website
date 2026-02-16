import { cva } from "class-variance-authority";

export const sectionDescription = cva("bg-gradient-to-b from-background");

export const sectionVideo = cva("py-16 md:py-20 sm:max-3xl:py-14 bg-background");

export const container = cva("mx-auto px-4 md:px-6 lg:px-8 flex justify-start");

export const contentWrapper = cva("max-w-6xl mx-auto");

export const animateFadeIn = cva("animate-fade-in");

export const paragraph = cva(
  "text-base sm:text-lg sm:max-3xl:text-base leading-relaxed text-foreground mb-12 sm:max-3xl:mb-8"
);

export const grid = cva("grid grid-cols-1 md:grid-cols-2 gap-6 sm:max-3xl:gap-4 mt-12 sm:max-3xl:mt-8");

export const featureCard = cva(
  "flex items-start space-x-4 p-6 sm:max-3xl:p-4 rounded-lg border-2 border-headingBg"
);

export const featureIconWrapper = cva(
  "flex-shrink-0 w-12 h-12 sm:max-3xl:w-10 sm:max-3xl:h-10 rounded-full bg-headingBg flex items-center justify-center"
);

export const featureIcon = cva("w-6 h-6 sm:max-3xl:w-5 sm:max-3xl:h-5 text-primary");

export const featureTitle = cva("font-semibold text-foreground mb-1");

export const featureDescription = cva("text-sm sm:max-3xl:text-xs text-muted-foreground flex");

export const videoSectionWrapper = cva(
  "flex flex-col lg:flex-row items-center justify-center gap-12 sm:max-3xl:gap-8 w-full max-w-6xl mx-auto"
);

export const dormitoryWrapper = cva(
  "flex flex-col max-w-lg lg:h-full sm:gap-2"
);

export const dormitoryHeader = cva("flex items-center space-x-3 mb-4");

export const dormitoryIconWrapper = cva(
  "w-12 h-12 sm:max-3xl:w-10 sm:max-3xl:h-10 rounded-full bg-headingBg flex items-center justify-center"
);

export const dormitoryIcon = cva("w-6 h-6 sm:max-3xl:w-5 sm:max-3xl:h-5 text-primary");

export const dormitoryTitle = cva(
  "text-2xl md:text-3xl sm:max-3xl:text-2xl font-bold text-foreground"
);

export const dormitoryDescription = cva("mb-6 sm:max-3xl:mb-4 leading-relaxed sm:max-3xl:text-sm");

export const buttonClass = cva("group w-fit max-sm:w-full h-12 sm:max-3xl:h-10");

export const buttonIcon = cva("ml-2 h-4 w-4");

export const iframeWrapper = cva(
  "relative aspect-video w-full flex justify-center items-center max-w-xl rounded-xl overflow-hidden shadow-md"
);

export const iframeInner = cva("w-full h-full");

export const playOverlay = cva(
  "absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all"
);

export const playButton = cva(
  "w-20 h-20 sm:max-3xl:w-16 sm:max-3xl:h-16 opacity-90 group-hover:opacity-100 group-hover:scale-105 duration-200 transition-all"
);

export const playButtonPolygon = cva("fill-none stroke-white");

export const playButtonCircle = cva("fill-none stroke-white");

export const loadingContainer = cva(
  "absolute inset-0 flex items-center justify-center bg-black/40 z-0"
);

export const loadingSpinner = cva(
  "w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"
);

export const thumbnailImage = cva("absolute inset-0");

export const videoIframe = cva("w-full h-full relative z-1");
