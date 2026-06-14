import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON bodies
  app.use(express.json({ limit: "50mb" }));

  // Initialize Gemini AI
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for AI Image Analysis
  app.post("/api/analyze-chart", async (req, res) => {
    try {
      const { image, lang } = req.body;
      
      if (!image) {
        return res.status(400).json({ error: "No image provided" });
      }

      // Check for base64 data format
      const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let mimeType = "image/jpeg";
      let base64Data = image;

      if (matches && matches.length === 3) {
        mimeType = matches[1];
        base64Data = matches[2];
      }

      const promptTemplateTR = `Sen profesyonel bir İkili Opsiyon ve Kripto Para teknik analiz uzmanısın. Kullanıcı sana bir fiyat grafiği gönderdi. Lütfen bu grafiği analiz et. 
Grafiği incele ve şu konularda net bir değerlendirme yap:
1. Trendin yönü (Yükseliş / Düşüş / Yatay).
2. Olası destek ve direnç seviyeleri.
3. İkili opsiyon için kısa vadeli bir tahmin (Yukarı mı, Aşağı mı daha olası).
4. Genel risk durumu.

Lütfen cevabını yapılandırılmış ve profesyonel bir dille ver.`;

      const promptTemplateEN = `You are a professional Binary Options and Cryptocurrency technical analyst. The user has sent you a price chart. Please analyze this chart.
Examine the chart and provide a clear assessment on the following:
1. Trend direction (Bullish / Bearish / Sideways).
2. Potential support and resistance levels.
3. A short-term prediction for binary options (Call or Put likelihood).
4. Overall risk assessment.

Please provide your response in a structured and professional tone.`;

      const promptString = lang === 'TR' ? promptTemplateTR : promptTemplateEN;

      const imagePart = {
        inlineData: {
          mimeType: mimeType,
          data: base64Data,
        },
      };

      const textPart = {
        text: promptString,
      };

      const aiResponse = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: { parts: [imagePart, textPart] },
      });

      res.json({ analysis: aiResponse.text });

    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ 
        error: "Analiz sırasında bir hata oluştu / An error occurred during analysis", 
        details: error.message 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
