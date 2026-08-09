import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "../ui/button";
import {
  floatingButton,
  chatWindow,
  chatHeader,
  closeIcon,
  messagesContainer,
  messageBox,
  loadingText,
  inputContainer,
  input,
  sendButton,
} from "./Chatbot.styles";
import { useHeaderTranslations } from "@/hooks/hooksHeader/useHeaderTranslation";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatbotGemini() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState({
    messages: [] as Message[],
    input: "",
    loading: false,
  });
  const { t } = useHeaderTranslations();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessageSent = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messages]);

  useEffect(() => {
    if (isOpen && !initialMessageSent.current) {
      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, { sender: "bot", text: t("chatbot.welcomeMessage") }],
      }));
      initialMessageSent.current = true;
    }
  }, [isOpen, t]);

  const handleSend = async () => {
    const userText = chatState.input.trim();
    if (!userText) return;

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, { sender: "user", text: userText }],
      input: "",
      loading: true,
    }));

    try {
      const sanitizedInput = userText.replace(/[\x00-\x1F\x7F]/g, "").slice(0, 500);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: sanitizedInput }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          response.status === 429
            ? data.error || "You've reached the limit of 5 messages. Please try again in 30 minutes."
            : "Sorry, I had trouble processing your question.",
        );
      }

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, { sender: "bot", text: data.reply }],
        loading: false,
      }));
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Sorry, I had trouble processing your question.";
      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, { sender: "bot", text: errorMessage }],
        loading: false,
      }));
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className={floatingButton({ isOpen })} aria-label="Open chatbot assistant">
        <MessageSquare size={24} />
      </Button>

      <div className={chatWindow({ isOpen })}>
        <div className={chatHeader()}>
          {t("chatbot.title")}
          <X className={closeIcon()} onClick={() => setIsOpen(false)} />
        </div>

        <div className={messagesContainer()}>
          {chatState.messages.map((message, index) => (
            <div key={index} className={messageBox({ sender: message.sender })}>
              {message.text}
            </div>
          ))}
          {chatState.loading && <div className={loadingText()}>{t("chatbot.thinking")}</div>}
          <div ref={messagesEndRef} />
        </div>

        <div className={inputContainer()}>
          <input
            className={input()}
            value={chatState.input}
            onChange={(event) => setChatState((prev) => ({ ...prev, input: event.target.value }))}
            placeholder={t("chatbot.placeholder")}
            onKeyDown={(event) => event.key === "Enter" && handleSend()}
          />
          <Button className={sendButton()} onClick={handleSend} disabled={chatState.loading} aria-label="Send chat message">
            <Send size={21} className="m-auto" />
          </Button>
        </div>
      </div>
    </>
  );
}
