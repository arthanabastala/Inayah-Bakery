import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

// Initialize the API client
// We safely check if process is defined to prevent crashes in browser-only environments.
// The API key is obtained exclusively from process.env.API_KEY as required.
const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey });

export const getFoodRecommendation = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I can't connect to the AI brain right now (API Key missing). But I recommend the Nastar Keju!";
  }

  const productListString = PRODUCTS.map(p => {
    let priceInfo = `Price: ${p.price}`;
    if (p.variants) {
      priceInfo = `Prices: ${p.variants.map(v => `${v.label} (${v.price})`).join(', ')}`;
    }
    return `- ${p.name} (${p.category}): ${p.description}. ${priceInfo}`;
  }).join('\n');

  const systemInstruction = `You are "Chef Bot", a friendly and appetizing AI assistant for a food catalog website called "Inayah's Bakery". 
  Your goal is to recommend products from the provided list based on the user's mood or preference.
  
  Rules:
  1. Only recommend items from the provided list.
  2. Keep responses short, fun, and appetizing (max 2-3 sentences).
  3. Use emojis related to food.
  4. If the user asks about something not on the menu, politely suggest a close alternative from the menu.
  5. Mention prices if relevant.
  
  Current Menu:
  ${productListString}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't decide what to recommend, but everything is delicious!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My taste buds are confused right now. Try the Nastar Keju!";
  }
};