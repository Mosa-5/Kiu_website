import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "../ui/button";

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

🧭 YOUR PERSONALITY & PURPOSE:
- You are polite, warm, and professional.
- You represent KIU, a modern, international research university in Kutaisi, Georgia.
- You help with admissions, programs, campus life, and general information.

🌐 LANGUAGE RULE:
- Automatically detect whether the user is writing in Georgian or English.
- If the user writes in Georgian, reply **entirely in Georgian** with natural, polite wording.
- If the user writes in English, reply in English.
- If unclear, default to English.

📚 UNIVERSITY INFORMATION:
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

🎯 GUIDELINES:
- Be concise but friendly.
- Always give clear answers.
- If a user asks something unrelated to KIU, politely guide them back to university-related info.
`;


      const prompt = `${context}\nUser: ${userText}\nAssistant:`;

      // Local testing
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      // Deployment (Vercel)
      // const response = await fetch("/api/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ prompt }),
      // });

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
        className={`fixed bottom-5 right-5 w-15 h-15 bg-mainLight text-white p-4 rounded-full hover:bg-main transition-all duration-300 border-2 border-main ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <MessageSquare size={24} />
      </Button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-5 max-sm:right-1/2 max-sm:translate-x-1/2 right-5 sm:w-100 w-87 h-120 bg-white shadow-xl border-main rounded-xl overflow-hidden border-2 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-main text-white p-3 flex justify-between items-center font-semibold tracking-wide">
          {title}
          <X
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex-1 p-3 overflow-y-auto chat-messages-scroll flex flex-col gap-2">
          {chatState.messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg max-w-[80%] animate-slideIn ${
                msg.sender === "user"
                  ? "bg-blue-100 self-end"
                  : "bg-gray-100 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {chatState.loading && (
            <div className="text-gray-500 text-base animate-pulse">
              Thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-2 border-t flex gap-2">
          <input
            className="flex-1 border rounded-md px-2 py-2 sm:py-2 shadow-sm text-base w-40 sm:w-auto focus:outline-none focus:ring-2 focus:ring-main transition-all"
            value={chatState.input}
            onChange={(e) =>
              setChatState((prev) => ({ ...prev, input: e.target.value }))
            }
            placeholder={placeholder}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            className="w-12 h-full shadow-sm transition-colors disabled:opacity-50"
            onClick={handleSend}
            disabled={chatState.loading}
          >
            <Send size={21} className="m-auto" />
          </Button>
        </div>
      </div>
    </>
  );
}
