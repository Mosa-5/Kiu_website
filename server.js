// // server.js
// import express from 'express';
// import cors from 'cors';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3001;
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

// app.use(cors());
// app.use(express.json());

// app.post('/api/chat', async (req, res) => {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { prompt } = req.body;
//   if (!prompt) return res.status(400).json({ error: "Prompt required" });

//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();
//     res.status(200).json({ reply });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to generate content" });
//   }
// });

// app.listen(port, () => {
//   console.log(`🚀 Local server running at http://localhost:${port}`);
//   console.log(`📝 Chat API: http://localhost:${port}/api/chat`);
// });