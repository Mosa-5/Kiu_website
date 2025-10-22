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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messages]);

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
You are KIU Assistant, a friendly and helpful chatbot for Kutaisi International University (KIU) based in Kutaisi, Georgia.

KEY UNIVERSITY INFORMATION:

CAMPUS ACCOMMODATION PRICES:
- 250 GEL for 2-person room
- 500 GEL for single room
- 300 GEL for single room on ground floor (requires documentation like disability proof or being a Teaching Assistant)

FACULTIES AND PROGRAMS:
- Computer Science (CS) - Supervisor: Nika Gagua
- Mathematics - Supervisors: Ramaz Bochorishvili and Boris Vexler
- Management
- Mathematics and AI
- Psychology
- Medicine
- Design

WEBSITE SECTIONS:
- Programs Page: Detailed information about all academic programs
- Projects Section: View upcoming, planned, and completed projects
- Admissions Page: Complete admission process and requirements
- News Page: All university news and updates
- Vacancies Page: Job openings and application form

GENERAL GUIDELINES:
- Be concise, helpful, and friendly
- Direct students to specific website sections when appropriate
- For ground floor accommodation, mention required documentation
- Provide supervisor names when asked about specific programs
- If you don't know something, direct users to contact support@kiu.ge
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
        className={`fixed bottom-5 right-5 w-15 h-15  bg-mainLight text-white p-4 rounded-full hover:bg-main transition-all duration-300 border-2 border-main ${
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
          KIU Assistant
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
            placeholder="Type your message..."
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
