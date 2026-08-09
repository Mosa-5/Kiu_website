import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const allowedOrigins = [process.env.CLIENT_ORIGIN || "http://localhost:5173"];
const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const chatbotInstructions = `
You are KIU Assistant, a friendly and helpful chatbot for Kutaisi International University (KIU), located in Kutaisi, Georgia.

YOUR PERSONALITY & PURPOSE:
- You are polite, warm, and professional.
- You represent KIU, a modern, international research university in Kutaisi, Georgia.
- You help with admissions, programs, campus life, and general information.

LANGUAGE RULE:
- Automatically detect whether the user is writing in Georgian or English.
- If the user writes in Georgian, reply entirely in Georgian with natural, polite wording.
- If the user writes in English, reply in English.
- If unclear, default to English.

UNIVERSITY INFORMATION:
- KIU (Kutaisi International University) offers top-quality education and research.
- Partnered with the Technical University of Munich (TUM).
- Main programs: Computer Science, Mathematics, Management, Psychology, Medicine, Design, Mathematics and AI.
- Campus accommodation:
  - 250 GEL (2-person room)
  - 500 GEL (single room)
  - 300 GEL (ground floor, with special documentation)
- Website: https://www.kiu.edu.ge
- Email: support@kiu.ge
- Admissions and program info are on the official website.
- If unsure, guide users to info@kiu.edu.ge.

GUIDELINES:
- Be concise but friendly.
- Always give clear answers.
- If a user asks something unrelated to KIU, politely guide them back to university-related info.
`;
const rateLimitEntries = new Map();

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "10kb" }));

function consumeRateLimit(clientIp) {
  const now = Date.now();
  const entry = rateLimitEntries.get(clientIp);

  if (!entry || entry.resetAt <= now) {
    rateLimitEntries.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= RATE_LIMIT) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

app.post("/api/chat", async (req, res) => {
  const rawMessage = req.body?.message;
  if (typeof rawMessage !== "string") return res.status(400).json({ error: "Message must be a string" });

  const message = rawMessage.replace(/[\x00-\x1F\x7F]/g, "").trim();
  if (!message) return res.status(400).json({ error: "Message is required" });
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer` });
  }

  const clientIp = req.ip || req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";
  const rateLimit = consumeRateLimit(clientIp);
  if (!rateLimit.allowed) {
    res.setHeader("Retry-After", rateLimit.retryAfterSeconds);
    return res.status(429).json({ error: "You've reached the limit of 5 messages. Please try again in 30 minutes." });
  }

  if (!process.env.GEMINI_KEY) {
    console.error("GEMINI_KEY is not configured");
    return res.status(500).json({ error: "Chat service is not configured" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", systemInstruction: chatbotInstructions });
    const result = await model.generateContent(message);
    return res.status(200).json({ reply: result.response.text() });
  } catch (error) {
    console.error("Chatbot request failed", error);
    return res.status(500).json({ reply: "Sorry, something went wrong. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Local server running at http://localhost:${port}`);
  console.log(`Chat API: http://localhost:${port}/api/chat`);
});
