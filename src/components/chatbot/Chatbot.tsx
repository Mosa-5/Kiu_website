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

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessageSent = useRef(false);

  // 🔹 detect language from the URL path
  const lang = window.location.pathname.split("/")[1]; // "en" or "ka"

  // 🔹 decide text based on language
  const title = lang === "ka" ? "კიუ ასისტენტი" : "KIU Assistant";
  const placeholder =
    lang === "ka" ? "ჩაწერეთ თქვენი შეტყობინება..." : "Type your message...";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messages]);

  // Show welcome message the first time the chat opens
  useEffect(() => {
    if (isOpen && !initialMessageSent.current) {
      setChatState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            sender: "bot",
            text: "Hello! I'm KIU Assistant, a friendly chatbot here to help you with any questions about Kutaisi International University. How can I assist you today?",
          },
        ],
      }));
      initialMessageSent.current = true;
    }
  }, [isOpen]);

  // Open chat automatically on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Open after 1 second
    return () => clearTimeout(timer);
  }, []);

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
      const context = `
You are KIU Assistant — a friendly and helpful chatbot for Kutaisi International University (KIU), located in Kutaisi, Georgia.

 YOUR PERSONALITY & PURPOSE:
- You are polite, warm, and professional.
- You represent KIU, a modern, international research university in Kutaisi, Georgia.
- You help with admissions, programs, campus life, and general information.

 LANGUAGE RULE:
- Automatically detect whether the user is writing in Georgian or English.
- If the user writes in Georgian, reply **entirely in Georgian** with natural, polite wording.
- If the user writes in English, reply in English.
- If unclear, default to English.

 UNIVERSITY INFORMATION:
- KIU (Kutaisi International University) offers top-quality education and research.
- Partnered with the Technical University of Munich (TUM).
- Main programs: Computer Science, Mathematics, Management, Psychology, Medicine, Design, Mathematics and AI.
- Campus accommodation: 
  • 250 GEL (2-person room)
  • 500 GEL (single room)
  • 300 GEL (ground floor, with special documentation)
- Website: https://www.kiu.edu.ge
- Email: support@kiu.ge
- Admissions and program info are on the official website.
- If unsure, guide users to info@kiu.edu.ge.

 GUIDELINES:
- Be concise but friendly.
- Always give clear answers.
- If a user asks something unrelated to KIU, politely guide them back to university-related info.
`;

      const prompt = `${context}\nUser: ${userText}\nAssistant:`;

      //use this one for local testing

      // const response = await fetch("http://localhost:3001/api/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ prompt }),
      // });

      //use this one for vercel or deployment
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, { sender: "bot", text: data.reply }],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      setChatState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            sender: "bot",
            text: "Sorry, I had trouble processing your question.",
          },
        ],
        loading: false,
      }));
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={floatingButton({ isOpen })}
        aria-label="Open chatbot assistant"
      >
        <MessageSquare size={24} />
      </Button>

      {/* Chat Window */}
      <div className={chatWindow({ isOpen })}>
        <div className={chatHeader()}>
          {title}
          <X className={closeIcon()} onClick={() => setIsOpen(false)} />
        </div>

        <div className={messagesContainer()}>
          {chatState.messages.map((msg, i) => (
            <div key={i} className={messageBox({ sender: msg.sender })}>
              {msg.text}
            </div>
          ))}

          {chatState.loading && (
            <div className={loadingText()}>Thinking...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={inputContainer()}>
          <input
            className={input()}
            value={chatState.input}
            onChange={(e) =>
              setChatState((prev) => ({ ...prev, input: e.target.value }))
            }
            placeholder={placeholder}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            className={sendButton()}
            onClick={handleSend}
            disabled={chatState.loading}
            aria-label="Send chat message"
          >
            <Send size={21} className="m-auto" />
          </Button>
        </div>
      </div>
    </>
  );
}
