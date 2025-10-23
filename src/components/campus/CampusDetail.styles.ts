import { cva } from "class-variance-authority";

export const sectionDescription = cva(
  "py-10 md:py-16 bg-gradient-to-b from-background"
);

export const sectionVideo = cva(
  "py-16 md:py-20 bg-background"
);

export const container = cva(
  "container mx-auto px-4 md:px-6 lg:px-8"
);

export const contentWrapper = cva(
  "max-w-6xl mx-auto"
);

export const paragraph = cva(
  "text-lg leading-relaxed text-foreground mb-12"
);

export const grid = cva(
  "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
);

export const featureCard = cva(
  "flex items-start space-x-4 p-6 rounded-lg border-3 border-headingBg"
);

export const featureIconWrapper = cva(
  "flex-shrink-0 w-12 h-12 rounded-full bg-headingBg flex items-center justify-center"
);

export const featureTitle = cva(
  "font-semibold text-foreground mb-1"
);

export const featureDescription = cva(
  "text-sm text-muted-foreground"
);

export const videoSectionWrapper = cva(
  "flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto"
);

export const dormitoryWrapper = cva("flex-1");

export const dormitoryHeader = cva(
  "flex items-center space-x-3 mb-4"
);

export const dormitoryIconWrapper = cva(
  "w-12 h-12 rounded-full bg-headingBg flex items-center justify-center"
);

export const dormitoryTitle = cva(
  "text-2xl md:text-3xl font-bold text-foreground"
);

export const dormitoryDescription = cva(
  "text-muted-foreground mb-6 leading-relaxed"
);

export const videoWrapper = cva(
  "flex-1 text-center flex flex-col items-center justify-center"
);

export const videoTitle = cva(
  "text-3xl md:text-4xl font-bold text-foreground mb-3"
);

export const videoSubtitle = cva(
  "text-lg text-muted-foreground mb-6"
);

export const iframeWrapper = cva(
  "relative aspect-video w-full max-w-xl rounded-xl overflow-hidden border"
);
