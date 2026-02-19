import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

const allowedOrigins = [
  "https://kiu-website.vercel.app",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { context, message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: context,
    });
    const result = await model.generateContent(message);
    const reply = result.response.text();
    res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "ვწუხვარ, რაღაც შეცდომა მოხდა. / Sorry, something went wrong." });
  }
}
