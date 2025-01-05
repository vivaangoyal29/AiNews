const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { marked } = require("marked");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set in .env file");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/api/news", async (req, res) => {
  const category = req.query.category || "technology";
  const prompt = `Generate a news article about the latest ${category} trends.`;
  
  try {
    const result = await model.generateContent(prompt);
    const newsMarkdown = result.response.text();
    const newsHTML = marked(newsMarkdown);
    res.json({ news: newsHTML });
  } catch (error) {
    console.error("Error generating news:", error);
    res.status(500).json({ error: "Failed to generate news" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});