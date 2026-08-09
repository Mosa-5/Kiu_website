import { cva } from "class-variance-authority";

export const floatingButton = cva(
  [
    "fixed bottom-[20px] right-[20px] w-[72px] h-[72px] sm:max-3xl:w-[60px] sm:max-3xl:h-[60px] bg-mainLight text-white p-0 rounded-full z-2",
    "hover:bg-main transition-all duration-300 border-2 border-main",
  ],
  {
    variants: {
      isOpen: {
        true: "scale-0 opacity-0",
        false: "scale-100 opacity-100",
      },
    },
  }
);

export const chatWindow = cva(
  [
    "fixed bottom-[20px] max-sm:right-1/2 max-sm:translate-x-1/2 right-[20px] z-2",
    "sm:w-[470px] sm:max-3xl:w-[400px] w-[348px] h-[480px] sm:h-[560px] sm:max-3xl:h-[480px] bg-white shadow-xl border-main rounded-xl overflow-hidden",
    "border-2 flex flex-col transition-all duration-300 origin-bottom-right",
  ],
  {
    variants: {
      isOpen: {
        true: "scale-100 opacity-100 translate-y-0",
        false: "scale-95 opacity-0 translate-y-4 pointer-events-none",
      },
    },
  }
);

export const chatHeader = cva(
  "bg-main text-white p-4 sm:max-3xl:p-3 text-lg sm:max-3xl:text-base flex justify-between items-center font-semibold tracking-wide"
);

export const closeIcon = cva(
  "cursor-pointer hover:opacity-80 transition-opacity"
);

export const messagesContainer = cva(
  "flex-1 p-4 sm:max-3xl:p-3 overflow-y-auto chat-messages-scroll flex flex-col gap-3 sm:max-3xl:gap-2"
);

export const messageBox = cva("p-3 sm:max-3xl:p-2 text-[17px] sm:max-3xl:text-base rounded-lg max-w-[80%] animate-slideIn", {
  variants: {
    sender: {
      user: "bg-blue-100 self-end",
      bot: "bg-gray-100 self-start",
    },
  },
});

export const loadingText = cva("text-gray-500 text-base animate-pulse");

export const inputContainer = cva("p-3 sm:max-3xl:p-2 border-t flex gap-2");

export const input = cva([
  "flex-1 h-11 border rounded-md px-2 shadow-sm text-lg sm:max-3xl:text-base w-40 sm:w-auto",
  "focus:outline-none focus:ring-2 focus:ring-main transition-all",
]);

// Explicit height matching `input` above — h-full doesn't reliably resolve
// here since the flex row they sit in (inputContainer) has no definite
// height of its own for a percentage to resolve against.
export const sendButton = cva(
  "w-12 h-11 shadow-sm transition-colors disabled:opacity-50"
);
