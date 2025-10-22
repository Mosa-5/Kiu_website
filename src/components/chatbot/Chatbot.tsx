import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

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

    setChatState(prev => ({
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

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, { sender: "bot", text: data.reply }],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      setChatState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          { sender: "bot", text: "Sorry, I had trouble processing your question." },
        ],
        loading: false,
      }));
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-main text-white p-4 rounded-full shadow-lg hover:bg-mainDark transition-all duration-200 border border-black"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-5 right-5 sm:w-80 w-64 h-96 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-300 flex flex-col">
          <div className="bg-main text-white p-3 flex justify-between items-center font-semibold">
            KIU Assistant
            <X className="cursor-pointer hover:opacity-80" onClick={() => setIsOpen(false)} />
          </div>

          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2">
            {chatState.messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {chatState.loading && <div className="text-gray-500 text-sm">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-md px-2 py-1 text-sm w-40 sm:w-auto"
              value={chatState.input}
              onChange={e => setChatState(prev => ({ ...prev, input: e.target.value }))}
              placeholder="Type your message..."
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-main text-white px-3 py-1 rounded-md"
              onClick={handleSend}
              disabled={chatState.loading}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
