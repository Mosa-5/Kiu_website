import { cva } from "class-variance-authority";

export const floatingButton = cva(
  [
    "fixed bottom-[20px] right-[20px] w-[60px] h-[60px] 3xl:w-[72px] 3xl:h-[72px] bg-mainLight text-white p-0 rounded-full z-2",
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
    "sm:w-[470px] sm:max-3xl:w-[400px] w-[348px] sm:h-[560px] sm:max-3xl:h-[480px] bg-white shadow-xl border-main rounded-xl overflow-hidden",
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
  "bg-main text-white p-3 3xl:p-4 3xl:text-lg flex justify-between items-center font-semibold tracking-wide"
);

export const closeIcon = cva(
  "cursor-pointer hover:opacity-80 transition-opacity"
);

export const messagesContainer = cva(
  "flex-1 p-3 3xl:p-4 overflow-y-auto chat-messages-scroll flex flex-col gap-2 3xl:gap-3"
);

export const messageBox = cva("p-2 3xl:p-3 3xl:text-[17px] rounded-lg max-w-[80%] animate-slideIn", {
  variants: {
    sender: {
      user: "bg-blue-100 self-end",
      bot: "bg-gray-100 self-start",
    },
  },
});

export const loadingText = cva("text-gray-500 text-base animate-pulse");

export const inputContainer = cva("p-2 3xl:p-3 border-t flex gap-2");

export const input = cva([
  "flex-1 border rounded-md px-2 py-2 sm:py-2 shadow-sm text-base 3xl:text-lg w-40 sm:w-auto",
  "focus:outline-none focus:ring-2 focus:ring-main transition-all",
]);

export const sendButton = cva(
  "w-12 h-full shadow-sm transition-colors disabled:opacity-50"
);
